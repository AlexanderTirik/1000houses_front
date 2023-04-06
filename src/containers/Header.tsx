import { LogoIcon } from '@assets/icons/LogoIcon'
import { Button } from '../components/Button'
import { WalletIcon } from '@assets/icons/WalletIcon'
import { LanguageSwitch } from '@components/LanguageSwitch'
import { ThemeSwitch } from '@components/ThemeSwitch'
import { useTranslation } from 'react-i18next'
import { MenuIcon } from '@assets/icons/MenuIcon'
import { SideMenu } from '@containers/SideMenu'
import { ModalConsumer } from '../context/ModalContext'
import { SignUpModal } from './SignUpModal'
import { LoginModal } from './LoginModal'

export const Header = () => {
    const [t, i18n] = useTranslation()
    return (
        <header className="flex h-20 flex-row items-center justify-between border-b border-solid border-white bg-transparent px-8 lg:h-20 lg:px-16">
            <LogoIcon />
            <div className="hidden h-full flex-row items-center lg:visible lg:flex">
                <ThemeSwitch className="w-20 self-stretch" />
                <LanguageSwitch className="ml-7" />
                <ModalConsumer>
                    {({ showModal }) => (
                        <Button
                            onClick={() => showModal(<SignUpModal />)}
                            variant="tertiary"
                            className="ml-7"
                        >
                            {t('Sign up')}
                        </Button>
                    )}
                </ModalConsumer>
                <ModalConsumer>
                    {({ showModal }) => (
                        <Button
                            onClick={() => showModal(<LoginModal />)}
                            variant="secondary"
                            className="ml-3"
                        >
                            {t('Login')}
                        </Button>
                    )}
                </ModalConsumer>
                <Button
                    onClick={() => {}}
                    icon={<WalletIcon />}
                    className="ml-7"
                >
                    {t('Connect wallet')}
                </Button>
            </div>

            <ModalConsumer>
                {({ showModal }) => (
                    <button
                        className="lg:hidden"
                        onClick={() => showModal(<SideMenu />)}
                    >
                        <MenuIcon pathClassName="dark:stroke-white" />
                    </button>
                )}
            </ModalConsumer>
        </header>
    )
}
