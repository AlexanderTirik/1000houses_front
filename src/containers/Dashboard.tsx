import { ButtonCheckbox } from '@components/ButtonCheckbox'
import { Chart } from '@components/Chart/index'
import { DashboardCell } from '@components/Dashboard/DashboardCell'
import { useTranslation } from 'react-i18next'

export const Dashboard = () => {
    const [t, i18n] = useTranslation()
    return (
        <div className="m-5 flex flex-col items-center lg:m-16 lg:flex-row-reverse">
            <div className="flex w-full flex-col">
                <ButtonCheckbox
                    labels={[t('Day'), t('Week'), t('Month'), t('Year')]}
                    className="mb-2"
                />
                <Chart />
            </div>
            <div className="flex w-full flex-col lg:mr-16 lg:w-1/2">
                <div className="flex items-stretch">
                    <DashboardCell
                        className="flex-1"
                        title={t('Profitability')}
                        primaryText="4%"
                        secondaryText={'~ +48% ' + t('per year')}
                        variant="A"
                    />
                    <DashboardCell
                        className="flex-1"
                        title={t('Rental Objects')}
                        primaryText="6"
                        variant="B"
                    />
                </div>
                <DashboardCell
                    title={t('Hold Time')}
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
                        title={t('Last Hold Volume')}
                        primaryText="360 000"
                        variant="C"
                    />
                    <DashboardCell
                        className="flex-1"
                        title={t('Current Hold')}
                        primaryText="1 000"
                        variant="D"
                    />
                </div>
                <DashboardCell
                    title={t('Last Payment Amount')}
                    primaryText="3500"
                    secondaryText="USDC"
                />
            </div>
        </div>
    )
}