import { MoonIcon } from '@assets/icons/MoonIcon'
import { SunIcon } from '@assets/icons/SunIcon'
import { ThemeOption } from './ThemeOption'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

interface IProps {
    className?: string
}

export const ThemeSwitch = ({ className }: IProps) => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div className={className + ' flex flex-row'}>
            <ThemeOption
                onClick={() => setTheme('dark')}
                isActive={theme === 'dark'}
                icon={<MoonIcon />}
            />
            <ThemeOption
                onClick={() => setTheme('light')}
                isActive={theme === 'light'}
                icon={<SunIcon />}
            />
        </div>
    )
}
