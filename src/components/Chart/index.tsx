import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Line,
} from 'recharts'
import { ChartTooltip } from './ChartTooltip'
import { useEffect, useState } from 'react'

export const Chart = () => {
    const [theme, setTheme] = useState('light')
    const [data, setData] = useState([
        { month: 'Jan', cost: 0.7 },
        { month: 'Feb', cost: 1.5 },
        { month: 'Mar', cost: 1.3 },
        { month: 'Apr', cost: 1.4 },
        { month: 'May', cost: 1.7 },
        { month: 'Jun', cost: 1.6 },
        { month: 'Jul', cost: 1.5 },
        { month: 'Aug', cost: 1.7 },
        { month: 'Sep', cost: 1.8 },
        { month: 'Oct', cost: 1.7 },
        { month: 'Nov', cost: 1.9 },
        { month: 'Dec', cost: 1.9 },
    ])
    useEffect(() => {
        window.addEventListener('storage', () => {
            const currentTheme = localStorage.getItem('theme')
            if (
                !currentTheme ||
                (currentTheme !== 'light' && currentTheme !== 'dark')
            ) {
                setTheme('light')
                return
            }
            setTheme(currentTheme)
        })
    }, [])
    return (
        <ResponsiveContainer width={'99%'} height={500}>
            <LineChart data={data}>
                <XAxis
                    dataKey="month"
                    stroke="#7b7b7b"
                    style={{ fontWeight: '500' }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    dataKey="cost"
                    orientation="right"
                    stroke="#7b7b7b"
                    style={{ fontWeight: '500' }}
                    axisLine={false}
                    tickLine={false}
                    tickCount={10}
                    unit="k"
                />
                <CartesianGrid
                    strokeDasharray="0"
                    stroke={theme == 'light' ? '#ffffff' : '#383838'}
                    vertical={false}
                />
                <Tooltip
                    content={<ChartTooltip label={''} payload={[]} />}
                    // @ts-ignore
                    payload={data}
                    cursor={{
                        stroke: theme == 'light' ? '#ffffff' : '#383838',
                        strokeWidth: 1,
                        strokeLinecap: 'round',
                        strokeDasharray: '4 4',
                    }}
                />
                <Line
                    type="natural"
                    dataKey="cost"
                    stroke="blue"
                    strokeWidth={4}
                    dot={false}
                    style={{
                        filter: `drop-shadow(0px 4px 16px rgba(0, 71, 255, 0.48)`,
                    }}
                    activeDot={{
                        stroke: theme == 'light' ? '#D0DCF6' : '#09112C',
                        strokeWidth: 2,
                        r: 8,
                    }}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}
