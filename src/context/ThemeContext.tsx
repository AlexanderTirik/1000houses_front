import { ReactElement, createContext, useEffect, useState } from 'react'

interface IThemeContext {
    theme: 'light' | 'dark'
    setTheme: (theme: 'light' | 'dark') => void
}

export const ThemeContext = createContext({
    theme: 'light',
    setTheme: (theme: 'light' | 'dark') => {},
} as IThemeContext)

interface IProps {
    children: ReactElement
}
export const ThemeProvider = ({ children }: IProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
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
    }, [theme, colorTheme])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
