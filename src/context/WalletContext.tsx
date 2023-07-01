import {
    ReactElement,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'
import { getPhantomProvider } from '../helpers/phantom'
import useToast from '@hooks/useToast'
import { useTranslation } from 'react-i18next'
import { useEffectAsync } from '@hooks/useEffectAsync'
import { AuthContext } from './AuthContext'
import { getSession } from '../helpers/getSession'
import { AuthType } from '../enums/AuthType'
import { PublicKey } from '@solana/web3.js'

interface IWalletContext {
    connectPhantom: () => void
    disconnectPhantom: () => void
    isConnecting: boolean
    address?: PublicKey
}

export const WalletContext = createContext({
    connectPhantom: () => {},
    disconnectPhantom: () => {},
    isConnecting: false,
} as IWalletContext)

interface IProps {
    children: ReactElement
}
export const WalletProvider = ({ children }: IProps) => {
    const [t] = useTranslation()
    const [isConnecting, setIsConnecting] = useState(false)
    const [address, setAddress] = useState()
    const { toastError } = useToast()
    const provider = getPhantomProvider()
    const { updateLoggedIn } = useContext(AuthContext)

    const setIsWalletConnected = (state: boolean) => {
        updateLoggedIn(state, AuthType.Wallet)
    }

    useEffect(() => {
        if (provider) {
            provider.on('connect', () => {
                setAddress(getPhantomProvider().publicKey)
                setIsWalletConnected(true)
            })

            provider.on('disconnect', () => {
                setAddress(undefined)
                setIsWalletConnected(false)
            })
        }
    }, [provider])

    useEffectAsync(async () => {
        const session = await getSession()
        if (provider && !session) {
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
                isConnecting,
                address,
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}
