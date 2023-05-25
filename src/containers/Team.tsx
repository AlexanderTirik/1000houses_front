import { TeamMember } from '@components/TeamMember'

export const Team = () => (
    <div className="m-8 flex flex-col lg:mx-16">
        <div className="mb-4 text-4xl font-semibold text-black dark:text-white">
            Team
        </div>
        <div className="flex flex-col justify-center lg:flex-row">
            <TeamMember
                key="1"
                name="John Doe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nunc in tincidunt ultricies, enim lectus
                    ultrices magna, vitae lacinia enim nunc a ligula."
                labels={['CEO', 'Founder']}
                photo="https://media.architecturaldigest.com/photos/5abe831a33e2a9249e2c08d0/1:1/w_1632,h_1632,c_limit/GettyImages-544265174.jpg"
            />
            <TeamMember
                key="2"
                name="John Doe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nunc in tincidunt ultricies, enim lectus
                    ultrices magna, vitae lacinia enim nunc a ligula."
                labels={['CEO', 'Founder']}
                photo="https://media.vogue.fr/photos/5c8a55363d44a0083ccbef54/2:3/w_2560%2Cc_limit/GettyImages-625257378.jpg"
            />
            <TeamMember
                name="John Doe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nunc in tincidunt ultricies, enim lectus
                    ultrices magna, vitae lacinia enim nunc a ligula."
                labels={['CEO', 'Founder']}
                photo="https://www.nationalgallery.org.uk/media/30115/gogh-vincent-van-c-face-half.jpg?rxy=0.44407894736842107,0.43656716417910446&width=430&bgcolor=fff&rnd=132138118514970000"
            />
        </div>
    </div>
)
