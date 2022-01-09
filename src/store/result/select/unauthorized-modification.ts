import {StoreState} from '../../index'

function selectUnauthorizedModificationScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectUnauthorizedModificationScore}
