import {StoreState} from '../../index'

function selectUnprivilegedAccountCompromiseScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectUnprivilegedAccountCompromiseScore}
