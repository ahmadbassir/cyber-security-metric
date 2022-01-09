import {StoreState} from '../../index'
import {selectAttacksDifferentiateScore} from './attacks-differentiate'
import {selectAttacksHoneypotUsedScore} from './attacks-honeypot-used'
import {selectAttacksProtocolScore} from './attacks-protocol'
import {selectAttacksProtocolUpdatedScore} from './attacks-protocol-updated'
import {selectAttacksQuarantineZoneScore} from './attacks-quarantine-zone'

function selectAttacksScore(storeState: StoreState): number {
    const differentiateScore = selectAttacksDifferentiateScore(storeState)
    const honeypotUsedScore = selectAttacksHoneypotUsedScore(storeState)
    const protocolScore = selectAttacksProtocolScore(storeState)
    const protocolUpdatedScore = selectAttacksProtocolUpdatedScore(storeState)
    const quarantineZoneScore = selectAttacksQuarantineZoneScore(storeState)

    return (
        0.35 * protocolScore +
        0.21 * protocolUpdatedScore +
        0.14 * differentiateScore +
        0.2 * quarantineZoneScore +
        0.1 * honeypotUsedScore
    )
}

export {selectAttacksScore}
