import { LanguageIcon } from '@assets/icons/LanguageIcon'
import { useTranslation } from 'react-i18next'

interface IProps {
    className?: string
}
export const LanguageSwitch = ({ className }: IProps) => {
    const { t, i18n } = useTranslation()
    return (
        <button
            onClick={() =>
                i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en')
            }
            className={
                className + ' flex flex-row items-center dark:text-white'
            }
        >
            <LanguageIcon
                className="mr-2.5"
                pathClassName="dark:stroke-white"
            />
            {t('language')}
        </button>
    )
}
