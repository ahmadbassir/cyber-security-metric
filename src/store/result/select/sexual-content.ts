import {StoreState} from '../../index'

function selectSexualContentScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectSexualContentScore}
