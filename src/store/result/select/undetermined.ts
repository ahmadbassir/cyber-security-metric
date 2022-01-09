import {StoreState} from '../../index'

function selectUndeterminedScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectUndeterminedScore}
