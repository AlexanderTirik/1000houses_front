interface IProps {
    className?: string
    pathClassName?: string
}
export const DecorationAIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="218"
        height="79"
        viewBox="0 0 218 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M215 0L212.066 4.97219L217.839 5.02735L215 0ZM0 78.8496C42.8027 78.8496 77.5591 79.0694 105.63 78.1899C133.695 77.3107 155.121 75.3321 171.255 70.9203C187.401 66.5048 198.295 59.6384 205.229 48.9542C212.15 38.2887 215.077 23.8916 215.457 4.52103L214.457 4.5014C214.078 23.8076 211.159 37.9787 204.39 48.4098C197.633 58.8221 186.989 65.5807 170.991 69.9557C154.979 74.3342 133.654 76.3115 105.598 77.1904C77.5482 78.0692 42.8156 77.8496 0 77.8496V78.8496Z"
            fill="#C3C3C3"
            className={pathClassName}
        />
    </svg>
)
