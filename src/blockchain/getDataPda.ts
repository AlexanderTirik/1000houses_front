import { PublicKey } from '@solana/web3.js'
import { accounts } from './accounts'

export const getDataPda = () => {
    const [dataPda] = PublicKey.findProgramAddressSync(
        [Buffer.from('data', 'utf8'), accounts.authority.toBuffer()],
        accounts.programs.stake
    )
    return dataPda
}
