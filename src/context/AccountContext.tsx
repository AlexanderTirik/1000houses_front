import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserSession,
} from 'amazon-cognito-identity-js'
import { ReactElement, createContext, useContext, useState } from 'react'
import userPool from '../config/userPool'
import { CognitoErrors } from '../enums/CognitoErrors'
import { ConfirmUserModal } from '@containers/ConfirmUserModal'
import { ModalContext } from './ModalContext'

interface IAccountContext {
    auth: (email: string, password: string) => Promise<any>
    getSession: () => Promise<any>
    logout: () => void
    isLoggedIn: boolean
}

export const AccountContext = createContext({
    auth: (email: string, password: string) => {},
    getSession: () => {},
    logout: () => {},
    isLoggedIn: false,
} as IAccountContext)

interface IProps {
    children: ReactElement
}
export const AccountProvider = ({ children }: IProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { showModal } = useContext(ModalContext)

    const getSession = () => {
        return new Promise((resolve, reject) => {
            const cognitoUser = userPool.getCurrentUser()
            if (cognitoUser) {
                cognitoUser.getSession(
                    (err: any, session: CognitoUserSession) => {
                        if (err) {
                            setIsLoggedIn(false)
                            reject(err)
                        } else {
                            setIsLoggedIn(true)
                            resolve(session)
                        }
                    }
                )
            } else {
                setIsLoggedIn(false)
                reject({ name: CognitoErrors.NotAuthorizedException })
            }
        })
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
                    resolve(result)
                    setIsLoggedIn(true)
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
                                showModal(<ConfirmUserModal email={email} />, {
                                    email,
                                    password,
                                })
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
                getSession,
                logout,
                isLoggedIn,
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}
