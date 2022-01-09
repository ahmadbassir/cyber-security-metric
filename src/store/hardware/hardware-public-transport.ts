import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HardwarePublicTransportActionType {
    SET_HARDWARE_PUBLIC_TRANSPORT = 'SET_HARDWARE_PUBLIC_TRANSPORT'
}

interface SetHardwarePublicTransportAction {
    type: HardwarePublicTransportActionType.SET_HARDWARE_PUBLIC_TRANSPORT
    payload: YesNoNotSure
}

type HardwarePublicTransportAction = SetHardwarePublicTransportAction

const defaultHardwarePublicTransport = YesNoNotSure.NOT_SURE

const hardwarePublicTransport: Reducer<YesNoNotSure, HardwarePublicTransportAction> = (state = defaultHardwarePublicTransport, action: HardwarePublicTransportAction) => {
    switch (action.type) {
        case HardwarePublicTransportActionType.SET_HARDWARE_PUBLIC_TRANSPORT:
            return action.payload
        default:
            return state
    }
}

const setHardwarePublicTransport = (hardwarePublicTransport: YesNoNotSure) => ({
    type: HardwarePublicTransportActionType.SET_HARDWARE_PUBLIC_TRANSPORT,
    payload: hardwarePublicTransport
})

export {hardwarePublicTransport, setHardwarePublicTransport}
