import { Input } from '@components/Input'
import { RefObject, forwardRef, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DashboardCell } from '@components/Dashboard/DashboardCell'
import { Button } from '@components/Button'
import { onOutputClick } from './utils/onOutputClick'
import { InputTokensMenu } from './InputTokensMenu'
import { AuthContext } from '../../context/AuthContext'
import { AuthType } from '../../enums/AuthType'
import { getBalance } from './utils/getBalance'
import { useEffectAsync } from '@hooks/useEffectAsync'
import { WalletContext } from '../../context/WalletContext'
import { AccountContext } from '../../context/AccountContext'
import { getStacked } from './utils/getStacked'
import { onStakeClick } from './utils/onStakeClick'
import { onUnstakeClick } from './utils/onUnstakeClick'
import useToast from '@hooks/useToast'
import { howToBorder } from '@containers/Dashboard'

interface IProps {
    className?: string
    howToStage?: number
}

export const TokenInput = forwardRef<HTMLDivElement, IProps>(
    ({ className, howToStage }: IProps, ref) => {
        const { authType } = useContext(AuthContext)
        const { address } = useContext(WalletContext)
        const { email } = useContext(AccountContext)
        const { toastError } = useToast()
        const [amount, setAmount] = useState('')
        const [recipient, setRecipient] = useState('')
        const [balance, setBalance] = useState('0')
        const [stacked, setStaked] = useState('0')
        const [state, setState] = useState<
            'Stake' | 'Buy' | 'Input' | 'Unstake' | 'Sell' | 'Output'
        >('Stake')
        const [t, i18n] = useTranslation()

        const updateBalaces = async () => {
            setBalance(await getBalance(authType, email, address))
            setStaked(await getStacked(authType, email, address))
        }

        useEffectAsync(async () => {
            await updateBalaces()
        }, [])

        const onSubmit = async () => {
            try {
                switch (state) {
                    case 'Stake':
                        await onStakeClick(authType, amount, address)
                        break
                    case 'Unstake':
                        await onUnstakeClick(authType, amount, address)
                        break
                    case 'Output':
                        await onOutputClick(authType, amount, recipient)
                        break
                }
            } catch (e) {
                console.log(e)
                toastError(t('Something went wrong, try again'))
            }
            await updateBalaces()
        }

        return (
            <div
                className={
                    'z-10 my-4 w-full rounded-3xl border-y-2 border-y-white py-4 lg:absolute lg:left-0 lg:bottom-0 lg:my-0 lg:w-1/2 lg:border-y-0 lg:bg-gray-100 lg:py-0 dark:lg:bg-black' +
                    className
                }
                ref={ref}
            >
                <div
                    className={
                        'mb-2 flex flex-row ' +
                        (howToStage == 4 ? howToBorder : null)
                    }
                >
                    <DashboardCell
                        className="w-full"
                        title={t('Balance')}
                        primaryText={
                            balance.length > 8 ? (
                                <span className="text-xl">{balance}</span>
                            ) : (
                                balance
                            )
                        }
                    />
                    <DashboardCell
                        className="w-full"
                        title={t('Staked')}
                        primaryText={
                            stacked.length > 8 ? (
                                <span className="text-xl">{stacked}</span>
                            ) : (
                                stacked
                            )
                        }
                    />
                </div>
                <div
                    className={
                        'mb-4 lg:mb-2' + (howToStage == 5 ? howToBorder : null)
                    }
                >
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
                        {authType == AuthType.Cognito ? (
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
                            value={recipient}
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
                        {authType == AuthType.Cognito ? (
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
)
