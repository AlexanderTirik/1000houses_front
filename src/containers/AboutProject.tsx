import { useTranslation } from 'react-i18next'
import HomeA from '/HomeA.jpg'
import HomeB from '/HomeB.jpg'

export const AboutProject = () => {
    const [t, i18n] = useTranslation()
    return (
        <div className="my-5">
            <span className="ml-16 text-4xl font-semibold text-black dark:text-white">
                About project
            </span>
            <div className="mx-[5%] mt-5">
                <div className="flex flex-col-reverse items-center justify-center md:flex-row">
                    <div className="z-10 mr-0 mt-2 rounded-3xl bg-white p-5 text-xl dark:bg-gray-700 dark:text-white md:-mr-[25%] md:mt-[10%] md:mb-0 lg:mt-0 lg:-mr-10">
                        {' '}
                        {t(
                            'Real estate, one of the most conservative markets in the world, as it is one of the benchmarks for reliable investments. Property rentals, the most widespread field of activity of real estate companies. The business is at the other extreme from the current high-risk projects on the blockchain.'
                        )}
                    </div>
                    <img src={HomeA} className="h-[400px] rounded-3xl" />
                </div>
                <div className="mt-2 flex flex-col items-center justify-center md:flex-row lg:mt-0">
                    <img src={HomeB} className="h-[400px] rounded-3xl" />
                    <div className="ml-0 mt-2 rounded-3xl bg-white p-5 text-xl dark:bg-gray-700 dark:text-white md:-ml-[25%] md:mt-[10%] lg:mt-0 lg:-ml-10">
                        {' '}
                        {t(
                            'Real estate, one of the most conservative markets in the world, as it is one of the benchmarks for reliable investments. Property rentals, the most widespread field of activity of real estate companies. The business is at the other extreme from the current high-risk projects on the blockchain.'
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
