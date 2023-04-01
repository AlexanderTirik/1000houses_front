import { useEffect, useState } from 'react'

export default function useTheme(): [
    'dark' | 'light',
    (theme: 'dark' | 'light') => void
] {
    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
        window.dispatchEvent(new Event('storage'))
    }, [theme, colorTheme])

    return [theme, setTheme]
}
