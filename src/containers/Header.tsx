import { LogoIcon } from '@assets/icons/LogoIcon'
import { Button } from '../components/Button'
import { WalletIcon } from '@assets/icons/WalletIcon'
import { ThemeSwitch } from '../components/ThemeSwitch'
import { LanguageSwitch } from '../components/LanguageSwitch'

export const Header = () => (
    <header className="row flex h-20 items-center justify-between border-b border-solid border-white bg-transparent px-16">
        <LogoIcon />
        <div className="row flex h-full items-center">
            <ThemeSwitch className="w-20 self-stretch" />
            <LanguageSwitch className="ml-7" />
            <Button onClick={() => {}} variant="tertiary" className="ml-7">
                Sign up
            </Button>
            <Button onClick={() => {}} variant="secondary" className="ml-3">
                Login
            </Button>
            <Button onClick={() => {}} icon={<WalletIcon />} className="ml-7">
                Connect wallet
            </Button>
        </div>
    </header>
)
