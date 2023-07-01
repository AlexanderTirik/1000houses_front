import { AnchorProvider } from '@coral-xyz/anchor'
import { getConnection } from './getConnection'

export const getProvider = () => {
    const connection = getConnection()
    const provider = new AnchorProvider(connection, window.solana, {
        preflightCommitment: 'processed',
        commitment: 'processed',
    })
    return provider
}
