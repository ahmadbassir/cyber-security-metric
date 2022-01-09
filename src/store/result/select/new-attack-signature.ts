import {StoreState} from '../../index'

function selectNewAttackSignatureScore(storeState: StoreState): number {
    return Math.random() * 10
}

export {selectNewAttackSignatureScore}
