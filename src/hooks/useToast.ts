import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ThemeContext } from '../context/ThemeContext'

export default function useToast(): {
    toastError: (message: string, toastId?: string) => void
} {
    const { theme } = useContext(ThemeContext)

    const toastError = (message: string, toastId?: string) => {
        const isMobile = window.matchMedia('(max-width: 600px)').matches
        toast.error(message, {
            position: isMobile
                ? toast.POSITION.TOP_CENTER
                : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
            toastId,
            theme,
        })
    }

    return { toastError }
}
