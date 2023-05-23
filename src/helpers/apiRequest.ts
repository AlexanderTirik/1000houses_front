import { HttpMethod } from '../enums/HttpMethods'
import { env } from './env'
import userPool from '../config/userPool'
import { getSession } from './getSession'

export const apiRequest = async (
    path: string,
    method: HttpMethod,
    body?: any
) => {
    const token = (await getSession()).getIdToken().getJwtToken()
    const url = `${env.api.url}/${path}`
    const response = await fetch(url, {
        method,
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const data = await response.json()
    return data
}
