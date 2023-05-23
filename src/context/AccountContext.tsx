import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'
import {
    ReactElement,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'
import userPool from '../config/userPool'
import { CognitoErrors } from '../enums/CognitoErrors'
import { ConfirmUserModal } from '@containers/Modals/ConfirmUserModal'
import { ModalContext } from './ModalContext'
import { getSession } from '../helpers/getSession'

interface IAccountContext {
    email: string
    auth: (email: string, password: string) => Promise<any>
    updateAuthStatus: () => Promise<void>
    logout: () => void
    isLoggedIn: boolean
}

export const AccountContext = createContext({
    auth: (email: string, password: string) => {},
    updateAuthStatus: () => {},
    logout: () => {},
    isLoggedIn: false,
    email: '',
} as IAccountContext)

interface IProps {
    children: ReactElement
}
export const AccountProvider = ({ children }: IProps) => {
    const [email, setEmail] = useState<string>('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { showModal } = useContext(ModalContext)

    useEffect(() => {
        updateAuthStatus()
    }, [])

    const updateAuthStatus = async () => {
        try {
            const session = await getSession()
            setEmail(session.getIdToken().payload.email.toLowerCase())
            setIsLoggedIn(true)
        } catch (e) {
            setIsLoggedIn(false)
        }
    }

    const auth = async (email: string, password: string) => {
        return new Promise((resolve, reject) => {
            const cognitoUser = new CognitoUser({
                Username: email,
                Pool: userPool,
            })

            const authDetails = new AuthenticationDetails({
                Username: email,
                Password: password,
            })

            cognitoUser.authenticateUser(authDetails, {
                onSuccess: (result) => {
                    setEmail(email)
                    setIsLoggedIn(true)
                    resolve(result)
                },
                onFailure: (err) => {
                    if (err.name == CognitoErrors.UserNotConfirmedException) {
                        cognitoUser.resendConfirmationCode(
                            (confirmErr, result) => {
                                if (confirmErr) {
                                    reject(confirmErr)
                                    setIsLoggedIn(false)
                                    return
                                }
                                showModal(
                                    <ConfirmUserModal
                                        email={email}
                                        from="login"
                                    />,
                                    {
                                        email,
                                        password,
                                        from: 'login',
                                    }
                                )
                            }
                        )
                        return
                    }
                    setIsLoggedIn(false)
                    reject(err)
                },
                newPasswordRequired: (data) => {
                    setIsLoggedIn(false)
                    resolve(data)
                },
            })
        })
    }

    const logout = () => {
        const user = userPool.getCurrentUser()
        if (user) {
            user.signOut()
            setIsLoggedIn(false)
        }
    }

    return (
        <AccountContext.Provider
            value={{
                auth,
                logout,
                updateAuthStatus,
                isLoggedIn,
                email,
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}
