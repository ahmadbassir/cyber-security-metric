import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectAttacksDifferentiateScore(storeState: StoreState): number {
    return (storeState.attacksDifferentiate === YesNoNotSure.YES) ? 10 : 0
}

export {selectAttacksDifferentiateScore}
