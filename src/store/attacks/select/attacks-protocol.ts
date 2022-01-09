import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectAttacksProtocolScore(storeState: StoreState): number {
    return (storeState.attacksProtocol === YesNoNotSure.YES) ? 10 : 0
}

export {selectAttacksProtocolScore}
