import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectHardwareInformationScore(storeState: StoreState): number {
    const remoteLockScore = storeState.hardwareInformationRemoteLock === YesNoNotSure.YES ? 10 : 0
    const screenLockScore = storeState.hardwareInformationScreenLock === YesNoNotSure.YES ? 10 : 0
    const reviewLockScore = storeState.hardwareInformationReviewLock === YesNoNotSure.YES ? 10 : 0

    return 0.5 * remoteLockScore + 0.25 * screenLockScore + 0.25 * reviewLockScore
}

export {selectHardwareInformationScore}
