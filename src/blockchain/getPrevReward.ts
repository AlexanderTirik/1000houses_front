import { getDataPdaData } from './getDataPdaData'

export const getPrevReward = async () => {
    const { previousReward } = await getDataPdaData()
    if (previousReward) {
        return previousReward.toString()
    }
    return 0
}
