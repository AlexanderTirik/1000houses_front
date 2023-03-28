import { type ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/Button'
import { WalletIcon } from '@assets/icons/WalletIcon'
import { Header } from '../containers/Header'
const Home = (): ReactElement => {
    return (
        <div className="bg-gray-100 dark:bg-light-black">
            <Header />
            <Button icon={<WalletIcon />} onClick={() => {}}>
                Button
            </Button>
            <Button
                icon={<WalletIcon />}
                variant="secondary"
                onClick={() => {}}
            >
                Button
            </Button>
            <Button icon={<WalletIcon />} variant="tertiary" onClick={() => {}}>
                Button
            </Button>
        </div>
    )
}

export default Home
