import { PublicKey } from '@solana/web3.js'
import { AuthType } from '../../../enums/AuthType'
import { HttpMethod } from '../../../enums/HttpMethods'
import { apiRequest } from '../../../helpers/apiRequest'
import { callStake } from '../../../blockchain/callStake'

export const onStakeClick = async (
    authType: AuthType,
    amount: string,
    address?: PublicKey
) => {
    // TODO check amount
    if (authType == AuthType.Cognito) {
        const response = await apiRequest('stake', HttpMethod.POST, {
            amount,
        })
        console.log(response)
    }
    if (authType == AuthType.Wallet && address) {
        callStake(address, amount)
    }
}
