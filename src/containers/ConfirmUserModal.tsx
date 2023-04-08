import { Input } from '@components/Input'
import { useTranslation } from 'react-i18next'
import { FunctionComponent, useReducer, useState } from 'react'
import { Button } from '@components/Button'
import UserPool from '../config/userPool'
import { ModalHeader } from '@components/ModalHeader'
import { CognitoUser } from 'amazon-cognito-identity-js'

interface IProps {
    onRequestClose?: () => void
    email: string
}

export const ConfirmUserModal: FunctionComponent<IProps> = ({
    onRequestClose = () => {},
    email,
}: IProps) => {
    const [t, i18n] = useTranslation()
    const [confirmationCode, setConfirmationCode] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const onConfirm = () => {
        const userData = {
            Username: email,
            Pool: UserPool,
        }
        const user = new CognitoUser(userData)
        user.confirmRegistration(confirmationCode, true, (err, result) => {
            if (err) {
                console.log(err)
                setErrorMessage(t('Wrong confirmation code') as string)
            } else {
                setErrorMessage('')
                onRequestClose()
            }
        })
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
                    {errorMessage ? (
                        <span className="ml-4 mb-4 text-red-500">
                            {errorMessage}
                        </span>
                    ) : null}
                    <Input
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
            </div>
        </div>
    )
}