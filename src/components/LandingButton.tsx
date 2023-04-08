import { LandingButtonIcon } from '@assets/icons/LandingButtonIcon'
import { ReactElement, cloneElement } from 'react'

interface IProps {
    className?: string
    onClick?: () => void
    children?: ReactElement | string
}
export const LandingButton = ({ className, onClick, children }: IProps) => {
    return (
        <button
            onClick={onClick}
            className={
                className +
                ' border-whiteborder relative m-0.5 flex-1 rounded-3xl bg-white p-4 pr-10 text-2xl font-normal dark:bg-gray-700 dark:text-white lg:p-8 lg:text-4xl'
            }
        >
            {children}
            <LandingButtonIcon
                className="absolute top-4 right-4"
                pathClassName="dark:fill-white"
            />
        </button>
    )
}
