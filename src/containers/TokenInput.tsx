import { ButtonCheckbox } from '@components/ButtonCheckbox'
import { Input } from '@components/Input'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dashboard } from './Dashboard'
import { DashboardCell } from '@components/Dashboard/DashboardCell'
import { Button } from '@components/Button'

interface IProps {
    className?: string
}

export const TokenInput = ({ className }: IProps) => {
    const [value, setValue] = useState('')
    const [state, setState] = useState<
        'Stake' | 'Buy' | 'Input' | 'Unstake' | 'Sell' | 'Output'
    >('Stake')
    const [t, i18n] = useTranslation()
    return (
        <div
            className={
                'my-4 w-full border-y-2 border-y-white py-4 lg:mx-2 lg:my-0 lg:w-1/2 lg:border-y-0 lg:py-0 ' +
                className
            }
        >
            <div className="mb-2 flex flex-row">
                <DashboardCell
                    className="w-full"
                    title={t('Balance')}
                    primaryText={'0'}
                />
                <DashboardCell
                    className="w-full"
                    title={t('Staked')}
                    primaryText={'0'}
                />
            </div>
            <div className="mb-4 lg:mb-2">
                <ButtonCheckbox
                    className="justify-between text-xl"
                    labels={[t('Stake'), t('Buy'), t('Input')]}
                    onClicks={[
                        () => setState('Stake'),
                        () => setState('Buy'),
                        () => setState('Input'),
                    ]}
                    activeIndex={getTopActiveState(state)}
                />
                <Input
                    className="my-4 text-xl lg:my-2"
                    value={value}
                    placeholder={t('Token amount') as string}
                    onChange={setValue}
                />
                <ButtonCheckbox
                    className="justify-between text-xl"
                    labels={[t('Unstake'), t('Sell'), t('Output')]}
                    onClicks={[
                        () => setState('Unstake'),
                        () => setState('Sell'),
                        () => setState('Output'),
                    ]}
                    activeIndex={getBottomActiveState(state)}
                />
            </div>
            <Button className="w-full text-xl" onClick={() => {}}>
                {t(state)}
            </Button>
        </div>
    )
}

const getTopActiveState = (state: string) => {
    switch (state) {
        case 'Stake':
            return 0
        case 'Buy':
            return 1
        case 'Input':
            return 2
        default:
            return undefined
    }
}

const getBottomActiveState = (state: string) => {
    switch (state) {
        case 'Unstake':
            return 0
        case 'Sell':
            return 1
        case 'Output':
            return 2
        default:
            return undefined
    }
}
