import HousesStakeIdl from '@assets/idl/houses_stake.json'
import { accounts } from './accounts'
import { getProvider } from './getProvider'
import { Idl, Program } from '@coral-xyz/anchor'

export const getStakeProgram = async () => {
    return new Program(
        HousesStakeIdl as Idl,
        accounts.programs.stake,
        await getProvider()
    )
}
