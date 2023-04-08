interface IProps {
    title: string
    links?: string[]
    names: string[]
}

export const FooterList = ({ title, links = [], names }: IProps) => (
    <div className="my-4 flex flex-col lg:my-0">
        <div className="mb-3 font-bold text-black dark:text-white">{title}</div>
        {names.map((name, index) => {
            const link = links[index]
            return link ? (
                <a
                    key={title + name}
                    href={link}
                    className="text-gray-404 mb-2 font-normal"
                >
                    {name}
                </a>
            ) : (
                <span
                    key={title + name}
                    className="mb-2 font-normal text-gray-400"
                >
                    {name}
                </span>
            )
        })}
    </div>
)
