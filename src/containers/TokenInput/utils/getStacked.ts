import { PublicKey } from '@solana/web3.js'
import { accounts } from '../../../blockchain/accounts'
import { getStakeProgram } from '../../../blockchain/getStakeProgram'
import { getDataPdaData } from '../../../blockchain/getDataPdaData'

export const getStacked = async (address?: PublicKey) => {
    if (address) {
        const [stakePda] = PublicKey.findProgramAddressSync(
            [Buffer.from('stake', 'utf8'), address.toBuffer()],
            accounts.programs.stake
        )
        const stakeProgram = await getStakeProgram()
        const { rewardIndex } = await getDataPdaData()
        try {
            const { stacked, lastRewardIndex } =
                await stakeProgram.account.stakePda.fetch(stakePda)
            if (stacked && lastRewardIndex == rewardIndex) {
                return stacked.toString()
            }
        } catch (err) {
            return '0'
        }
    }
    return '0'
}
