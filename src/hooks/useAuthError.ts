import { useCallback, useState } from 'react'

export const useAuthError = () => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState<'email' | 'password' | 'all' | null>()

    const setError = useCallback(
        (type: 'email' | 'password' | 'all' | null, message: string) => {
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
