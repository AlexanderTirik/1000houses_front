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
                        name: 'Partner 1',
                        image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
                    },
                    {
                        name: 'Partner 2',
                        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
                    },
                    {
                        name: 'Partner 3',
                        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
                    },
                    {
                        name: 'Partner 4',
                        image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/825.png',
                    },
                ]}
            />
            <Footer />
        </div>
    )
}

export default Home
