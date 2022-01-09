import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum AttacksHoneypotUsedActionType {
    SET_ATTACKS_HONEYPOT_USED = 'SET_ATTACKS_HONEYPOT_USED'
}

interface SetAttacksHoneypotUsedAction {
    type: AttacksHoneypotUsedActionType.SET_ATTACKS_HONEYPOT_USED
    payload: YesNoNotSure
}

type AttacksHoneypotUsedAction = SetAttacksHoneypotUsedAction

const defaultAttacksHoneypotUsed = YesNoNotSure.NOT_SURE

const attacksHoneypotUsed: Reducer<YesNoNotSure, AttacksHoneypotUsedAction> = (state = defaultAttacksHoneypotUsed, action: AttacksHoneypotUsedAction) => {
    switch (action.type) {
        case AttacksHoneypotUsedActionType.SET_ATTACKS_HONEYPOT_USED:
            return action.payload
        default:
            return state
    }
}

const setAttacksHoneypotUsed = (attacksHoneypotUsed: YesNoNotSure) => ({
    type: AttacksHoneypotUsedActionType.SET_ATTACKS_HONEYPOT_USED,
    payload: attacksHoneypotUsed
})

export {attacksHoneypotUsed, setAttacksHoneypotUsed}
