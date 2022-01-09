import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectAttacksHoneypotUsedScore(storeState: StoreState): number {
    return (storeState.attacksHoneypotUsed === YesNoNotSure.YES) ? 10 : 0
}

export {selectAttacksHoneypotUsedScore}
