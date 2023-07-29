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

export const callClaimReward = async (address: PublicKey) => {
    const stakeProgram = await getStakeProgram()
    const stakePda = getStakePda(address)
    const dataPda = getDataPda()
    const rewardTokenAccount = await getAssociatedTokenAddress(
        accounts.rewardMint,
        dataPda,
        true
    )
    const userRewardTokenAccount = await getAssociatedTokenAddress(
        accounts.rewardMint,
        address
    )
    const tx = await stakeProgram.methods
        .claimReward()
        .accounts({
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            rewardMint: accounts.rewardMint,
            tokenMint: accounts.mint,
            stakePda,
            dataPda,
            rewardTokenAccount,
            userRewardTokenAccount,
            owner: address,
        })
        .transaction()
    await signAndSendTransaction(tx, address)
}
