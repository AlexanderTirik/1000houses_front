import { LogoIcon } from '@assets/icons/LogoIcon'
import { Button } from '../components/Button'
import { WalletIcon } from '@assets/icons/WalletIcon'
import { LanguageSwitch } from '@components/LanguageSwitch'
import { ThemeSwitch } from '@components/ThemeSwitch'
import { useTranslation } from 'react-i18next'
import { MenuIcon } from '@assets/icons/MenuIcon'
import { SideMenu } from '@containers/SideMenu'
import { ModalContext } from '../context/ModalContext'
import { SignUpModal } from './SignUpModal'
import { LoginModal } from './LoginModal'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountContext'
import { useEffectAsync } from '@hooks/useEffectAsync'
import { ConnectWalletModal } from './ConnectWalletModal'

export const Header = () => {
    const [t, i18n] = useTranslation()
    const { showModal } = useContext(ModalContext)
    const { updateAuthStatus, logout, isLoggedIn } = useContext(AccountContext)

    return (
        <header className="flex h-20 w-full flex-row items-center justify-between border-b border-solid border-white bg-transparent px-8 lg:h-20 lg:px-16">
            <LogoIcon />
            <div className="hidden h-full flex-row items-center lg:visible lg:flex">
                <ThemeSwitch className="w-20 self-stretch" />
                <LanguageSwitch className="ml-7" />

                {!isLoggedIn ? (
                    <>
                        <Button
                            onClick={() => showModal(<SignUpModal />)}
                            variant="tertiary"
                            className="ml-7"
                        >
                            {t('Sign up')}
                        </Button>
                        <Button
                            onClick={() => showModal(<LoginModal />)}
                            variant="secondary"
                            className="ml-3"
                        >
                            {' '}
                            {t('Login')}
                        </Button>
                    </>
                ) : (
                    <Button
                        onClick={logout}
                        variant="tertiary"
                        className="ml-7"
                    >
                        {t('Logout')}
                    </Button>
                )}
                <Button
                    onClick={() => showModal(<ConnectWalletModal />)}
                    icon={<WalletIcon />}
                    className="ml-7"
                >
                    {t('Connect wallet')}
                </Button>
            </div>
            <button
                className="lg:hidden"
                onClick={() => showModal(<SideMenu />)}
            >
                <MenuIcon pathClassName="dark:stroke-white" />
            </button>
        </header>
    )
}
