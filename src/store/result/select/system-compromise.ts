import {StoreState} from '../../index'

function selectSystemCompromiseScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectSystemCompromiseScore}
