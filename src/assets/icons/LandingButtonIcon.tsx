interface IProps {
    className?: string
    pathClassName?: string
}
export const LandingButtonIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g clip-path="url(#clip0_12_997)">
            <path
                d="M0 4C0 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4ZM20 4H20.75V3.25H20V4ZM16 20C16 22.2091 17.7909 24 20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16C17.7909 16 16 17.7909 16 20ZM0 20C0 22.2091 1.79086 24 4 24C6.20914 24 8 22.2091 8 20C8 17.7909 6.20914 16 4 16C1.79086 16 0 17.7909 0 20ZM4 4.75H20V3.25H4V4.75ZM19.25 4V20H20.75V4H19.25ZM19.4697 3.46967L3.46967 19.4697L4.53033 20.5303L20.5303 4.53033L19.4697 3.46967Z"
                fill="black"
                className={pathClassName}
            />
        </g>
        <defs>
            <clipPath id="clip0_12_997">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
