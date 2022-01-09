import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum SafetyMfaUsedActionType {
    SET_SAFETY_MFA_USED = 'SET_SAFETY_MFA_USED'
}

interface SetSafetyMfaUsedAction {
    type: SafetyMfaUsedActionType.SET_SAFETY_MFA_USED
    payload: YesNoNotSure
}

type SafetyMfaUsedAction = SetSafetyMfaUsedAction

const defaultSafetyMfaUsed = YesNoNotSure.NOT_SURE

const safetyMfaUsed: Reducer<YesNoNotSure, SafetyMfaUsedAction> = (state = defaultSafetyMfaUsed, action: SafetyMfaUsedAction) => {
    switch (action.type) {
        case SafetyMfaUsedActionType.SET_SAFETY_MFA_USED:
            return action.payload
        default:
            return state
    }
}

const setSafetyMfaUsed = (safetyMfaUsed: YesNoNotSure) => ({
    type: SafetyMfaUsedActionType.SET_SAFETY_MFA_USED,
    payload: safetyMfaUsed
})

export {safetyMfaUsed, setSafetyMfaUsed}
