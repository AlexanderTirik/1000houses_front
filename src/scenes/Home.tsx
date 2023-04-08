import { LandingButton } from '@components/LandingButton'
import { AboutProject } from '@containers/AboutProject'
import { Dashboard } from '@containers/Dashboard'
import { Footer } from '@containers/Footer'
import { Header } from '@containers/Header'
import { PartnersCarousel } from '@containers/PartnersCarousel'
import { Team } from '@containers/Team'
import { useContext, type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { AccountContext } from '../context/AccountContext'
import useToast from '@hooks/useToast'
const Home = (): ReactElement => {
    const [t, i18n] = useTranslation()
    const { updateAuthStatus, isLoggedIn } = useContext(AccountContext)
    const { toastError } = useToast()
    const onReportClick = async () => {
        await updateAuthStatus()
        if (isLoggedIn) {
            return
        } else {
            console.log('chel')
            toastError(t('Not authorized'), 'landingReport')
        }
    }
    return (
        <div className="bg-gray-100 bg-home-light bg-contain bg-repeat-y transition dark:bg-light-black dark:bg-home-dark lg:bg-cover">
            <Header />
            <Dashboard />
            <div className="flex flex-col lg:mx-4 lg:flex-row">
                <LandingButton onClick={onReportClick}>
                    {
                        t(
                            'Report on the work of the management company'
                        ) as string
                    }
                </LandingButton>
                <LandingButton>
                    {t('Company growth strategy') as string}
                </LandingButton>
                <LandingButton>
                    {t('How to use the platform') as string}
                </LandingButton>
            </div>
            <AboutProject />
            <Team />
            <PartnersCarousel
                partners={[
                    {
                        name: 'Solana',
                        image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
                    },
                    {
                        name: 'Aboba',
                        image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
                    },
                    {
                        name: 'Sasha',
                        image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
                    },
                    {
                        name: 'Alex',
                        image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
                    },
                ]}
            />
            <Footer />
        </div>
    )
}

export default Home
