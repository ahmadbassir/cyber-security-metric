import {StoreState} from '../../index'

function selectHarmfulSpeechScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectHarmfulSpeechScore}
