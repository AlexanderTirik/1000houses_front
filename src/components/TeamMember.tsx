interface IProps {
    name: string
    description: string
    labels: string[]
    photo: string
}
export const TeamMember = ({ name, description, labels, photo }: IProps) => (
    <div className="mx-1 flex flex-1 flex-col">
        <img src={photo} className="mb-1 h-1/2 w-full rounded-2xl" />
        <div className="mb-1">
            <div className="rounded-3xl bg-white px-2 py-3 text-center text-2xl font-semibold text-black dark:bg-gray-700 dark:text-white">
                {name}
            </div>
        </div>
        <div className="rounded-3xl bg-white px-2 py-3 text-black dark:bg-gray-700 dark:text-white">
            <div className="div mb-2 flex flex-wrap">
                {labels.map((label) => (
                    <div className="mr-[-16px] rounded-3xl border border-gray-400 bg-gray-100 px-6 py-2 text-gray-400 dark:border-white dark:bg-black dark:text-white">
                        {label}
                    </div>
                ))}
            </div>
            <div className="text-light text-black dark:text-white">
                {description}
            </div>
        </div>
    </div>
)
