import { CognitoUserPool } from 'amazon-cognito-identity-js'
import { env } from '../helpers/env'

const poolData = {
    UserPoolId: env.cognito.userPoolId,
    ClientId: env.cognito.clientId,
}

export default new CognitoUserPool(poolData)
