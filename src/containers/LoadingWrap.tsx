import { LoadingIcon } from '@assets/icons/LoadingIcon'

interface IProps {
    children: React.ReactNode
    isLoading?: boolean
    className?: string
    ref?: React.Ref<HTMLDivElement>
}

export const LoadingWrap = ({
    children,
    isLoading = true,
    className,
    ref,
}: IProps) => {
    return (
        <div ref={ref} className={`relative ${className ? className : ''}`}>
            {children}
            {isLoading ? (
                <div className="absolute top-1/2 left-1/2">
                    <LoadingIcon />
                </div>
            ) : null}
        </div>
    )
}
