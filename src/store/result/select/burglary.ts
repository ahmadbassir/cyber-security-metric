import {StoreState} from '../../index'

function selectBurglaryScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectBurglaryScore}
