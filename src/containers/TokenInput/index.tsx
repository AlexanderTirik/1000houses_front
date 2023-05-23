import { ButtonCheckbox } from '@components/ButtonCheckbox'
import { Input } from '@components/Input'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DashboardCell } from '@components/Dashboard/DashboardCell'
import { Button } from '@components/Button'
import { onOutputClick } from './output'
import { InputTokensMenu } from './InputTokensMenu'

interface IProps {
    className?: string
}

export const TokenInput = ({ className }: IProps) => {
    const [amount, setAmount] = useState('')
    const [recipient, setRecipient] = useState('')
    const [state, setState] = useState<
        'Stake' | 'Buy' | 'Input' | 'Unstake' | 'Sell' | 'Output'
    >('Stake')
    const [t, i18n] = useTranslation()
    const onSubmit = async () => {
        if (state === 'Output') {
            onOutputClick(amount, recipient)
        }
    }

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
                {state != 'Input' ? (
                    <Input
                        className="my-2 text-xl lg:my-2"
                        value={amount}
                        placeholder={t('Token amount') as string}
                        onChange={setAmount}
                    />
                ) : (
                    <InputTokensMenu />
                )}

                {state == 'Output' ? (
                    <Input
                        className="my-2 text-xl lg:my-2"
                        value={amount}
                        placeholder={t('Recipient') as string}
                        onChange={setRecipient}
                    />
                ) : null}
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
            {state != 'Input' ? (
                <Button className="w-full text-xl" onClick={onSubmit}>
                    {t(state)}
                </Button>
            ) : null}
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
