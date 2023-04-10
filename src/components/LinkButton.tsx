import { ReactNode } from 'react'

interface IProps {
    children: ReactNode
    className?: string
    onClick?: () => void
}
export const LinkButton = ({ children, className, onClick }: IProps) => {
    return (
        <button
            onClick={onClick}
            className={`text-sm text-blue transition-all hover:underline ${className}`}
        >
            {children}
        </button>
    )
}
