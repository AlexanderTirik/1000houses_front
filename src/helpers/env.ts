export const env = {
    cognito: {
        userPoolId: import.meta.env.VITE_USER_POOL_ID,
        clientId: import.meta.env.VITE_CLIENT_ID,
    },
    api: {
        url: import.meta.env.VITE_API_URL,
    },
    blockchain: {
        cluster: import.meta.env.VITE_BLOCKCHAIN_CLUSTER,
    },
}
