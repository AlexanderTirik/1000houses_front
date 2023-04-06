import { CloseIcon } from '@assets/icons/CloseIcon'
import { WalletIcon } from '@assets/icons/WalletIcon'
import { Button } from '@components/Button'
import { useTranslation } from 'react-i18next'
import { ModalConsumer } from '../context/ModalContext'
import { LanguageSwitch } from '@components/LanguageSwitch'
import { ThemeSwitch } from '@components/ThemeSwitch'
import { SignUpModal } from './SignUpModal'
import { LoginModal } from './LoginModal'

interface IProps {}
export const SideMenu = ({}: IProps) => {
    const [t, i18n] = useTranslation()
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex flex-col justify-between bg-gray-100 bg-home-light bg-cover bg-repeat-y dark:bg-light-black dark:bg-home-dark"
        >
            <div>
                <header className="flex justify-between border-b border-b-white p-6">
                    <LanguageSwitch />
                    <ModalConsumer>
                        {({ hideModal }) => (
                            <button onClick={hideModal}>
                                <CloseIcon />
                            </button>
                        )}
                    </ModalConsumer>
                </header>

                <div className="mt-4 flex flex-col">
                    <Button
                        onClick={() => {}}
                        icon={<WalletIcon />}
                        className="justify-center py-5"
                    >
                        {t('Connect wallet')}
                    </Button>

                    <div className="mt-1 flex">
                        <ModalConsumer>
                            {({ showModal }) => (
                                <Button
                                    onClick={() => showModal(<SignUpModal />)}
                                    variant="tertiary"
                                    className="flex-1 justify-center py-5"
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
                                    className="mr-1 flex-1 justify-center py-5"
                                >
                                    {t('Login')}
                                </Button>
                            )}
                        </ModalConsumer>
                    </div>
                </div>
            </div>
            <footer className="h-16 border-t border-t-white px-5 dark:border-t-gray-700">
                <ThemeSwitch className="h-full" />
            </footer>
        </div>
    )
}
