import { CloseIcon } from '@assets/icons/CloseIcon'
import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent, useReducer, useState } from 'react'
import { Button } from '@components/Button'
import { ModalConsumer } from '../context/ModalContext'
import { LoginModal } from './LoginModal'
import { validateEmail } from '../helpers/validation'
import { useAuthError } from '@hooks/useAuthError'

interface IProps {
    onRequestClose?: () => void
}

export const SignUpModal: FunctionComponent<IProps> = ({
    onRequestClose,
}: IProps) => {
    const [t, i18n] = useTranslation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorType, errorMessage, setError, cleanError] = useAuthError()

    const onSignUp = () => {
        if (password !== confirmPassword || !password.length) {
            setError('password', t('Passwords do not match') as string)
            return
        }
        if (!validateEmail(email)) {
            setError('email', t('Wrong email') as string)
            return
        }
        setError('email', t('Email already exists') as string)
        cleanError()
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex flex-col justify-between bg-gray-100 bg-home-light bg-cover bg-repeat-y p-6 dark:bg-light-black dark:bg-home-dark lg:inset-x-[35%] lg:bottom-auto lg:top-1/4 lg:rounded-3xl lg:border lg:border-gray-200"
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
                    {errorMessage && errorType === 'email' ? (
                        <span className="ml-4 mb-4 text-red-500">
                            {errorMessage}
                        </span>
                    ) : null}
                    <Input
                        onChange={setEmail}
                        placeholder={t('Email') as string}
                        className={`mb-4 ${
                            errorType === 'email'
                                ? 'border border-red-500 '
                                : ''
                        }`}
                    />
                    {errorMessage && errorType === 'password' ? (
                        <span className="ml-4 mb-4 text-red-500">
                            {errorMessage}
                        </span>
                    ) : null}
                    <Input
                        type="password"
                        onChange={setPassword}
                        placeholder={t('Password') as string}
                        className={`mb-2 ${
                            errorType === 'password'
                                ? 'border border-red-500 '
                                : ''
                        }`}
                    />
                    <Input
                        type="password"
                        onChange={setConfirmPassword}
                        placeholder={t('Confirm password') as string}
                        className={
                            errorType === 'password'
                                ? 'border border-red-500'
                                : ''
                        }
                    />
                </div>
            </div>
            <div className="mt-3">
                <Button onClick={onSignUp} className="mb-2 w-full">
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
