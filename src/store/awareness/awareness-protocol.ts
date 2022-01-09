import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum AwarenessProtocolActionType {
    SET_AWARENESS_PROTOCOL = 'SET_AWARENESS_PROTOCOL'
}

interface SetAwarenessProtocolAction {
    type: AwarenessProtocolActionType.SET_AWARENESS_PROTOCOL
    payload: YesNoNotSure
}

type AwarenessProtocolAction = SetAwarenessProtocolAction

const defaultAwarenessProtocol = YesNoNotSure.NOT_SURE

const awarenessProtocol: Reducer<YesNoNotSure, AwarenessProtocolAction> = (state = defaultAwarenessProtocol, action: AwarenessProtocolAction) => {
    switch (action.type) {
        case AwarenessProtocolActionType.SET_AWARENESS_PROTOCOL:
            return action.payload
        default:
            return state
    }
}

const setAwarenessProtocol = (awarenessProtocol: YesNoNotSure) => ({
    type: AwarenessProtocolActionType.SET_AWARENESS_PROTOCOL,
    payload: awarenessProtocol
})

export {awarenessProtocol, setAwarenessProtocol}
