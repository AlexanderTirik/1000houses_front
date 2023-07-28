import * as anchor from '@coral-xyz/anchor'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { PublicKey } from '@solana/web3.js'
import { accounts } from '../../../blockchain/accounts'
import { getConnection } from '../../../blockchain/getConnection'
import { AuthType } from '../../../enums/AuthType'
import { getAddressFromAuth } from '../../../helpers/getAddressFromAuth'
import { getStakeProgram } from '../../../blockchain/getStakeProgram'
import { getDataPdaData } from '../../../blockchain/getDataPdaData'

export const getStacked = async (address?: PublicKey) => {
    if (address) {
        const [stakePda] = PublicKey.findProgramAddressSync(
            [Buffer.from('stake', 'utf8'), address.toBuffer()],
            accounts.programs.stake
        )
        const stakeProgram = await getStakeProgram()
        const { currentRewardIndex } = await getDataPdaData()
        try {
            const { stacked, lastRewardIndex } =
                await stakeProgram.account.stakePda.fetch(stakePda)
            if (stacked && lastRewardIndex == currentRewardIndex) {
                return stacked.toString()
            }
        } catch (err) {
            return '0'
        }
    }
    return '0'
}
