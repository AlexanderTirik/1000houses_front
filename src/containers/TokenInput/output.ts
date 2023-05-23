import { HttpMethod } from '../../enums/HttpMethods'
import { apiRequest } from '../../helpers/apiRequest'

export const onOutputClick = async (amount: String, recipient: String) => {
    // TODO check amount
    const response = await apiRequest(
        'output',
        HttpMethod.POST,
        JSON.stringify({
            amount,
            recipient,
        })
    )
    console.log(response)
}
