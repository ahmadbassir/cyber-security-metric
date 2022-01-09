import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum SafetyCaptchasUsedActionType {
    SET_SAFETY_CAPTCHAS_USED = 'SET_SAFETY_CAPTCHAS_USED'
}

interface SetSafetyCaptchasUsedAction {
    type: SafetyCaptchasUsedActionType.SET_SAFETY_CAPTCHAS_USED
    payload: YesNoNotSure
}

type SafetyCaptchasUsedAction = SetSafetyCaptchasUsedAction

const defaultSafetyCaptchasUsed = YesNoNotSure.NOT_SURE

const safetyCaptchasUsed: Reducer<YesNoNotSure, SafetyCaptchasUsedAction> = (state = defaultSafetyCaptchasUsed, action: SafetyCaptchasUsedAction) => {
    switch (action.type) {
        case SafetyCaptchasUsedActionType.SET_SAFETY_CAPTCHAS_USED:
            return action.payload
        default:
            return state
    }
}

const setSafetyCaptchasUsed = (safetyCaptchasUsed: YesNoNotSure) => ({
    type: SafetyCaptchasUsedActionType.SET_SAFETY_CAPTCHAS_USED,
    payload: safetyCaptchasUsed
})

export {safetyCaptchasUsed, setSafetyCaptchasUsed}
