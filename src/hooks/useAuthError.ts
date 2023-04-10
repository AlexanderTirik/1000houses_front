import { useCallback, useState } from 'react'

export const useAuthError = () => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState<string>()

    const setError = useCallback((message: string, type?: string) => {
        setType(type)
        setMessage(message)
    }, [])

    const cleanError = useCallback(() => {
        setType('')
        setMessage('')
    }, [])

    return [type, message, setError, cleanError] as const
}
