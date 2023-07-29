import { getDataPdaData } from './getDataPdaData'

export const getReward = async () => {
    const { reward } = await getDataPdaData()
    if (reward) {
        return reward.toString()
    }
    return 0
}
