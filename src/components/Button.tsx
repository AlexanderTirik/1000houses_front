import { ReactElement, ReactNode, cloneElement } from 'react'

interface IProps {
    children?: ReactNode
    className?: string
    variant?: 'primary' | 'secondary' | 'tertiary'
    icon?: ReactElement<{ pathClassName?: string; className?: string }>
    disabled?: boolean
    onClick: () => void
}

export const Button = ({
    children,
    className,
    variant = 'primary',
    disabled = false,
    icon,
    onClick,
}: IProps) => {
    const styles = {
        button: {
            primary: `bg-blue text-white disabled:cursor-not-allowed disabled:text-gray-400`,
            secondary: `bg-white
                text-black
                dark:text-white
                dark:bg-gray-700
                disabled:cursor-not-allowed
                disabled:text-gray-400
                dark:disabled:text-gray-400
                hover:bg-blue
                dark:hover:bg-blue
                transition`,
            tertiary: `border-solid
                border
                border-white
                dark:border-gray-700
                dark:text-white
                text-black
                disabled:cursor-not-allowed
                disabled:text-gray-400
                dark:disabled:text-gray-400
                hover:border-blue
                dark:hover:border-blue
                transition`,
        },
        icon: {
            primary: !disabled ? 'stroke-white' : 'stroke-gray-400',
            secondary: !disabled ? 'dark:stroke-white' : 'stroke-gray-400',
            tertiary: !disabled ? 'dark:stroke-white' : 'stroke-gray-400',
        },
    }
    return (
        <button
            disabled={disabled}
            className={
                className +
                ' flex flex-row items-center rounded-full py-2 px-5 ' +
                styles.button[variant]
            }
            onClick={onClick}
        >
            {icon
                ? cloneElement(icon as ReactElement, {
                      className: 'mr-3',
                      pathClassName: styles.icon[variant],
                  })
                : null}
            {children}
        </button>
    )
}
