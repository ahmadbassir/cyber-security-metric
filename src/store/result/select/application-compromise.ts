import {StoreState} from '../../index'

function selectApplicationCompromiseScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectApplicationCompromiseScore}
