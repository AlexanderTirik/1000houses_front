import { MoonIcon } from '@assets/icons/MoonIcon'
import { SunIcon } from '@assets/icons/SunIcon'
import { ThemeOption } from './ThemeOption'
import useTheme from '../../hooks/useTheme'

interface IProps {
    className?: string
}

export const ThemeSwitch = ({ className }: IProps) => {
    const [theme, setTheme] = useTheme()
    return (
        <div className={className + ' row flex'}>
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
// 37px to rem
