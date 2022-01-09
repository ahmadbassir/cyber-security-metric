import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HardwareInformationRemoteLockActionType {
    SET_HARDWARE_INFORMATION_REMOTE_LOCK = 'SET_HARDWARE_INFORMATION_REMOTE_LOCK'
}

interface SetHardwareInformationRemoteLockAction {
    type: HardwareInformationRemoteLockActionType.SET_HARDWARE_INFORMATION_REMOTE_LOCK
    payload: YesNoNotSure
}

type HardwareInformationRemoteLockAction = SetHardwareInformationRemoteLockAction

const defaultHardwareInformationRemoteLock = YesNoNotSure.NOT_SURE

const hardwareInformationRemoteLock: Reducer<YesNoNotSure, HardwareInformationRemoteLockAction> = (state = defaultHardwareInformationRemoteLock, action: HardwareInformationRemoteLockAction) => {
    switch (action.type) {
        case HardwareInformationRemoteLockActionType.SET_HARDWARE_INFORMATION_REMOTE_LOCK:
            return action.payload
        default:
            return state
    }
}

const setHardwareInformationRemoteLock = (hardwareInformationRemoteLock: YesNoNotSure) => ({
    type: HardwareInformationRemoteLockActionType.SET_HARDWARE_INFORMATION_REMOTE_LOCK,
    payload: hardwareInformationRemoteLock
})

export {hardwareInformationRemoteLock, setHardwareInformationRemoteLock}
