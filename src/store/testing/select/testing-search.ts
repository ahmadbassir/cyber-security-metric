import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectTestingSearchScore(storeState: StoreState): number {
    return (storeState.testingSearch === YesNoNotSure.YES) ? 10 : 0
}

export {selectTestingSearchScore}
