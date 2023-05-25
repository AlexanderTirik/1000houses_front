import { ReactElement, createContext, useState } from 'react'

interface IAuthContext {
    authType: 'wallet' | 'cognito' | null
    isLoggedIn: boolean
    updateLoggedIn: (state: boolean, type: 'wallet' | 'cognito') => void
}

export const AuthContext = createContext({
    authType: null,
    isLoggedIn: false,
} as IAuthContext)

interface IProps {
    children: ReactElement
}
export const AuthProvider = ({ children }: IProps) => {
    const [authType, setAuthType] = useState<'wallet' | 'cognito' | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const updateLoggedIn = (state: boolean, type: 'wallet' | 'cognito') => {
        if (state == true && type !== authType && authType !== null) {
            return
        }
        if (state) {
            setIsLoggedIn(true)
            setAuthType(type)
        } else {
            setIsLoggedIn(false)
            setAuthType(null)
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
