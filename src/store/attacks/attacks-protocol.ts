import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum AttacksProtocolActionType {
    SET_ATTACKS_PROTOCOL = 'SET_ATTACKS_PROTOCOL'
}

interface SetAttacksProtocolAction {
    type: AttacksProtocolActionType.SET_ATTACKS_PROTOCOL
    payload: YesNoNotSure
}

type AttacksProtocolAction = SetAttacksProtocolAction

const defaultAttacksProtocol = YesNoNotSure.NOT_SURE

const attacksProtocol: Reducer<YesNoNotSure, AttacksProtocolAction> = (state = defaultAttacksProtocol, action: AttacksProtocolAction) => {
    switch (action.type) {
        case AttacksProtocolActionType.SET_ATTACKS_PROTOCOL:
            return action.payload
        default:
            return state
    }
}

const setAttacksProtocol = (attacksProtocol: YesNoNotSure) => ({
    type: AttacksProtocolActionType.SET_ATTACKS_PROTOCOL,
    payload: attacksProtocol
})

export {attacksProtocol, setAttacksProtocol}
