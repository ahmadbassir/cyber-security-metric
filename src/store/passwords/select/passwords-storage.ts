import {StoreState} from '../../index'

function selectPasswordsStorageScore(storeState: StoreState): number {

    let storageLocationSum = 0
    let optionCount = 0

    if (storeState.passwordsStorageManager) {
        storageLocationSum += 10
        optionCount += 1
    }

    if (storeState.passwordsStorageFile) {
        storageLocationSum += 6
        optionCount += 1
    }

    if (storeState.passwordsStoragePhone) {
        storageLocationSum += 3
        optionCount += 1
    }

    if (storeState.passwordsStorageOther) {
        storageLocationSum += 0
        optionCount += 1
    }

    return optionCount === 0 ? 0.0 : storageLocationSum / optionCount
}

export {selectPasswordsStorageScore}
