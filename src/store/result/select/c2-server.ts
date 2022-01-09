import {StoreState} from '../../index'

function selectC2ServerScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectC2ServerScore}
