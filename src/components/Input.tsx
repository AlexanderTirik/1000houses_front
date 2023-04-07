interface IProps {
    className?: string
    value?: string
    onChange: (value: string) => void
    placeholder?: string
    type?: 'text' | 'password'
}

export const Input = ({
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
}: IProps) => {
    return (
        <input
            type={type}
            className={
                'w-full rounded-2xl bg-white py-2 px-4 placeholder:text-gray-400 dark:bg-gray-700 dark:text-white ' +
                className
            }
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    )
}
