import { getDataPdaData } from './getDataPdaData'

export const getPrevStaked = async () => {
    const { previousStacked } = await getDataPdaData()
    if (previousStacked) {
        return previousStacked.toString()
    }
    return 0
}
