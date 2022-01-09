import {IdsIpsNone} from '../intrusion-ids-ips'
import {StoreState} from '../../index'
import { YesNoNotSure } from '../../../components/yes-no-not-sure-radios'

function selectIntrusionScore(storeState: StoreState): number {
    let systemScore

    if (storeState.intrusionIdsIps === IdsIpsNone.IDS) {
        const idsReactionTime = storeState.intrusionIdsReactionTime

        let idsReactionTimeScore

        if (idsReactionTime <= 60) {
            idsReactionTimeScore = 10
        } else if (idsReactionTime <= 90) {
            idsReactionTimeScore = 9
        } else if (idsReactionTime <= 120) {
            idsReactionTimeScore = 8
        } else if (idsReactionTime <= 150) {
            idsReactionTimeScore = 7
        } else if (idsReactionTime <= 180) {
            idsReactionTimeScore = 6
        } else if (idsReactionTime <= 240) {
            idsReactionTimeScore = 5
        } else if (idsReactionTime <= 300) {
            idsReactionTimeScore = 4
        } else if (idsReactionTime <= 360) {
            idsReactionTimeScore = 3
        } else if (idsReactionTime <= 420) {
            idsReactionTimeScore = 2
        } else if (idsReactionTime <= 480) {
            idsReactionTimeScore = 1
        } else {
            idsReactionTimeScore = 0
        }

        systemScore = (10 + idsReactionTimeScore) / 2

    } else if (storeState.intrusionIdsIps === IdsIpsNone.IPS) {
        systemScore = 10
    } else {
        systemScore = 0
    }

    const inHouseScore = storeState.intrusionInHouse === YesNoNotSure.YES ? 10 : 0

    return (systemScore + inHouseScore) / 2
}

export {selectIntrusionScore}
