import { PublicKey } from '@solana/web3.js'
import { AuthType } from '../../../enums/AuthType'
import { callClaimReward } from '../../../blockchain/callClaimReward'
import { HttpMethod } from '../../../enums/HttpMethods'
import { apiRequest } from '../../../helpers/apiRequest'

export const onClaimRewardClick = async (
    authType: AuthType,
    address?: PublicKey
) => {
    if (authType == AuthType.Cognito) {
        await apiRequest('claimReward', HttpMethod.POST, {})
    }
    if (authType == AuthType.Wallet && address) {
        await callClaimReward(address)
    }
}
