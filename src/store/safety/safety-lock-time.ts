import {Reducer} from 'redux'

enum SafetyLockTimeActionType {
    SET_SAFETY_LOCK_TIME = 'SET_SAFETY_LOCK_TIME'
}

interface SetSafetyLockTimeAction {
    type: SafetyLockTimeActionType.SET_SAFETY_LOCK_TIME
    payload: number
}

type SafetyLockTimeAction = SetSafetyLockTimeAction

const defaultSafetyLockTime = 0

const safetyLockTime: Reducer<number, SafetyLockTimeAction> = (state = defaultSafetyLockTime, action: SafetyLockTimeAction) => {
    switch (action.type) {
        case SafetyLockTimeActionType.SET_SAFETY_LOCK_TIME:
            return action.payload
        default:
            return state
    }
}

const setSafetyLockTime = (safetyLockTime: number) => ({
    type: SafetyLockTimeActionType.SET_SAFETY_LOCK_TIME,
    payload: safetyLockTime
})

export {safetyLockTime, setSafetyLockTime}
