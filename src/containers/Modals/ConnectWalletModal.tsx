import { useTranslation } from 'react-i18next'
import { FunctionComponent, useContext } from 'react'
import { Button } from '@components/Button'
import { ModalHeader } from '@components/ModalHeader'
import { PhantomWalletIcon } from '@assets/icons/PhantomWalletIcon'
import { getPhantomProvider } from '../../helpers/phantom'
import useToast from '@hooks/useToast'
import { WalletContext } from '../../context/WalletContext'

interface IProps {
    onRequestClose?: () => void
}

export const ConnectWalletModal: FunctionComponent<IProps> = ({
    onRequestClose = () => {},
}: IProps) => {
    const [t] = useTranslation()
    const { connectPhantom } = useContext(WalletContext)

    const onClickWithClose = (fn: () => void) => () => {
        fn()
        onRequestClose()
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex flex-col bg-gray-100 bg-home-light bg-cover bg-repeat-y p-6 dark:bg-light-black dark:bg-home-dark lg:inset-x-[35%] lg:bottom-auto lg:top-1/4 lg:rounded-3xl lg:border lg:border-gray-200"
        >
            <ModalHeader
                title={t('Connect wallet')}
                onRequestClose={onRequestClose}
            />
            <Button
                variant="tertiary"
                className="mb-2"
                icon={<PhantomWalletIcon className="mr-1" />}
                onClick={onClickWithClose(connectPhantom)}
            >
                Phantom
            </Button>
        </div>
    )
}
