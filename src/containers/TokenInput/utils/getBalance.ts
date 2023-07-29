import { PublicKey } from '@solana/web3.js'
import { getConnection } from '../../../blockchain/getConnection'
import { accounts } from '../../../blockchain/accounts'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'

export const getBalance = async (address?: PublicKey) => {
    if (address) {
        const connection = getConnection()
        const filter = {
            mint: accounts.mint,
            programId: TOKEN_PROGRAM_ID,
        }
        const userAccounts = (
            await connection.getTokenAccountsByOwner(address, filter)
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
