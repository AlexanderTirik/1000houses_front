import { LogoIcon } from '@assets/icons/LogoIcon'
import { FacebookIcon } from '@assets/icons/FacebookIcon'
import { YoutubeIcon } from '@assets/icons/YoutubeIcon'
import { TelegramIcon } from '@assets/icons/TelegramIcon'
import { InstagramIcon } from '@assets/icons/InstagramIcon'
import { FooterList } from '@components/Footer/FooterList'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const [t, i18n] = useTranslation()

    const iconStyle = 'dark:fill-white group-hover:fill-blue transition '
    return (
        <footer className="mt-10 flex flex-col justify-between border-t border-t-white p-7 pt-10 dark:border-t-gray-700 lg:flex-row lg:px-16 lg:py-10">
            <div>
                <LogoIcon />
                <div className="my-2 flex items-center justify-start lg:justify-between">
                    <FacebookIcon
                        pathClassName={iconStyle}
                        className="group mr-4 cursor-pointer"
                    />
                    <YoutubeIcon
                        pathClassName={iconStyle}
                        className="group mr-4 cursor-pointer"
                    />
                    <TelegramIcon
                        pathClassName={iconStyle}
                        className="group mr-4 cursor-pointer"
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
                key={'Contact'}
                title={t('Contact')}
                names={[t('Blog'), 'sasha.tirik@gmail.com']}
            />
            <FooterList
                key={'Documentation'}
                title={t('Documentation')}
                names={[t('Information'), t('Grants'), t('Other')]}
            />
        </footer>
    )
}
