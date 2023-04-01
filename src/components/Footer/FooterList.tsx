interface IProps {
    title: string
    links?: string[]
    names: string[]
}

export const FooterList = ({ title, links = [], names }: IProps) => (
    <div className="flex flex-col">
        <div className="mb-3 font-bold text-black dark:text-white">{title}</div>
        {names.map((name, index) => {
            const link = links[index]
            return link ? (
                <a
                    key={link}
                    href={link}
                    className="text-gray-404 mb-2 font-normal"
                >
                    {name}
                </a>
            ) : (
                <span className="mb-2 font-normal text-gray-400">{name}</span>
            )
        })}
    </div>
)
