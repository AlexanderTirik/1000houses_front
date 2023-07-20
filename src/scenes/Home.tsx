import { LandingButton } from '@components/LandingButton'
import { AboutProject } from '@containers/AboutProject'
import { Dashboard } from '@containers/Dashboard'
import { PartnersCarousel } from '@containers/PartnersCarousel'
import { Team } from '@containers/Team'
import { useContext, type ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AccountContext } from '../context/AccountContext'
import useToast from '@hooks/useToast'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from '../enums/RoutesEnum'
import { PageTemplate } from '@containers/PageTemplate'
import { HowTo } from '@containers/HowTo'
const Home = (): ReactElement => {
    const [t, i18n] = useTranslation()
    const [howToStage, setHowToStage] = useState<number>(0)
    const { updateAuthStatus } = useContext(AccountContext)
    const { isLoggedIn } = useContext(AuthContext)
    const { toastError } = useToast()
    const navigate = useNavigate()

    const onReportClick = async () => {
        await updateAuthStatus()
        if (isLoggedIn) {
            return
        } else {
            toastError(t('Not authorized'), 'landingReport')
        }
    }

    const onStrategyClick = () => {
        navigate(RoutesEnum.STRATEGY)
    }

    const onNextHowTo = () => {
        if (howToStage === 5) {
            setHowToStage(0)
        } else setHowToStage(howToStage + 1)
    }
    const onPrevHowTo = () => {
        setHowToStage(Math.max(howToStage - 1, 1))
    }
    const onCloseHowTo = () => {
        setHowToStage(0)
    }
    const onOpenHowTo = async () => {
        await updateAuthStatus()
        if (isLoggedIn) {
            setHowToStage(1)
        } else {
            toastError(t('Not authorized'), 'landingReport')
        }
    }
    return (
        <PageTemplate>
            <Dashboard howToStage={howToStage} />
            <HowTo
                stage={howToStage}
                onNext={onNextHowTo}
                onPrev={onPrevHowTo}
                onClose={onCloseHowTo}
            />
            <div className="flex flex-col lg:mx-4 lg:flex-row">
                <LandingButton onClick={onReportClick}>
                    {
                        t(
                            'Report on the work of the management company'
                        ) as string
                    }
                </LandingButton>
                <LandingButton onClick={onStrategyClick}>
                    {t('Company growth strategy') as string}
                </LandingButton>
                <LandingButton onClick={onOpenHowTo}>
                    {t('How to use the platform') as string}
                </LandingButton>
            </div>
            <AboutProject />
            <Team />
            <PartnersCarousel
                partners={[
                    {
                        image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
                        name: 'Solana',
                    },
                    {
                        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
                        name: 'Ethereum',
                    },
                    {
                        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
                        name: 'Bitcoin',
                    },
                    {
                        image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/825.png',
                        name: 'Tether',
                    },
                ]}
            />
        </PageTemplate>
    )
}

export default Home
