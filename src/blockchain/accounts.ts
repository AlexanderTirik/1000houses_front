import { PublicKey } from '@solana/web3.js'

export const accounts = {
    authority: new PublicKey('Fzt2kevkARG4LCKaCj1jVXe5oL4nvscBRNx7Y34VhGv2'),
    programs: {
        keeper: new PublicKey('BnHCabsYvwUPEkd22RMbk2y5g8XSgbhU435yGVik12vc'),
        stake: new PublicKey('HcKTgUbL976hsP7ie2LYLC92DFWcE6z4LSnjshC6hgcF'),
    },
    mint: new PublicKey('7Z7FPs9tM3k9zVyWuKCfJ8g4D54qaKTdx942hkxc7qii'),
    rewardMint: new PublicKey('DKgvB5LHdG7DUreqER5vNzySDwZfqzMamxe2KBTNqZgq'),
}
