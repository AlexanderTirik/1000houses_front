interface IProps {
    pathClassName?: string
    className?: string
}
export const WalletIcon = ({ pathClassName, className }: IProps) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={pathClassName}
        />
        <path
            d="M2.5 12.41V7.84C2.5 6.65 3.23 5.59 4.34 5.17L12.28 2.17C12.5677 2.06159 12.8774 2.02461 13.1825 2.06223C13.4876 2.09985 13.7791 2.21096 14.0318 2.386C14.2846 2.56105 14.491 2.79482 14.6335 3.06723C14.7761 3.33964 14.8503 3.64257 14.85 3.95V7.75M7 12H14M22.559 13.97V16.03C22.559 16.58 22.119 17.03 21.559 17.05H19.599C18.519 17.05 17.529 16.26 17.439 15.18C17.379 14.55 17.619 13.96 18.039 13.55C18.409 13.17 18.919 12.95 19.479 12.95H21.559C22.119 12.97 22.559 13.42 22.559 13.97Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={pathClassName}
        />
    </svg>
)
