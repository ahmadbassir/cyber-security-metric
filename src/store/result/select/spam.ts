import {StoreState} from '../../index'

function selectSpamScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectSpamScore}
