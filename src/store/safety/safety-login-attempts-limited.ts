import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum SafetyLoginAttemptsLimitedActionType {
    SET_SAFETY_LOGIN_ATTEMPTS_LIMITED = 'SET_SAFETY_LOGIN_ATTEMPTS_LIMITED'
}

interface SetSafetyLoginAttemptsLimitedAction {
    type: SafetyLoginAttemptsLimitedActionType.SET_SAFETY_LOGIN_ATTEMPTS_LIMITED
    payload: YesNoNotSure
}

type SafetyLoginAttemptsLimitedAction = SetSafetyLoginAttemptsLimitedAction

const defaultSafetyLoginAttemptsLimited = YesNoNotSure.NOT_SURE

const safetyLoginAttemptsLimited: Reducer<YesNoNotSure, SafetyLoginAttemptsLimitedAction> = (state = defaultSafetyLoginAttemptsLimited, action: SafetyLoginAttemptsLimitedAction) => {
    switch (action.type) {
        case SafetyLoginAttemptsLimitedActionType.SET_SAFETY_LOGIN_ATTEMPTS_LIMITED:
            return action.payload
        default:
            return state
    }
}

const setSafetyLoginAttemptsLimited = (safetyLoginAttemptsLimited: YesNoNotSure) => ({
    type: SafetyLoginAttemptsLimitedActionType.SET_SAFETY_LOGIN_ATTEMPTS_LIMITED,
    payload: safetyLoginAttemptsLimited
})

export {safetyLoginAttemptsLimited, setSafetyLoginAttemptsLimited}
