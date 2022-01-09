import {StoreState} from '../../index'
import {selectSafetyCaptchasScore} from './safety-captchas'
import {selectSafetyLoginAttemptsScore} from './safety-login-attempts'
import {selectSafetyMfaScore} from './safety-mfa'

function selectSafetyScore(storeState: StoreState): number {
    const loginAttemptsScore = selectSafetyLoginAttemptsScore(storeState)
    const captchasScore = selectSafetyCaptchasScore(storeState)
    const mfaScore = selectSafetyMfaScore(storeState)

    return 0.3 * loginAttemptsScore + 0.1 * captchasScore + 0.6 * mfaScore
}

export {selectSafetyScore}
