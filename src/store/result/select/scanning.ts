import {StoreState} from '../../index'

function selectScanningScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectScanningScore}
