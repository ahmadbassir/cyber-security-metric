import {Reducer} from 'redux'

enum AttacksProtocolUpdatedActionType {
    SET_ATTACKS_PROTOCOL_UPDATED = 'SET_ATTACKS_PROTOCOL_UPDATED'
}

interface SetAttacksProtocolUpdatedAction {
    type: AttacksProtocolUpdatedActionType.SET_ATTACKS_PROTOCOL_UPDATED
    payload: number
}

type AttacksProtocolUpdatedAction = SetAttacksProtocolUpdatedAction

const defaultAttacksProtocolUpdated = 1

const attacksProtocolUpdated: Reducer<number, AttacksProtocolUpdatedAction> = (state = defaultAttacksProtocolUpdated, action: AttacksProtocolUpdatedAction) => {
    switch (action.type) {
        case AttacksProtocolUpdatedActionType.SET_ATTACKS_PROTOCOL_UPDATED:
            return action.payload
        default:
            return state
    }
}

const setAttacksProtocolUpdated = (attacksProtocolUpdated: number) => ({
    type: AttacksProtocolUpdatedActionType.SET_ATTACKS_PROTOCOL_UPDATED,
    payload: attacksProtocolUpdated
})

export {attacksProtocolUpdated, setAttacksProtocolUpdated}
