import * as anchor from '@coral-xyz/anchor'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { PublicKey } from '@solana/web3.js'
import { accounts } from '../../../blockchain/accounts'
import { getConnection } from '../../../blockchain/getConnection'
import { AuthType } from '../../../enums/AuthType'
import { getAddressFromAuth } from '../../../helpers/getAddressFromAuth'
import { getStakeProgram } from '../../../blockchain/getStakeProgram'

export const getStacked = async (
    authType: AuthType,
    email?: string,
    address?: PublicKey
) => {
    const userWalletAddress = getAddressFromAuth(authType, email, address)
    if (userWalletAddress) {
        const [stakePda] = PublicKey.findProgramAddressSync(
            [Buffer.from('stake', 'utf8'), userWalletAddress.toBuffer()],
            accounts.programs.stake
        )
        const stakeProgram = await getStakeProgram()
        const { stacked } = await stakeProgram.account.stakePda.fetch(stakePda)
        if (stacked) {
            return stacked.toString()
        }
    }
    return '0'
}
