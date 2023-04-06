interface IProps {
    className?: string
    pathClassName?: string
}
export const CloseIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M6.65685 18.1569L17.9706 6.84315M17.9706 18.1569L6.65685 6.84315"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={'dark:stroke-white ' + pathClassName}
        />
    </svg>
)
