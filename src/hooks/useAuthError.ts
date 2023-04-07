import { useCallback, useState } from 'react'

export const useAuthError = () => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState<'email' | 'password' | null>()

    const setError = useCallback(
        (type: 'email' | 'password' | null, message: string) => {
            setType(type)
            setMessage(message)
        },
        []
    )

    const cleanError = useCallback(() => {
        setType(null)
        setMessage('')
    }, [])

    return [type, message, setError, cleanError] as const
}
