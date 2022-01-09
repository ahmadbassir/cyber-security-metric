import {StoreState} from '../../index'

function selectWeakCryptographyScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectWeakCryptographyScore}
