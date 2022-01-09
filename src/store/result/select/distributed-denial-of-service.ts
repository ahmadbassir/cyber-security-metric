import {StoreState} from '../../index'

function selectDistributedDenialOfServiceScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectDistributedDenialOfServiceScore}
