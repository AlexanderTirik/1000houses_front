interface IProps {
    className?: string
    pathClassName?: string
}
export const DecorationBIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="200"
        height="67"
        viewBox="0 0 200 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M0.5 46L32.0128 30.8738C42.8604 25.667 54.3982 36.6171 49.7651 47.7218V47.7218C44.6465 59.9901 58.95 71.1973 69.6377 63.2925L146.256 6.62398C156.287 -0.795265 170.33 0.708924 178.562 10.0844L200 34.5"
            stroke="#787878"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
            className={pathClassName}
        />
    </svg>
)
