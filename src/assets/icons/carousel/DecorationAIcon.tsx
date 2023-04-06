interface IProps {
    className?: string
    pathClassName?: string
}
export const DecorationAIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="200"
        height="88"
        viewBox="0 0 200 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M-14 27.5L6.02002 7.91052C18.4552 -4.2572 39.3007 0.435618 45.322 16.7583L65.2663 70.8243C70.0173 83.7034 84.5833 89.9809 97.208 84.59L211 36"
            stroke="#787878"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
            className={pathClassName}
        />
    </svg>
)
