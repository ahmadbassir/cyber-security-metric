import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectTestingPenetrationScore(storeState: StoreState): number {
    return (storeState.testingPenetration === YesNoNotSure.YES) ? 10 : 0
}

export {selectTestingPenetrationScore}
