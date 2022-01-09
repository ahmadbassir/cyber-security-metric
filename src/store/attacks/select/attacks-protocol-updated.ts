import {StoreState} from '../../index'

function selectAttacksProtocolUpdatedScore(storeState: StoreState): number {
    const protocolUpdated = storeState.attacksProtocolUpdated

    return (protocolUpdated <= 11) ? 11 - protocolUpdated : 0
}

export {selectAttacksProtocolUpdatedScore}
