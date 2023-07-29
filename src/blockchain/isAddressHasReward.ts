import { PublicKey } from '@solana/web3.js'
import { getDataPdaData } from './getDataPdaData'
import { getStakePda } from './getStakePda'
import { getStakeProgram } from './getStakeProgram'

export const isAddressHasReward = async (address: PublicKey) => {
    const stakeProgram = await getStakeProgram()
    const stakePda = getStakePda(address)
    const { rewardIndex } = await getDataPdaData()
    try {
        const { stacked, lastRewardIndex } =
            await stakeProgram.account.stakePda.fetch(stakePda)
        if (
            stacked &&
            stacked.toNumber() > 0 &&
            lastRewardIndex + 1 == rewardIndex
        ) {
            return true
        }
    } catch {
        return false
    }
    return false
}
