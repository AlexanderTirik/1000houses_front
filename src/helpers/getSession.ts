import { CognitoUserSession } from 'amazon-cognito-identity-js'
import userPool from '../config/userPool'
import { CognitoErrors } from '../enums/CognitoErrors'

export const getSession = (): Promise<CognitoUserSession> => {
    return new Promise((resolve, reject) => {
        const cognitoUser = userPool.getCurrentUser()
        if (cognitoUser) {
            cognitoUser.getSession((err: any, session: CognitoUserSession) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(session)
                }
            })
        } else {
            reject({ name: CognitoErrors.NotAuthorizedException })
        }
    })
}
