import { CloseIcon } from '@assets/icons/CloseIcon'
import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent } from 'react'
import { Button } from '@components/Button'
import { ModalConsumer } from '../context/ModalContext'
import { LoginModal } from './LoginModal'

interface IProps {
    onRequestClose?: () => void
}

export const SignUpModal: FunctionComponent<IProps> = ({
    onRequestClose,
}: IProps) => {
    const [t, i18n] = useTranslation()

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex flex-col justify-between bg-gray-100 bg-home-light bg-cover bg-repeat-y p-6 dark:bg-light-black dark:bg-home-dark lg:inset-y-1/4 lg:inset-x-[35%] lg:rounded-3xl lg:border lg:border-gray-200"
        >
            <div>
                <header className="relative mb-7 flex items-center justify-center">
                    <span className="text-lg text-black dark:text-white">
                        {t('Welcome')}
                    </span>

                    <button
                        onClick={onRequestClose}
                        className="absolute right-0"
                    >
                        <CloseIcon />
                    </button>
                </header>
                <div>
                    <Input
                        onChange={() => {}}
                        placeholder={t('Email') as string}
                        className="mb-4"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder={t('Password') as string}
                        className="mb-2"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder={t('Confirm password') as string}
                    />
                </div>
            </div>
            <div>
                <Button onClick={() => {}} className="mb-2 w-full">
                    {t('Sign up')}
                </Button>
                <ModalConsumer>
                    {({ showModal }) => (
                        <Button
                            variant="secondary"
                            className="w-full"
                            onClick={() => showModal(<LoginModal />)}
                        >
                            {t('Login')}
                        </Button>
                    )}
                </ModalConsumer>
            </div>
        </div>
    )
}
