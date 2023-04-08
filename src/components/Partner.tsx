import { DecorationAIcon } from '@assets/icons/carousel/DecorationAIcon'
import { DecorationBIcon } from '@assets/icons/carousel/DecorationBIcon'
import { DecorationCIcon } from '@assets/icons/carousel/DecorationCIcon'
import { DecorationDIcon } from '@assets/icons/carousel/DecorationDIcon'

interface IProps {
    image: string
    name: string
    variant: 1 | 2 | 3 | 4
}
export const Partner = ({ image, name, variant }: IProps) => {
    const renderDecoration = () => {
        switch (variant) {
            case 1:
                return (
                    <DecorationAIcon
                        className="absolute bottom-0"
                        pathClassName="dark:stroke-[#787878]"
                    />
                )
            case 2:
                return (
                    <DecorationBIcon
                        className="absolute bottom-[27px]"
                        pathClassName="dark:stroke-[#787878]"
                    />
                )
            case 3:
                return (
                    <DecorationCIcon
                        className="absolute bottom-4"
                        pathClassName="dark:stroke-[#787878]"
                    />
                )
            case 4:
                return (
                    <DecorationDIcon
                        className="absolute bottom-[10px]"
                        pathClassName="dark:stroke-[#787878]"
                    />
                )
            default:
                return null
        }
    }
    return (
        <div className="relative flex w-[200px] flex-col items-center justify-center rounded-3xl bg-white p-4 dark:bg-gray-700 dark:text-white">
            <img src={image} className="mb-1 h-12 rounded-2xl" />
            <div className="text-2xl font-semibold">{name}</div>
            {renderDecoration()}
        </div>
    )
}
