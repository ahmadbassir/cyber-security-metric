import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectAttacksQuarantineZoneScore(storeState: StoreState): number {
    return (storeState.attacksQuarantineZone === YesNoNotSure.YES) ? 10 : 0
}

export {selectAttacksQuarantineZoneScore}
