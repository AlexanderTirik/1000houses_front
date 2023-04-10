import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent, useContext, useState } from 'react'
import { Button } from '@components/Button'
import { ModalContext } from '../../context/ModalContext'
import { LoginModal } from './LoginModal'
import { useAuthError } from '@hooks/useAuthError'
import { CognitoUser } from 'amazon-cognito-identity-js'
import userPool from '../../config/userPool'
import { ModalHeader } from '@components/ModalHeader'
import { CognitoErrors } from '../../enums/CognitoErrors'
import { ForgotPasswordModal } from './ForgotPasswordModal'
import { AccountContext } from '../../context/AccountContext'

interface IProps {
    onRequestClose?: () => void
    givenEmail?: string
}

export const NewPasswordModal: FunctionComponent<IProps> = ({
    onRequestClose = () => {},
    givenEmail = '',
}: IProps) => {
    const [t, i18n] = useTranslation()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmationCode, setConfirmationCode] = useState('')
    const [errorType, errorMessage, setError, cleanError] = useAuthError()
    const { showModal } = useContext(ModalContext)
    const { updateAuthStatus } = useContext(AccountContext)

    const onNewPassword = () => {
        if (password !== confirmPassword || !password.length) {
            setError(t('Passwords do not match') as string, 'password')
            return
        }
        const cognitoUser = new CognitoUser({
            Username: givenEmail,
            Pool: userPool,
        })
        cognitoUser.confirmPassword(confirmationCode, password, {
            onSuccess() {
                showModal(<LoginModal />, { givenEmail })
            },
            onFailure(err) {
                switch (err.name) {
                    case CognitoErrors.CodeMismatchException: {
                        setError(
                            t('Wrong confirmation code') as string,
                            'confirm'
                        )
                        break
                    }
                    default: {
                        setError(
                            t('Something went wrong, try again') as string,
                            'all'
                        )
                        break
                    }
                }
            },
        })
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex flex-col justify-between bg-gray-100 bg-home-light bg-cover bg-repeat-y p-6 dark:bg-light-black dark:bg-home-dark lg:inset-x-[35%] lg:bottom-auto lg:top-1/4 lg:rounded-3xl lg:border lg:border-gray-200"
        >
            <div>
                <ModalHeader
                    title={t('Welcome')}
                    onRequestClose={onRequestClose}
                />
                <div className="mb-2 dark:text-white">
                    {t('We sent you reset password code to your email')}
                </div>
                <div>
                    {errorMessage &&
                    (errorType == 'confirm' || errorType == 'all') ? (
                        <span className="ml-4 mb-4 text-red-500">
                            {errorMessage}
                        </span>
                    ) : null}
                    <Input
                        value={confirmationCode}
                        onChange={setConfirmationCode}
                        placeholder={t('Confirmation code') as string}
                        className={`mb-2 ${
                            errorType === 'confirm' || errorType == 'all'
                                ? 'border border-red-500 '
                                : ''
                        }`}
                    />
                    {givenEmail ? (
                        <Input value={givenEmail} disabled className="mb-2" />
                    ) : null}
                    {errorMessage && errorType == 'password' ? (
                        <span className="ml-4 mb-4 text-red-500">
                            {errorMessage}
                        </span>
                    ) : null}
                    <Input
                        value={password}
                        type="password"
                        onChange={setPassword}
                        placeholder={t('Password') as string}
                        className={`mb-2 ${
                            errorType === 'password' || errorType == 'all'
                                ? 'border border-red-500 '
                                : ''
                        }`}
                    />
                    <Input
                        value={confirmPassword}
                        type="password"
                        onChange={setConfirmPassword}
                        placeholder={t('Confirm password') as string}
                        className={
                            errorType === 'password' || errorType == 'all'
                                ? 'border border-red-500'
                                : ''
                        }
                    />
                </div>
            </div>
            <div className="mt-3">
                <Button onClick={onNewPassword} className="mb-2 w-full">
                    {t('Reset password')}
                </Button>
                <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() =>
                        showModal(<ForgotPasswordModal />, {
                            givenEmail,
                        })
                    }
                >
                    {t('Back')}
                </Button>
            </div>
        </div>
    )
}
