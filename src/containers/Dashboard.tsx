import { ButtonCheckbox } from '@components/ButtonCheckbox'
import { Chart } from '@components/Chart/index'
import { DashboardCell } from '@components/Dashboard/DashboardCell'
import { useContext, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { TokenInput } from './TokenInput'
import { AuthContext } from '../context/AuthContext'

interface IProps {
    howToStage?: number
}
export const howToBorder =
    " relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:rounded-md after:border dark:after:border-white after:border-black after:border-4 after:content-[''] after:border-dashed after:animate-wiggle"
export const Dashboard = ({ howToStage }: IProps) => {
    const { isLoggedIn } = useContext(AuthContext)
    const [t, i18n] = useTranslation()

    const infoRef = useRef<HTMLDivElement>(null)
    const chartRef = useRef<HTMLDivElement>(null)
    const tokenInputRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        switch (howToStage) {
            case 1:
                infoRef.current?.scrollIntoView()
                break
            case 2:
                chartRef.current?.scrollIntoView()
                break
            case 3:
                tokenInputRef.current?.scrollIntoView()
                break
        }
    }, [howToStage])

    return (
        <div className="m-5 flex flex-col items-center justify-center lg:flex-row lg:items-end xl:m-16">
            <div
                className={
                    'flex w-full flex-col lg:w-1/2' +
                    (howToStage == 1 ? howToBorder : '')
                }
                ref={infoRef}
            >
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
                                July 2023 00:00
                            </span>
                            - 16
                            <span className="ml-2 text-base font-normal">
                                August 2023 00:00
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
            <div className="flex w-full flex-col lg:relative lg:flex-row">
                {isLoggedIn ? (
                    <TokenInput
                        ref={tokenInputRef}
                        className={howToStage == 3 ? howToBorder : ''}
                        howToStage={howToStage}
                    />
                ) : null}
                <div
                    className={
                        'flex w-full flex-col' +
                        (howToStage == 2 ? howToBorder : '')
                    }
                    ref={chartRef}
                >
                    <ButtonCheckbox
                        labels={[t('Day'), t('Week'), t('Month'), t('Year')]}
                        className="mb-2 justify-end"
                    />
                    <Chart />
                </div>
            </div>
        </div>
    )
}
