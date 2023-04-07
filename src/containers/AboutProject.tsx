import { useTranslation } from 'react-i18next'

export const AboutProject = () => {
    const [t, i18n] = useTranslation()
    return (
        <div className="mt-10 bg-about-light bg-top bg-no-repeat py-10 dark:bg-about-dark">
            <div className="mb-10 w-full text-center text-7xl font-semibold uppercase text-black dark:text-white lg:text-9xl">
                {t('About the project')}
            </div>
            <div className="mx-[5%] rounded-3xl bg-white bg-opacity-80 p-5 text-xl dark:bg-gray-700 dark:bg-opacity-80 dark:text-white lg:ml-[15%] lg:w-1/3">
                {t(
                    'Real estate, one of the most conservative markets in the world, as it is one of the benchmarks for reliable investments. Property rentals, the most widespread field of activity of real estate companies. The business is at the other extreme from the current high-risk projects on the blockchain.'
                )}
            </div>
            <div className="mx-[5%] mt-2 rounded-3xl bg-white bg-opacity-80 p-5 text-xl dark:bg-gray-700 dark:bg-opacity-80 dark:text-white lg:ml-auto lg:mr-[15%] lg:w-1/3">
                {t(
                    'Real estate, one of the most conservative markets in the world, as it is one of the benchmarks for reliable investments. Property rentals, the most widespread field of activity of real estate companies. The business is at the other extreme from the current high-risk projects on the blockchain.'
                )}
            </div>
        </div>
    )
}
