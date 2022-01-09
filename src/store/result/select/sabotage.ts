import {StoreState} from '../../index'

function selectSabotageScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectSabotageScore}
