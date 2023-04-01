import { ButtonCheckbox } from '@components/ButtonCheckbox'
import { Chart } from '@components/Chart/index'
import { DashboardCell } from '@components/Dashboard/DashboardCell'
import useTheme from '@hooks/useTheme'
import { useTranslation } from 'react-i18next'

export const Dashboard = () => {
    const [t, i18n] = useTranslation()
    const [theme, setTheme] = useTheme()
    return (
        <div className="m-16 flex">
            <div className="mr-16 flex w-1/2 flex-col">
                <div className="flex items-stretch">
                    <DashboardCell
                        className="flex-1"
                        title="profitability"
                        primaryText="4%"
                        secondaryText="~ +48% per year"
                        variant="A"
                    />
                    <DashboardCell
                        className="flex-1"
                        title="rental objects"
                        primaryText="6"
                        variant="B"
                    />
                </div>
                <DashboardCell
                    title="hold time"
                    primaryText={
                        <span>
                            22
                            <span className="mx-2 text-base font-normal">
                                January 2023 00:00
                            </span>
                            - 16
                            <span className="ml-2 text-base font-normal">
                                April 2023 00:00
                            </span>
                        </span>
                    }
                />
                <div className="flex">
                    <DashboardCell
                        className="flex-1"
                        title="last hold volume"
                        primaryText="360 000"
                        variant="C"
                    />
                    <DashboardCell
                        className="flex-1"
                        title="Current hold"
                        primaryText="1 000"
                        variant="D"
                    />
                </div>
                <DashboardCell
                    title="last payment amount"
                    primaryText="3500"
                    secondaryText="USDC"
                />
            </div>
            <div className="flex w-full flex-col">
                <ButtonCheckbox
                    labels={['Day', 'Week', 'Month', 'Year']}
                    className="mb-2"
                />
                <Chart />
            </div>
        </div>
    )
}
