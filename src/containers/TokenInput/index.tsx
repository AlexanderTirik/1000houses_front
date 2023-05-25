import { ButtonCheckbox } from '@components/ButtonCheckbox'
import { Input } from '@components/Input'
import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DashboardCell } from '@components/Dashboard/DashboardCell'
import { Button } from '@components/Button'
import { onOutputClick } from './output'
import { InputTokensMenu } from './InputTokensMenu'
import { AuthContext } from '../../context/AuthContext'

interface IProps {
    className?: string
}

export const TokenInput = ({ className }: IProps) => {
    const { authType } = useContext(AuthContext)
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
                'my-4 w-full rounded-3xl border-y-2 border-y-white py-4 lg:mx-2 lg:my-0 lg:w-1/2 lg:border-y-0 lg:py-0 ' +
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
                <div className="flex justify-around">
                    <Button
                        variant="tertiary"
                        active={state == 'Stake'}
                        onClick={() => setState('Stake')}
                    >
                        {t('Stake')}
                    </Button>
                    <Button
                        variant="tertiary"
                        active={state == 'Buy'}
                        onClick={() => setState('Buy')}
                    >
                        {t('Buy')}
                    </Button>
                    {authType == 'cognito' ? (
                        <Button
                            variant="tertiary"
                            active={state == 'Input'}
                            onClick={() => setState('Input')}
                        >
                            {t('Input')}
                        </Button>
                    ) : null}
                </div>
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
                <div className="flex justify-around">
                    <Button
                        variant="tertiary"
                        active={state == 'Unstake'}
                        onClick={() => setState('Unstake')}
                    >
                        {t('Unstake')}
                    </Button>
                    <Button
                        variant="tertiary"
                        active={state == 'Sell'}
                        onClick={() => setState('Sell')}
                    >
                        {t('Sell')}
                    </Button>
                    {authType == 'cognito' ? (
                        <Button
                            variant="tertiary"
                            active={state == 'Output'}
                            onClick={() => setState('Output')}
                        >
                            {t('Output')}
                        </Button>
                    ) : null}
                </div>
            </div>
            {state != 'Input' ? (
                <Button className="w-full text-xl" onClick={onSubmit}>
                    {t(state)}
                </Button>
            ) : null}
        </div>
    )
}
