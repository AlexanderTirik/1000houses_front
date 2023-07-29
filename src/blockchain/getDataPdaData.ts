import { getDataPda } from './getDataPda'
import { getStakeProgram } from './getStakeProgram'

export const getDataPdaData = async () => {
    const stakeProgram = await getStakeProgram()
    const dataPda = getDataPda()
    return await stakeProgram.account.data.fetch(dataPda)
}
