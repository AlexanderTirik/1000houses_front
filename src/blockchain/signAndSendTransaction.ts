import { PublicKey, Transaction } from '@solana/web3.js'
import { getConnection } from './getConnection'

export const signAndSendTransaction = async (
    transaction: Transaction,
    signer: PublicKey
) => {
    const connection = getConnection()
    const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash('finalized')
    transaction.recentBlockhash = blockhash
    transaction.feePayer = signer
    const signedTx = await window.solana.signTransaction(transaction)
    const txId = await connection.sendRawTransaction(signedTx.serialize())
    await connection.confirmTransaction({
        signature: txId,
        blockhash,
        lastValidBlockHeight,
    })
}
