import {StoreState} from '../../index'

function selectUnwantedAccessibleServicesScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectUnwantedAccessibleServicesScore}
