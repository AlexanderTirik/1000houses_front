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
import { getConnection } from './getConnection'
import { signAndSendTransaction } from './signAndSendTransaction'

export const callStake = async (address: PublicKey, amount: string) => {
    const stakeProgram = await getStakeProgram()
    const stakePda = getStakePda(address)
    const stakePdaTokenAccount = await getAssociatedTokenAddress(
        accounts.mint,
        stakePda,
        true
    )
    const userTokenAccount = await getAssociatedTokenAddress(
        accounts.mint,
        address
    )
    const tx = await stakeProgram.methods
        .stake(new BN(amount))
        .accounts({
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            tokenMint: accounts.mint,
            authority: accounts.authority,
            stakePda,
            stakePdaTokenAccount,
            dataPda: getDataPda(),
            userTokenAccount,
            user: address,
        })
        .transaction()
    signAndSendTransaction(tx, address)
}
