import {StoreState} from '../../index'

function selectPrivilegedAccountCompromiseScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectPrivilegedAccountCompromiseScore}
