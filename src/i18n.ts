import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from '@assets/localization/ru.json'
import en from '@assets/localization/en.json'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
    en,
    ru,
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
