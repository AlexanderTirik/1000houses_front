import { PageTemplate } from '@containers/PageTemplate'
import { ReactElement } from 'react'

export const Strategy = (): ReactElement => {
    return (
        <PageTemplate>
            <div className="m-5 rounded-3xl bg-white p-4 dark:bg-gray-700 dark:text-white">
                <h1 className="mb-2 text-2xl font-bold">
                    Company growth strategy
                </h1>
                <p className="text-lg">
                    Real estate market is known for its stability and consistent
                    income, which means we don't promote excessive speculative
                    growth or quick, unexpected profits.
                    <br />
                    <br />
                    Our strategy is to provide a high level of reliability for
                    the entire crypto asset market with the added advantage of
                    our token being less susceptible to external shocks. This is
                    because our token is backed by stable income from real
                    estate. As a result, we aim to establish ourselves as the
                    most trustworthy and dependable token in the world over
                    time!
                    <br />
                    <br /> We provide a compelling reason for long-term
                    investment in our token. With a total token supply of 20
                    billion and an unlimited volume for our fund, we ensure a
                    consistent staking yield per token over time. As a result,
                    the token's price on the stock exchange is expected to rise
                    steadily.
                    <br />
                    <br /> How do we plan to achieve this? <br />
                    The total emission of tokens will be divided into three
                    stages:
                    <div className="my-2 rounded-xl bg-gray-100 p-5 dark:bg-gray-600">
                        <ol className="ml-8 list-decimal">
                            <li>
                                {' '}
                                Upon the project launch, a total of{' '}
                                <b>5 billion</b> tokens will be issued. Out of
                                this amount, 2.5 billion tokens will be
                                allocated to the investors, while the remaining
                                2.5 billion tokens will be allocated to the
                                project team.{' '}
                            </li>
                            <li>
                                After one year, an additional <b>5 billion</b>{' '}
                                tokens will be issued, and the entire amount
                                will be allocated to the investors.
                            </li>
                            <li>
                                After another year, the remaining{' '}
                                <b>10 billion</b> tokens will be issued, and
                                they will be distributed to the investors.
                            </li>
                        </ol>{' '}
                    </div>
                    For each token sale to investors, the management company
                    will use the funds to purchase housing. Since this project
                    requires significant capital investment, we will progress
                    through multiple stages of investment, with the majority of
                    housing purchases occurring in the final, third stage of the
                    token sale.
                    <br />
                    <br /> The initial two stages primarily focus on building
                    the project's reputation and gathering essential statistics
                    to attract additional capital. These stages serve as crucial
                    milestones to establish trust and gather necessary data,
                    paving the way for attracting more investment into the
                    project.
                    <br />
                    <br />
                    During the first stage, the plan is to acquire <b>5</b>{' '}
                    rental properties. In the second stage, we aim to expand
                    further by purchasing <b>50</b> properties. Finally, in the
                    third stage, our goal is to acquire <b>500</b> properties.
                    These incremental steps allow us to gradually build up our
                    real estate portfolio and ensure steady growth for the
                    project.
                    <br />
                    <div className="mx-auto my-5 rounded-xl bg-gray-100 p-5 text-center text-2xl font-semibold dark:bg-gray-600 lg:w-2/3">
                        5 Units 👉 50 Units 👉 500 Units
                    </div>
                    Once all stages are successfully completed, an important
                    phase will commence, which involves expanding the number of
                    properties through the internal income generated by the
                    project. This marks a significant milestone where the
                    project's self-sustaining revenue will enable further growth
                    and expansion of the property portfolio. <br />
                    <br />
                    This approach ensures stable and consistent growth,
                    supported by the tokens' payouts. The acquisition of
                    properties will not rely on the management company's income
                    or the project team's expenses, safeguarding the allocated
                    funds. Instead, the acquisition will solely depend on the
                    number of token sales corresponding to the number of tokens
                    available on the exchange. This mechanism ensures that the
                    property portfolio expands in proportion to the sales of
                    tokens, maintaining a steady growth trajectory.
                </p>
            </div>
        </PageTemplate>
    )
}
