import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent, useContext, useState } from 'react'
import { Button } from '@components/Button'
import { SignUpModal } from './SignUpModal'
import { ModalContext } from '../../context/ModalContext'
import { useAuthError } from '@hooks/useAuthError'
import { validateEmail } from '../../helpers/validation'
import { ModalHeader } from '@components/ModalHeader'
import { CognitoErrors } from '../../enums/CognitoErrors'
import { AccountContext } from '../../context/AccountContext'
import { LinkButton } from '@components/LinkButton'
import { ForgotPasswordModal } from './ForgotPasswordModal'

interface IProps {
    onRequestClose?: () => void
    givenEmail?: string
}

export const LoginModal: FunctionComponent<IProps> = ({
    onRequestClose = () => {},
    givenEmail = '',
}: IProps) => {
    const [t, i18n] = useTranslation()
    const [email, setEmail] = useState(givenEmail)
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
            setError(t('Wrong email') as string, 'email')
            return
        }
        try {
            await auth(email, password)
            cleanError()
            hideModal()
        } catch (err: any) {
            switch (err.name) {
                case CognitoErrors.NotAuthorizedException: {
                    setError(t('Incorrect email or password') as string, 'all')
                    return
                }
                default: {
                    setError(
                        t('Something went wrong, try again') as string,
                        'all'
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
                        value={email}
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
                        value={password}
                        onChange={setPassword}
                        placeholder={t('Password') as string}
                        className={`${
                            errorType === 'password' || errorType === 'all'
                                ? 'border border-red-500 '
                                : ''
                        }`}
                        type="password"
                    />
                    <div className="my-2 flex w-full justify-end">
                        <LinkButton
                            onClick={() =>
                                showModal(<ForgotPasswordModal />, {
                                    givenEmail: email,
                                })
                            }
                        >
                            {t('Forgot password')}
                        </LinkButton>
                    </div>
                </div>
            </div>
            <div>
                <Button onClick={onLogin} className="mb-2 w-full">
                    {t('Login')}
                </Button>
                <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() =>
                        showModal(<SignUpModal />, { givenEmail: email })
                    }
                >
                    {t('Sign up')}
                </Button>
            </div>
        </div>
    )
}
