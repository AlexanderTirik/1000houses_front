import { BN } from '@coral-xyz/anchor'
import { getStakeProgram } from './getStakeProgram'
import {
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    getAssociatedTokenAddress,
} from '@solana/spl-token'
import { PublicKey, SystemProgram } from '@solana/web3.js'
import { accounts } from './accounts'
import { getDataPda } from './getDataPda'
import { getStakePda } from './getStakePda'
import { signAndSendTransaction } from './signAndSendTransaction'

export const callUnstake = async (address: PublicKey, amount: string) => {
    const stakeProgram = await getStakeProgram()
    const stakePda = getStakePda(address)
    const dataPda = getDataPda()
    const stakeTokenAccount = await getAssociatedTokenAddress(
        accounts.mint,
        dataPda,
        true
    )
    const ownerTokenAccount = await getAssociatedTokenAddress(
        accounts.mint,
        address
    )
    const tx = await stakeProgram.methods
        .unstake(new BN(amount))
        .accounts({
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            tokenMint: accounts.mint,
            stakePda,
            stakeTokenAccount,
            dataPda,
            ownerTokenAccount,
            owner: address,
        })
        .transaction()
    console.log(tx)
    await signAndSendTransaction(tx, address)
}
