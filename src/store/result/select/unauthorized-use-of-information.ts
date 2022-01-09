import {StoreState} from '../../index'

function selectUnauthorizedUseOfInformationScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectUnauthorizedUseOfInformationScore}
