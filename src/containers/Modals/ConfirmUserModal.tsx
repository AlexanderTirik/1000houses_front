import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent, useContext, useState } from 'react'
import { Button } from '@components/Button'
import { ModalHeader } from '@components/ModalHeader'
import { AccountContext } from '../../context/AccountContext'
import { CognitoUser } from 'amazon-cognito-identity-js'
import userPool from '../../config/userPool'
import { ModalContext } from '../../context/ModalContext'
import { LoginModal } from './LoginModal'
import { SignUpModal } from './SignUpModal'

interface IProps {
    onRequestClose?: () => void
    email: string
    password?: string
    from: 'login' | 'signup'
}

export const ConfirmUserModal: FunctionComponent<IProps> = ({
    onRequestClose = () => {},
    email,
    password,
    from,
}: IProps) => {
    const [t, i18n] = useTranslation()
    const [confirmationCode, setConfirmationCode] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { auth } = useContext(AccountContext)
    const { showModal } = useContext(ModalContext)

    const onConfirm = async () => {
        const user = new CognitoUser({
            Username: email,
            Pool: userPool,
        })
        user.confirmRegistration(confirmationCode, true, (err, result) => {
            if (err) {
                setErrorMessage(t('Wrong confirmation code') as string)
                return
            }
        })
        if (password) {
            auth(email, password)
        }
        setErrorMessage('')
        onRequestClose()
    }

    const onBack = () => {
        if (from === 'login') {
            showModal(<LoginModal />, { givenEmail: email })
        } else {
            showModal(<SignUpModal />, { givenEmail: email })
        }
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex flex-col justify-between bg-gray-100 bg-home-light bg-cover bg-repeat-y p-6 dark:bg-light-black dark:bg-home-dark lg:inset-x-[35%] lg:bottom-auto lg:top-1/4 lg:rounded-3xl lg:border lg:border-gray-200"
        >
            <div>
                <ModalHeader
                    title={t('Confirm email')}
                    onRequestClose={onRequestClose}
                />
                <div className="mb-2 dark:text-white">
                    {t('We sent you confirmation code to your email')}
                </div>
                <div>
                    <Input value={email} className="mb-4" disabled />
                    {errorMessage ? (
                        <span className="ml-4 mb-4 text-red-500">
                            {errorMessage}
                        </span>
                    ) : null}
                    <Input
                        value={confirmationCode}
                        onChange={setConfirmationCode}
                        placeholder={t('Confirmation code') as string}
                        className={`mb-4 ${
                            errorMessage.length ? 'border border-red-500 ' : ''
                        }`}
                    />
                </div>
            </div>
            <div className="mt-3">
                <Button onClick={onConfirm} className="mb-2 w-full">
                    {t('Confirm')}
                </Button>
                <Button
                    onClick={onBack}
                    variant="secondary"
                    className="mb-2 w-full"
                >
                    {t('Back')}
                </Button>
            </div>
        </div>
    )
}
