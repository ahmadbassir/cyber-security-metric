import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectSafetyLoginAttemptsScore(storeState: StoreState): number {
    const loginAttemptsLimited = storeState.safetyLoginAttemptsLimited
    const maxLoginAttempts = storeState.safetyMaxLoginAttempts
    const lockTime = storeState.safetyLockTime

    const loginAttemptsLimitedScore = (loginAttemptsLimited === YesNoNotSure.YES) ? 10 : 0

    const maxLoginAttemptsScore = (maxLoginAttempts <= 9)
        ? maxLoginAttempts / 9
        : 9 / maxLoginAttempts

    const lockTimeScore = (lockTime <= 25)
        ? lockTime / 25
        : 25 / lockTime

    return loginAttemptsLimitedScore * (maxLoginAttemptsScore + lockTimeScore) / 2
}

export {selectSafetyLoginAttemptsScore}
