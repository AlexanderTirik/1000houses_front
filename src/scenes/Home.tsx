import { LandingButton } from '@components/LandingButton'
import { AboutProject } from '@containers/AboutProject'
import { Dashboard } from '@containers/Dashboard'
import { Footer } from '@containers/Footer'
import { Header } from '@containers/Header'
import { PartnersCarousel } from '@containers/PartnersCarousel'
import { Team } from '@containers/Team'
import { type ReactElement } from 'react'
const Home = (): ReactElement => {
    return (
        <div className="bg-gray-100 bg-home-light bg-cover bg-repeat-y font-[montserrat] transition dark:bg-light-black dark:bg-home-dark">
            <Header />
            <Dashboard />
            <div className="mx-4 flex">
                <LandingButton>
                    Report on the work of the management company
                </LandingButton>
                <LandingButton>Company growth strategy</LandingButton>
                <LandingButton>How to use the platform</LandingButton>
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
