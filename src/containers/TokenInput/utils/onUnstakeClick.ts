import { PublicKey } from '@solana/web3.js'
import { AuthType } from '../../../enums/AuthType'
import { HttpMethod } from '../../../enums/HttpMethods'
import { apiRequest } from '../../../helpers/apiRequest'
import { callUnstake } from '../../../blockchain/callUnstake'

export const onUnstakeClick = async (
    authType: AuthType,
    amount: string,
    address?: PublicKey
) => {
    // TODO check amount
    if (authType == AuthType.Cognito) {
        await apiRequest('unstake', HttpMethod.POST, {
            amount,
        })
    }
    if (authType == AuthType.Wallet && address) {
        await callUnstake(address, amount)
    }
}
