import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AccountContext } from '../../context/AccountContext'
import { PublicKey } from '@solana/web3.js'
import { accounts } from '../../blockchain/accounts'
import { getAssociatedTokenAddress } from '@solana/spl-token'

interface IProps {
    className?: string
}

export const InputTokensMenu = ({ className }: IProps) => {
    const [inputAddress, setInputAddress] = useState('')

    const [t, i18n] = useTranslation()
    const { email } = useContext(AccountContext)
    useEffect(() => {
        ;(async () => {
            if (email) {
                const [userPda] = PublicKey.findProgramAddressSync(
                    [Buffer.from(email, 'utf8'), accounts.authority.toBuffer()],
                    accounts.programs.keeper
                )
                const associatedToken = await getAssociatedTokenAddress(
                    accounts.mint,
                    userPda,
                    true
                )
                setInputAddress(associatedToken.toString())
            }
        })()
    }, [])
    return (
        <>
            <div className="m-2 dark:text-white">
                {t('To input, send tokens to address below')}
            </div>
            <div className="my-2 rounded-3xl bg-white p-4 font-semibold dark:bg-gray-700 dark:text-white">
                {inputAddress}
            </div>
        </>
    )
}
