import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'
import { env } from '../helpers/env'

export const getConnection = () => {
    return new Connection(clusterApiUrl(env.blockchain.cluster), 'confirmed')
}
