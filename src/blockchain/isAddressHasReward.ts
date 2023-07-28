import { PublicKey } from '@solana/web3.js'
import { getDataPdaData } from './getDataPdaData'
import { getStakePda } from './getStakePda'
import { getStakeProgram } from './getStakeProgram'

export const isAddressHasReward = async (address: PublicKey) => {
    const stakeProgram = await getStakeProgram()
    const stakePda = getStakePda(address)
    const { currentRewardIndex } = await getDataPdaData()
    const { stacked, lastRewardIndex } =
        await stakeProgram.account.stakePda.fetch(stakePda)
    console.log(lastRewardIndex)
    if (
        stacked &&
        stacked.toNumber() > 0 &&
        lastRewardIndex + 1 == currentRewardIndex
    ) {
        return true
    }
    return false
}
