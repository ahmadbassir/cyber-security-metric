import {StoreState} from '../../index'

function selectDataLossScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectDataLossScore}
