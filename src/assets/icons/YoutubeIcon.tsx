interface IProps {
    className?: string
    pathClassName?: string
}
export const YoutubeIcon = ({ className, pathClassName }: IProps) => (
    <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.792 1.41483C18.6521 1.64589 19.3325 2.32626 19.5635 3.18633C19.9872 4.75244 20 8.00019 20 8.00019C20 8.00019 20 11.2608 19.5764 12.8141C19.3453 13.6741 18.665 14.3545 17.8049 14.5856C16.2516 15.0092 10 15.0092 10 15.0092C10 15.0092 3.74839 15.0092 2.19512 14.5856C1.33504 14.3545 0.654686 13.6741 0.42362 12.8141C0 11.248 0 8.00019 0 8.00019C0 8.00019 0 4.75244 0.410783 3.19917C0.641849 2.33909 1.32221 1.65873 2.18229 1.42767C3.73556 1.00404 9.98716 0.991211 9.98716 0.991211C9.98716 0.991211 16.2388 0.991211 17.792 1.41483ZM13.1836 8.0002L7.99743 11.004V4.99635L13.1836 8.0002Z"
            fill="#AAAAAA"
            className={pathClassName}
        />
    </svg>
)
