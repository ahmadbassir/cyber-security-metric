import {StoreState} from '../../index'

function selectVulnerableSystemScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectVulnerableSystemScore}
