import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent, useContext, useState } from 'react'
import { Button } from '@components/Button'
import { SignUpModal } from './SignUpModal'
import { ModalContext } from '../context/ModalContext'
import { useAuthError } from '@hooks/useAuthError'
import { validateEmail } from '../helpers/validation'
import { ModalHeader } from '@components/ModalHeader'
import { CognitoErrors } from '../enums/CognitoErrors'
import { AccountContext } from '../context/AccountContext'

interface IProps {
    onRequestClose?: () => void
}

export const LoginModal: FunctionComponent<IProps> = ({
    onRequestClose = () => {},
}: IProps) => {
    const [t, i18n] = useTranslation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorType, errorMessage, setError, cleanError] = useAuthError()

    const { showModal, hideModal } = useContext(ModalContext)
    const { auth } = useContext(AccountContext)

    const onClose = () => {
        cleanError()
        onRequestClose()
    }

    const onLogin = async () => {
        if (!validateEmail(email)) {
            setError('email', t('Wrong email') as string)
            return
        }
        try {
            await auth(email, password)
            cleanError()
            hideModal()
        } catch (err: any) {
            switch (err.name) {
                case CognitoErrors.NotAuthorizedException: {
                    setError('all', t('Incorrect email or password') as string)
                    return
                }
                default: {
                    setError(
                        'all',
                        t('Something went wrong, try again') as string
                    )
                    return
                }
            }
        }
        cleanError()
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex flex-col justify-between bg-gray-100 bg-home-light bg-cover bg-repeat-y p-6 dark:bg-light-black dark:bg-home-dark lg:inset-x-[35%] lg:top-1/4 lg:bottom-auto lg:rounded-3xl lg:border lg:border-gray-200"
        >
            <div>
                <ModalHeader
                    title={t('Welcome back')}
                    onRequestClose={onClose}
                />
                <div>
                    {errorMessage &&
                    (errorType === 'email' || errorType === 'all') ? (
                        <span className="ml-4 mb-4 text-red-500">
                            {errorMessage}
                        </span>
                    ) : null}
                    <Input
                        onChange={setEmail}
                        placeholder={t('Email') as string}
                        className={`mb-4 ${
                            errorType === 'email' || errorType === 'all'
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
                            errorType === 'password' || errorType === 'all'
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
                <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => showModal(<SignUpModal />)}
                >
                    {t('Sign up')}
                </Button>
            </div>
        </div>
    )
}
