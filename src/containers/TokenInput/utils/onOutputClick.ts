import { AuthType } from '../../../enums/AuthType'
import { HttpMethod } from '../../../enums/HttpMethods'
import { apiRequest } from '../../../helpers/apiRequest'

export const onOutputClick = async (
    authType: AuthType,
    amount: String,
    recipient: String
) => {
    // TODO check amount
    if (authType == AuthType.Cognito) {
        const response = await apiRequest('output', HttpMethod.POST, {
            amount,
            recipient,
        })
        console.log(response)
    }
}
