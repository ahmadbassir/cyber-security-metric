import {StoreState} from '../../index'

function selectSocialEngineeringScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectSocialEngineeringScore}
