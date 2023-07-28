import { getDataPdaData } from './getDataPdaData'

export const getStaked = async () => {
    const { stacked } = await getDataPdaData()
    if (stacked) {
        return stacked.toString()
    }
    return 0
}
