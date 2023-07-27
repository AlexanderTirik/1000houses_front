import { PublicKey } from '@solana/web3.js'
import { AuthType } from '../../../enums/AuthType'
import { getConnection } from '../../../blockchain/getConnection'
import { accounts } from '../../../blockchain/accounts'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { getAddressFromAuth } from '../../../helpers/getAddressFromAuth'

export const getBalance = async (
    authType: AuthType,
    email?: string,
    address?: PublicKey
) => {
    const userWalletAddress = getAddressFromAuth(authType, email, address)
    if (userWalletAddress) {
        const connection = getConnection()
        const filter = {
            mint: accounts.mint,
            programId: TOKEN_PROGRAM_ID,
        }
        const userAccounts = (
            await connection.getTokenAccountsByOwner(userWalletAddress, filter)
        ).value
        if (!userAccounts.length) {
            return '0'
        }
        const tokenAccount = userAccounts[0]
        const balance = (
            await connection.getTokenAccountBalance(tokenAccount.pubkey)
        ).value.amount
        return balance
    }
    return '0'
}
