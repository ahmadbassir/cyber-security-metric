import {Reducer} from 'redux'
import {StoreState} from '../index'

enum IdsIpsNone {
    IDS = 'IDS',
    IPS = 'IPS',
    NONE = 'NONE'
}

enum IntrusionIdsIpsActionType {
    SET_INTRUSION_IDS_IPS = 'SET_INTRUSION_IDS_IPS'
}

interface SetIntrusionIdsIpsAction {
    type: IntrusionIdsIpsActionType.SET_INTRUSION_IDS_IPS
    payload: IdsIpsNone
}

type IntrusionIdsIpsAction = SetIntrusionIdsIpsAction

const defaultIntrusionIdsIps = IdsIpsNone.NONE

const intrusionIdsIps: Reducer<IdsIpsNone, IntrusionIdsIpsAction> = (state = defaultIntrusionIdsIps, action: IntrusionIdsIpsAction) => {
    switch (action.type) {
        case IntrusionIdsIpsActionType.SET_INTRUSION_IDS_IPS:
            return action.payload
        default:
            return state
    }
}

const setIntrusionIdsIps = (intrusionIdsIps: IdsIpsNone) => ({
    type: IntrusionIdsIpsActionType.SET_INTRUSION_IDS_IPS,
    payload: intrusionIdsIps
})

export {IdsIpsNone, intrusionIdsIps, setIntrusionIdsIps}
