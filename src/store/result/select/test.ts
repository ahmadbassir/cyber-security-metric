import {StoreState} from '../../index'
import {selectTestingScore} from '../../testing/select/testing'

function selectTestScore(storeState: StoreState): number {
    return selectTestingScore(storeState)
}

export {selectTestScore}
