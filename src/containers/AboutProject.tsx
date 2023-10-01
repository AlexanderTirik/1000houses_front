import { Trans, useTranslation } from 'react-i18next'

export const AboutProject = () => {
    const { t } = useTranslation()
    return (
        <div className="mt-10 bg-about-light bg-top bg-no-repeat py-10 dark:bg-about-dark">
            <div className="mb-10 w-full text-center text-7xl font-semibold uppercase text-black dark:text-white lg:text-9xl">
                {t('About the project')}
            </div>
            <div className="mx-[5%] rounded-3xl bg-white bg-opacity-80 p-5 text-xl dark:bg-gray-700 dark:bg-opacity-80 dark:text-white lg:ml-[15%] lg:w-1/3">
                <Trans
                    i18nKey={`Our project aims to bring together the conservative and trustworthy real estate market with the modern convenience of blockchain technology. We're introducing a new financial instrument called <i>fast staking</i>, which is available to all users. By purchasing our tokens, buyers will have the opportunity to earn a regular income from real estate rentals. Unlike regular staking, <i>fast-staking</i> does not require users to freeze tokens for a long time, which makes it more convenient`}
                />
            </div>
            <div className="mx-[5%] mt-2 rounded-3xl bg-white bg-opacity-80 p-5 text-xl dark:bg-gray-700 dark:bg-opacity-80 dark:text-white lg:ml-auto lg:mr-[15%] lg:w-1/3">
                {t(
                    `Wondering how it works? We've have a management company that takes care of renting out our properties. Every month, this company transfers all the income to our platform's website. Based on the amount of tokens users have staked, the platform automatically redeems a proportional share of those tokens each month. You can purchase staking tokens directly on our platform or through an exchange`
                )}
            </div>
        </div>
    )
}
