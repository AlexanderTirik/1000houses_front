import { LandingButton } from '@components/LandingButton'
import { AboutProject } from '@containers/AboutProject'
import { Dashboard } from '@containers/Dashboard'
import { Footer } from '@containers/Footer'
import { Header } from '@containers/Header'
import { PartnersCarousel } from '@containers/PartnersCarousel'
import { Team } from '@containers/Team'
import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
const Home = (): ReactElement => {
    const [t, i18n] = useTranslation()

    return (
        <div className="bg-gray-100 bg-home-light bg-contain bg-repeat-y transition dark:bg-light-black dark:bg-home-dark lg:bg-cover">
            <Header />
            <Dashboard />
            <div className="flex flex-col lg:mx-4 lg:flex-row">
                <LandingButton>
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
