import { getDataPdaData } from './getDataPdaData'

export const getStakingFreeze = async () => {
    const { isStackingFreezed } = await getDataPdaData()
    return isStackingFreezed
}
