import { DecorationAIcon } from '@assets/icons/dasboard/DecorationAIcon'
import { DecorationBIcon } from '@assets/icons/dasboard/DecorationBIcon'
import { DecorationCIcon } from '@assets/icons/dasboard/DecorationCIcon'
import { ReactElement, cloneElement } from 'react'

interface IProps {
    className?: string
    title: string
    primaryText: string | ReactElement
    secondaryText?: string
    variant?: 'A' | 'B' | 'C' | 'D'
}
export const DashboardCell = ({
    className,
    title,
    primaryText,
    secondaryText,
    variant,
}: IProps) => {
    const renderDecoration = () => {
        switch (variant) {
            case 'A':
                return (
                    <DecorationAIcon
                        className="absolute bottom-2 left-0 z-0"
                        pathClassName="dark:fill-gray-600"
                    />
                )
            case 'B':
                return (
                    <DecorationBIcon
                        className="absolute bottom-0 right-5 z-0"
                        pathClassName="dark:stroke-gray-600"
                    />
                )
            case 'C':
                return (
                    <DecorationCIcon
                        className="absolute top-10 right-0 z-0 scale-125"
                        pathClassName="dark:fill-gray-600"
                    />
                )
            case 'D':
                return (
                    <DecorationCIcon
                        className="absolute top-10 left-0 z-0 rotate-180 scale-125"
                        pathClassName="dark:fill-gray-600"
                    />
                )
            default:
                return null
        }
    }

    return (
        <div
            className={
                className +
                ' relative m-0.5 flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-4 dark:bg-gray-700'
            }
        >
            {renderDecoration()}
            <div className="z-10 mb-5 text-sm font-normal uppercase dark:text-white lg:text-base">
                {title}
            </div>
            <div className="z-10">
                <span className="text-2xl font-semibold dark:text-white lg:text-3xl">
                    {primaryText}
                </span>
                {secondaryText ? (
                    <span className="ml-2 text-base text-gray-400">
                        {secondaryText}
                    </span>
                ) : null}
            </div>
        </div>
    )
}
