import { CloseIcon } from '@assets/icons/CloseIcon'
import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent, useState } from 'react'
import { Button } from '@components/Button'
import { SignUpModal } from './SignUpModal'
import { ModalConsumer } from '../context/ModalContext'
import { useAuthError } from '@hooks/useAuthError'
import { validateEmail } from '../helpers/validation'
import UserPool from '../config/userPool'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { env } from '../helpers/env'

interface IProps {
    onRequestClose?: () => void
}

export const LoginModal: FunctionComponent<IProps> = ({
    onRequestClose,
}: IProps) => {
    const [t, i18n] = useTranslation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorType, errorMessage, setError, cleanError] = useAuthError()
    const onLogin = () => {
        if (!validateEmail(email)) {
            setError('email', t('Wrong email') as string)
            return
        }
        const attributes = []
        attributes.push(
            new CognitoUserAttribute({ Name: 'email', Value: email })
        )
        UserPool.signUp(email, password, attributes, [], (err, data) => {
            if (err) {
                setError('email', t('Something went wrong, try again'))
                return
            }
            console.log(data)
        })
        cleanError()
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex flex-col justify-between bg-gray-100 bg-home-light bg-cover bg-repeat-y p-6 dark:bg-light-black dark:bg-home-dark lg:inset-y-1/4 lg:inset-x-[35%] lg:rounded-3xl lg:border lg:border-gray-200"
        >
            <div>
                <header className="relative mb-7 flex items-center justify-center">
                    <span className="text-lg text-black dark:text-white">
                        {t('Welcome back')}
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
                        onChange={setPassword}
                        placeholder={t('Password') as string}
                        className={`mb-2 ${
                            errorType === 'password'
                                ? 'border border-red-500 '
                                : ''
                        }`}
                        type="password"
                    />
                </div>
            </div>
            <div>
                <Button onClick={onLogin} className="mb-2 w-full">
                    {t('Login')}
                </Button>
                <ModalConsumer>
                    {({ showModal }) => (
                        <Button
                            variant="secondary"
                            className="w-full"
                            onClick={() => showModal(<SignUpModal />)}
                        >
                            {t('Sign up')}
                        </Button>
                    )}
                </ModalConsumer>
            </div>
        </div>
    )
}
