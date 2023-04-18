interface IProps {
    onClicks?: (() => void)[]
    labels: string[]
    activeIndex?: number
    className?: string
}
export const ButtonCheckbox = ({
    labels,
    onClicks,
    activeIndex,
    className,
}: IProps) => {
    return (
        <div className={'flex flex-row ' + className}>
            {labels.map((label, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (onClicks) {
                            onClicks[index]()
                        }
                    }}
                    className={
                        `mr-1
                        rounded-full
                    border
                    bg-gray-100
                    py-1
                    px-3
                    transition
                    hover:border-black
                    hover:text-black
                    dark:bg-black
                    dark:hover:border-white 
                    dark:hover:text-white ` +
                        (activeIndex === index
                            ? `border-black
                            text-black
                            dark:border-white
                            dark:text-white`
                            : `border-white 
                            text-gray-400
                            dark:border-gray-800
                            dark:text-gray-800
                            `)
                    }
                >
                    {label}
                </button>
            ))}
        </div>
    )
}
