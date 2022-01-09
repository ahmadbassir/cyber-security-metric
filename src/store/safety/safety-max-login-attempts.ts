import {Reducer} from 'redux'

enum SafetyMaxLoginAttemptsActionType {
    SET_SAFETY_MAX_LOGIN_ATTEMPTS = 'SET_SAFETY_MAX_LOGIN_ATTEMPTS'
}

interface SetSafetyMaxLoginAttemptsAction {
    type: SafetyMaxLoginAttemptsActionType.SET_SAFETY_MAX_LOGIN_ATTEMPTS
    payload: number
}

type SafetyMaxLoginAttemptsAction = SetSafetyMaxLoginAttemptsAction

const defaultSafetyMaxLoginAttempts = 1

const safetyMaxLoginAttempts: Reducer<number, SafetyMaxLoginAttemptsAction> = (state = defaultSafetyMaxLoginAttempts, action: SafetyMaxLoginAttemptsAction) => {
    switch (action.type) {
        case SafetyMaxLoginAttemptsActionType.SET_SAFETY_MAX_LOGIN_ATTEMPTS:
            return action.payload
        default:
            return state
    }
}

const setSafetyMaxLoginAttempts = (safetyMaxLoginAttempts: number) => ({
    type: SafetyMaxLoginAttemptsActionType.SET_SAFETY_MAX_LOGIN_ATTEMPTS,
    payload: safetyMaxLoginAttempts
})

export {safetyMaxLoginAttempts, setSafetyMaxLoginAttempts}
