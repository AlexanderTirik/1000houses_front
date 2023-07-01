import { TeamMember } from '@components/TeamMember'
import Alexei from '@assets/photos/Alexei.jpg'
import Alexander from '@assets/photos/Alexander.jpeg'
import Oleksandr from '@assets/photos/Oleksandr.jpeg'

export const Team = () => (
    <div className="m-8 flex flex-col lg:mx-16">
        <div className="mb-4 text-4xl font-semibold text-black dark:text-white">
            Team
        </div>
        <div className="flex flex-col justify-center lg:flex-row">
            <TeamMember
                key="1"
                name="Alexander Gershannik"
                description={`Alexander is the director of the management company in "1000 houses". He has experience working with Yellow Pages Thompson", "Price Waterhouse", "InterOccidental", has experience as a trust fund manager since 1994. The average value of real estate under trust management is about $ 2.5 million (for 25 years, more than 260 objects).`}
                labels={['Management company director']}
                photo={Alexander}
            />
            <TeamMember
                key="2"
                name="Alexei Tereshuk"
                description={`Alexei is the manager in "1000 houses". Worked as a manager in companies in Belarus, with about 10 years of entrepreneurial experience, including in international blockchain projects.`}
                labels={['Manager', 'Founder']}
                photo={Alexei}
            />
            <TeamMember
                name="Oleksandr Tirik"
                description={`Oleksandr is CTO in "1000 houses". Senior full-stack developer at 8x8 company. Certified cloud developer. More than 5 years as a developer in all kinds of projects from small businesses to enterprises. Active participant in many hackathons and IT events.`}
                labels={['CTO']}
                photo={Oleksandr}
            />
        </div>
    </div>
)
