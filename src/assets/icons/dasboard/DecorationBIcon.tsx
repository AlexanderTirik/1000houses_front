interface IProps {
    className?: string
    pathClassName?: string
}
export const DecorationBIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="115"
        height="75"
        viewBox="0 0 115 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M46.6437 4.86263L7.66241 36.0814C3.27491 39.5689 0.462404 46.9376 1.41865 52.4501V97.2251C2.76865 105.213 17.8999 111.681 25.9999 111.681H88.9999C97.0437 111.681 112.231 105.156 113.581 97.2251V52.4501C114.481 46.9376 111.669 39.5689 107.337 36.0814L68.3562 4.91888C62.3374 0.0813785 52.6062 0.0813787 46.6437 4.86263Z"
            stroke="#C3C3C3"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={pathClassName}
        />
    </svg>
)
