import {StoreState} from '../../index'

function selectOutageScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectOutageScore}
