import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HardwareInformationScreenLockActionType {
    SET_HARDWARE_INFORMATION_SCREEN_LOCK = 'SET_HARDWARE_INFORMATION_SCREEN_LOCK'
}

interface SetHardwareInformationScreenLockAction {
    type: HardwareInformationScreenLockActionType.SET_HARDWARE_INFORMATION_SCREEN_LOCK
    payload: YesNoNotSure
}

type HardwareInformationScreenLockAction = SetHardwareInformationScreenLockAction

const defaultHardwareInformationScreenLock = YesNoNotSure.NOT_SURE

const hardwareInformationScreenLock: Reducer<YesNoNotSure, HardwareInformationScreenLockAction> = (state = defaultHardwareInformationScreenLock, action: HardwareInformationScreenLockAction) => {
    switch (action.type) {
        case HardwareInformationScreenLockActionType.SET_HARDWARE_INFORMATION_SCREEN_LOCK:
            return action.payload
        default:
            return state
    }
}

const setHardwareInformationScreenLock = (hardwareInformationScreenLock: YesNoNotSure) => ({
    type: HardwareInformationScreenLockActionType.SET_HARDWARE_INFORMATION_SCREEN_LOCK,
    payload: hardwareInformationScreenLock
})

export {hardwareInformationScreenLock, setHardwareInformationScreenLock}
