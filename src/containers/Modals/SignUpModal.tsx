import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent, useContext, useState } from 'react'
import { Button } from '@components/Button'
import { ModalContext } from '../../context/ModalContext'
import { LoginModal } from './LoginModal'
import { validateEmail } from '../../helpers/validation'
import { useAuthError } from '@hooks/useAuthError'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import userPool from '../../config/userPool'
import { ModalHeader } from '@components/ModalHeader'
import { ConfirmUserModal } from './ConfirmUserModal'
import { CognitoErrors } from '../../enums/CognitoErrors'

interface IProps {
    onRequestClose?: () => void
    givenEmail?: string
}

export const SignUpModal: FunctionComponent<IProps> = ({
    onRequestClose,
    givenEmail = '',
}: IProps) => {
    const [t, i18n] = useTranslation()
    const [email, setEmail] = useState(givenEmail)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorType, errorMessage, setError, cleanError] = useAuthError()
    const { showModal } = useContext(ModalContext)

    const onSignUp = () => {
        if (password !== confirmPassword || !password.length) {
            setError(t('Passwords do not match') as string, 'password')
            return
        }

        if (!validateEmail(email)) {
            setError(t('Wrong email') as string, 'email')
            return
        }
        const attributes = []
        attributes.push(
            new CognitoUserAttribute({ Name: 'email', Value: email })
        )
        userPool.signUp(email, password, attributes, [], (err, data) => {
            if (err) {
                switch (err.name) {
                    case CognitoErrors.UsernameExistsException: {
                        setError(t('Email already exists'), 'email')
                        return
                    }
                    default: {
                        setError(t('Something went wrong, try again'), 'email')
                        return
                    }
                }
            }
            cleanError()
            showModal(<ConfirmUserModal from="signup" email={email} />, {
                email,
                password,
                from: 'signup',
            })
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
                <div>
                    {errorMessage && errorType === 'email' ? (
                        <span className="ml-4 mb-4 text-red-500">
                            {errorMessage}
                        </span>
                    ) : null}
                    <Input
                        value={email}
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
                        value={password}
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
                        value={confirmPassword}
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
