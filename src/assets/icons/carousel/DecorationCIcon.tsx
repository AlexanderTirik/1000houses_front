interface IProps {
    className?: string
    pathClassName?: string
}
export const DecorationCIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="200"
        height="82"
        viewBox="0 0 200 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M-1.5 39L38.9158 74.7396C49.6303 84.2144 66.2016 82.2737 74.4369 70.5796L115.978 11.5912C125.068 -1.31686 143.931 -2.08295 154.038 10.0455L201.5 67"
            stroke="#787878"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
            className={pathClassName}
        />
    </svg>
)
