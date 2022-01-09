import {StoreState} from '../../index'

function selectSniffingScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectSniffingScore}
