import { Partner } from '@components/Partner'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './styles.css'
import { useTranslation } from 'react-i18next'

interface IProps {
    partners: {
        image: string
        name?: string
    }[]
}
export const PartnersCarousel = ({ partners }: IProps) => {
    const [t, i18n] = useTranslation()

    return (
        <div>
            <div className="ml-16 mb-4 text-4xl font-semibold text-black dark:text-white">
                {t('Partners')}
            </div>
            <AliceCarousel
                mouseTracking
                infinite
                autoWidth
                autoPlay
                animationEasingFunction="linear"
                autoPlayInterval={0}
                animationDuration={5000}
                items={partners.map((partner, i) => (
                    <Partner
                        key={i}
                        image={partner.image}
                        name={partner.name}
                        variant={((i % 4) + 1) as 1 | 2 | 3 | 4}
                    />
                ))}
                disableButtonsControls
                disableDotsControls
            />
        </div>
    )
}
