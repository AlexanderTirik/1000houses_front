import { LogoIcon } from '@assets/icons/LogoIcon'
import { FacebookIcon } from '@assets/icons/FacebookIcon'
import { YoutubeIcon } from '@assets/icons/YoutubeIcon'
import { TelegramIcon } from '@assets/icons/TelegramIcon'
import { InstagramIcon } from '@assets/icons/InstagramIcon'
import { FooterList } from '@components/Footer/FooterList'

export const Footer = () => {
    const iconStyle = 'dark:fill-white group-hover:fill-blue transition '
    return (
        <footer className="mt-10 flex justify-between border-t border-t-white px-16 py-10 dark:border-t-gray-700">
            <div>
                <LogoIcon />
                <div className="my-2 flex items-center justify-between">
                    <FacebookIcon
                        pathClassName={iconStyle}
                        className="group cursor-pointer"
                    />
                    <YoutubeIcon
                        pathClassName={iconStyle}
                        className="group cursor-pointer"
                    />
                    <TelegramIcon
                        pathClassName={iconStyle}
                        className="group cursor-pointer"
                    />
                    <InstagramIcon
                        pathClassName="transition cursor-pointer dark:fill-black"
                        className="group cursor-pointer"
                    />
                </div>
                <span className=" font-light text-black dark:text-white">
                    © {new Date().getFullYear()} All rights reserved.
                </span>
            </div>
            <FooterList
                title="Contact"
                names={['Blog', 'some.email@1000houses.com']}
            />
            <FooterList
                title="Documentation"
                names={['Information', 'Grants', 'Other']}
            />
        </footer>
    )
}
