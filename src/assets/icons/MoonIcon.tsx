interface IProps {
    pathClassName?: string
    className?: string
}
export const MoonIcon = ({ pathClassName, className }: IProps) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M3.03009 12.42C3.39009 17.57 7.76009 21.76 12.9901 21.99C16.6801 22.15 19.9801 20.43 21.9601 17.72C22.7801 16.61 22.3401 15.87 20.9701 16.12C20.3001 16.24 19.6101 16.29 18.8901 16.26C14.0001 16.06 10.0001 11.97 9.98009 7.13996C9.97009 5.83996 10.2401 4.60996 10.7301 3.48996C11.2701 2.24996 10.6201 1.65996 9.37009 2.18996C5.41009 3.85996 2.70009 7.84996 3.03009 12.42Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={pathClassName}
        />
    </svg>
)
