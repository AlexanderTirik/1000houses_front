import { ReactElement, createContext, useEffect, useState } from 'react'
import { getPhantomProvider } from '../helpers/phantom'
import useToast from '@hooks/useToast'
import { useTranslation } from 'react-i18next'
import { useEffectAsync } from '@hooks/useEffectAsync'

interface IWalletContext {
    connectPhantom: () => void
    disconnectPhantom: () => void
    isWalletConnected: boolean
    isConnecting: boolean
}

export const WalletContext = createContext({
    connectPhantom: () => {},
    disconnectPhantom: () => {},
    isWalletConnected: false,
    isConnecting: false,
} as IWalletContext)

interface IProps {
    children: ReactElement
}
export const WalletProvider = ({ children }: IProps) => {
    const [t] = useTranslation()
    const [isWalletConnected, setIsWalletConnected] = useState(false)
    const [isConnecting, setIsConnecting] = useState(false)
    const { toastError } = useToast()
    const provider = getPhantomProvider()

    useEffect(() => {
        provider.on('connect', () => {
            setIsWalletConnected(true)
        })

        provider.on('disconnect', () => {
            setIsWalletConnected(false)
        })
    }, [provider])

    useEffectAsync(async () => {
        if (provider) {
            setIsConnecting(true)
            try {
                await provider.connect({ onlyIfTrusted: true })
            } catch (e) {}
        }
        setIsConnecting(false)
    }, [])

    const connectPhantom = async () => {
        if (!provider) {
            toastError(t('Wallet not installed'))
            window.open('https://phantom.app/', '_blank')
            return
        }
        try {
            setIsConnecting(true)
            await provider.connect()
        } catch (err) {
            toastError(t('Failed to connect. Try again'))
        }
        setIsConnecting(false)
    }

    const disconnectPhantom = async () => {
        if (provider) {
            await provider.disconnect()
        }
    }
    return (
        <WalletContext.Provider
            value={{
                connectPhantom,
                disconnectPhantom,
                isWalletConnected,
                isConnecting,
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}
