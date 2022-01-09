import {StoreState} from '../../index'

function selectUnauthorizedAccessScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectUnauthorizedAccessScore}
