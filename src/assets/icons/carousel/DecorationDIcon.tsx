interface IProps {
    className?: string
    pathClassName?: string
}
export const DecorationDIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="200"
        height="63"
        viewBox="0 0 200 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M0 40.5L7.72839 49.0334C16.6887 58.9271 31.9999 59.6088 41.804 50.5507L57.6038 35.953C65.0406 29.0821 75.9894 27.6173 84.9708 32.2918L136.397 59.0573C147.265 64.714 160.65 61.2756 167.446 51.0809L200.5 1.5"
            stroke="#787878"
            stroke-opacity="0.2"
            stroke-width="2"
            className={pathClassName}
        />
    </svg>
)
