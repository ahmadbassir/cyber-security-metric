import {StoreState} from '../../index'

function selectInformationDisclosureScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectInformationDisclosureScore}
