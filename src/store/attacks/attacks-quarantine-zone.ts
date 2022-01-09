import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum AttacksQuarantineZoneActionType {
    SET_ATTACKS_QUARANTINE_ZONE = 'SET_ATTACKS_QUARANTINE_ZONE'
}

interface SetAttacksQuarantineZoneAction {
    type: AttacksQuarantineZoneActionType.SET_ATTACKS_QUARANTINE_ZONE
    payload: YesNoNotSure
}

type AttacksQuarantineZoneAction = SetAttacksQuarantineZoneAction

const defaultAttacksQuarantineZone = YesNoNotSure.NOT_SURE

const attacksQuarantineZone: Reducer<YesNoNotSure, AttacksQuarantineZoneAction> = (state = defaultAttacksQuarantineZone, action: AttacksQuarantineZoneAction) => {
    switch (action.type) {
        case AttacksQuarantineZoneActionType.SET_ATTACKS_QUARANTINE_ZONE:
            return action.payload
        default:
            return state
    }
}

const setAttacksQuarantineZone = (attacksQuarantineZone: YesNoNotSure) => ({
    type: AttacksQuarantineZoneActionType.SET_ATTACKS_QUARANTINE_ZONE,
    payload: attacksQuarantineZone
})

export {attacksQuarantineZone, setAttacksQuarantineZone}
