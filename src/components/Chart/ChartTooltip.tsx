interface IProps {
    label: string
    payload: { payload: { month: string; cost: number } }[]
}
export const ChartTooltip = ({ label, payload }: IProps) => {
    return (
        <div className="rounded-2xl bg-white py-2 px-4 dark:bg-gray-700">
            {payload.length && payload[0].payload ? (
                <div className="flex flex-col">
                    <div className="font-semibold text-black dark:text-white">
                        {payload[0].payload.cost}
                    </div>
                    <div className="text-gray-400">
                        {payload[0].payload.month}
                    </div>
                </div>
            ) : null}
        </div>
    )
}
