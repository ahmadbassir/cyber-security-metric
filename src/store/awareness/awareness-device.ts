import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum AwarenessDeviceActionType {
    SET_AWARENESS_DEVICE = 'SET_AWARENESS_DEVICE'
}

interface SetAwarenessDeviceAction {
    type: AwarenessDeviceActionType.SET_AWARENESS_DEVICE
    payload: YesNoNotSure
}

type AwarenessDeviceAction = SetAwarenessDeviceAction

const defaultAwarenessDevice = YesNoNotSure.NOT_SURE

const awarenessDevice: Reducer<YesNoNotSure, AwarenessDeviceAction> = (state = defaultAwarenessDevice, action: AwarenessDeviceAction) => {
    switch (action.type) {
        case AwarenessDeviceActionType.SET_AWARENESS_DEVICE:
            return action.payload
        default:
            return state
    }
}

const setAwarenessDevice = (awarenessDevice: YesNoNotSure) => ({
    type: AwarenessDeviceActionType.SET_AWARENESS_DEVICE,
    payload: awarenessDevice
})

export {awarenessDevice, setAwarenessDevice}
