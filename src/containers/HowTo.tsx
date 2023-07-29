import { Button } from '@components/Button'

interface IProps {
    stage?: number
    onNext: () => void
    onPrev: () => void
    onClose: () => void
}
export const HowTo = ({ stage, onNext, onPrev, onClose }: IProps) => {
    return (
        <div
            className={`fixed bottom-0 z-10 flex w-full items-center bg-gray-200 p-5 px-[10%] dark:bg-gray-800 dark:text-white ${
                !stage ? 'hidden' : ''
            }`}
        >
            <div className="w-3/4 text-lg font-medium">
                {stage}
                {'. '}
                {getStageDescription(stage)}
            </div>
            <div className="ml-auto flex flex-row">
                <Button variant="secondary" onClick={onPrev}>
                    {'<'}
                </Button>
                <Button variant="secondary" onClick={onNext}>
                    {'>'}
                </Button>
            </div>
            <button className="absolute right-5" onClick={onClose}>
                X
            </button>
        </div>
    )
}

const getStageDescription = (stage?: number) => {
    switch (stage) {
        case 1:
            return 'This is a general information panel where you can see all the up-to-date information about the state of the coin and staking'
        case 2:
            return 'This is a graph of the cryptocurrency price against the US dollar. In the top panel, you can change the time interval of this chart'
        case 3:
            return 'This is the main menu for managing your token, it is in it that all interaction with the token on our platform takes place'
        case 4:
            return 'Here you can see your current balance and how many coins you have staked'
        case 5:
            return 'This menu allows you to Buy/Sell/Stake/Unstake coins. Choose the option you need, enter the number of tokens and follow the instructions'
        default:
            return 'Error'
    }
}
