import {StoreState} from '../../index'

function selectUncategorizedScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectUncategorizedScore}
