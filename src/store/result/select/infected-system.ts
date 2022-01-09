import {StoreState} from '../../index'

function selectInfectedSystemScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectInfectedSystemScore}
