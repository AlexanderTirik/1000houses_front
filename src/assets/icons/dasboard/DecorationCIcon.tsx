interface IProps {
    className?: string
    pathClassName?: string
}
export const DecorationCIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="59"
        height="6"
        viewBox="0 0 59 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5L59 3.5L59 2.5L3 2.5L3 3.5Z"
            fill="#C3C3C3"
            className={pathClassName}
        />
    </svg>
)
