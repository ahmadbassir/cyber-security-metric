import {StoreState} from '../../index'

function selectLeakOfConfidentialInformationScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectLeakOfConfidentialInformationScore}
