import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent, useContext, useState } from 'react'
import { Button } from '@components/Button'
import { SignUpModal } from './SignUpModal'
import { ModalContext } from '../../context/ModalContext'
import { useAuthError } from '@hooks/useAuthError'
import { validateEmail } from '../../helpers/validation'
import { ModalHeader } from '@components/ModalHeader'
import userPool from '../../config/userPool'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { LoginModal } from './LoginModal'
import { NewPasswordModal } from './NewPasswordModal'

interface IProps {
    onRequestClose?: () => void
    givenEmail?: string
}

export const ForgotPasswordModal: FunctionComponent<IProps> = ({
    onRequestClose = () => {},
    givenEmail = '',
}: IProps) => {
    const [t] = useTranslation()
    const [email, setEmail] = useState(givenEmail)
    const [errorType, errorMessage, setError, cleanError] = useAuthError()

    const { showModal, hideModal } = useContext(ModalContext)

    const onClose = () => {
        cleanError()
        onRequestClose()
    }

    const onResetPassword = async () => {
        if (!validateEmail(email)) {
            setError(t('Wrong email') as string)
            return
        }
        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool,
        })

        cognitoUser.forgotPassword({
            onSuccess: (result) => {
                showModal(<NewPasswordModal />, { givenEmail: email })
            },
            onFailure: (err) => {
                setError(t('Something went wrong, try again') as string)
            },
        })
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex flex-col justify-between bg-gray-100 bg-home-light bg-cover bg-repeat-y p-6 dark:bg-light-black dark:bg-home-dark lg:inset-x-[35%] lg:top-1/4 lg:bottom-auto lg:rounded-3xl lg:border lg:border-gray-200"
        >
            <div>
                <ModalHeader
                    title={t('Forgot password')}
                    onRequestClose={onClose}
                />
                <div>
                    {errorMessage ? (
                        <span className="ml-4 mb-4 text-red-500">
                            {errorMessage}
                        </span>
                    ) : null}
                    <Input
                        value={email}
                        onChange={setEmail}
                        placeholder={t('Email') as string}
                        className={`mb-4 ${
                            errorMessage ? 'border border-red-500 ' : ''
                        }`}
                    />
                </div>
            </div>
            <div>
                <Button onClick={onResetPassword} className="mb-2 w-full">
                    {t('Reset password')}
                </Button>
                <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() =>
                        showModal(<LoginModal />, { givenEmail: email })
                    }
                >
                    {t('Login')}
                </Button>
            </div>
        </div>
    )
}
