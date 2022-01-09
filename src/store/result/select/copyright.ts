import {StoreState} from '../../index'

function selectCopyrightScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectCopyrightScore}
