import { PublicKey } from '@solana/web3.js'
import { AuthType } from '../enums/AuthType'
import { accounts } from '../blockchain/accounts'

export const getAddressFromAuth = (
    authType: AuthType,
    email?: string,
    address?: PublicKey
) => {
    if (authType == AuthType.Wallet && address) {
        return address
    }
    if (authType == AuthType.Cognito && email) {
        const [userPda] = PublicKey.findProgramAddressSync(
            [Buffer.from(email, 'utf8'), accounts.authority.toBuffer()],
            accounts.programs.keeper
        )
        return userPda
    }
    return undefined
}
