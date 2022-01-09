import {StoreState} from '../../index'

function selectLoginAttemptsScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectLoginAttemptsScore}
