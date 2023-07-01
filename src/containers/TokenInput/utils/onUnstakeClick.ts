import { PublicKey } from '@solana/web3.js'
import { AuthType } from '../../../enums/AuthType'
import { HttpMethod } from '../../../enums/HttpMethods'
import { apiRequest } from '../../../helpers/apiRequest'

export const onUnstakeClick = async (
    authType: AuthType,
    amount: String,
    address?: PublicKey
) => {
    // TODO check amount
    if (authType == AuthType.Cognito) {
        const response = await apiRequest('unstake', HttpMethod.POST, {
            amount,
        })
        console.log(response)
    }
}
