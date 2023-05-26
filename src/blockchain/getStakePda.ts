import { PublicKey } from '@solana/web3.js'
import { accounts } from './accounts'

export const getStakePda = (address: PublicKey) => {
    const [stakePda] = PublicKey.findProgramAddressSync(
        [Buffer.from('stake', 'utf8'), address.toBuffer()],
        accounts.programs.stake
    )
    return stakePda
}
