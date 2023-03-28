import { ReactElement, ReactNode, cloneElement } from 'react'

interface IProps {
    isActive: boolean
    icon: ReactNode
    onClick: () => void
}
export const ThemeOption = ({ isActive, icon, onClick }: IProps) => (
    <button
        onClick={onClick}
        className="group relative flex h-full w-full cursor-pointer items-center justify-center pb-1"
    >
        {cloneElement(icon as ReactElement, {
            className: 'drop-shadow-primary',
            pathClassName: isActive
                ? 'stroke-blue drop-shadow-primary'
                : 'transition group-hover:stroke-blue dark:stroke-white group-hover:drop-shadow-primary',
        })}
        <div
            className={`${
                !isActive ? 'opacity-0' : ''
            } absolute bottom-0 h-1 w-full rounded-t-full bg-[blue] shadow-primary transition group-hover:opacity-100`}
        />
    </button>
)
