import { ReactElement, createContext, useState } from 'react'
import { AuthType } from '../enums/AuthType'

interface IAuthContext {
    authType: AuthType
    isLoggedIn: boolean
    updateLoggedIn: (state: boolean, type: AuthType) => void
}

export const AuthContext = createContext({
    authType: AuthType.Unauthorized,
    isLoggedIn: false,
} as IAuthContext)

interface IProps {
    children: ReactElement
}
export const AuthProvider = ({ children }: IProps) => {
    const [authType, setAuthType] = useState<AuthType>(AuthType.Unauthorized)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const updateLoggedIn = (state: boolean, type: AuthType) => {
        if (
            (state == true &&
                type !== authType &&
                authType !== AuthType.Unauthorized) ||
            (state == false && type !== authType)
        ) {
            return
        }
        if (state) {
            setIsLoggedIn(true)
            setAuthType(type)
        } else {
            setIsLoggedIn(false)
            setAuthType(AuthType.Unauthorized)
        }
    }
    return (
        <AuthContext.Provider
            value={{
                authType,
                updateLoggedIn,
                isLoggedIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
