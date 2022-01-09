import {StoreState} from '../../index'

function selectDdosAmplifierScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectDdosAmplifierScore}
