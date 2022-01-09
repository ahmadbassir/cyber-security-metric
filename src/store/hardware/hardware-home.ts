import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HardwareHomeActionType {
    SET_HARDWARE_HOME = 'SET_HARDWARE_HOME'
}

interface SetHardwareHomeAction {
    type: HardwareHomeActionType.SET_HARDWARE_HOME
    payload: YesNoNotSure
}

type HardwareHomeAction = SetHardwareHomeAction

const defaultHardwareHome = YesNoNotSure.NOT_SURE

const hardwareHome: Reducer<YesNoNotSure, HardwareHomeAction> = (state = defaultHardwareHome, action: HardwareHomeAction) => {
    switch (action.type) {
        case HardwareHomeActionType.SET_HARDWARE_HOME:
            return action.payload
        default:
            return state
    }
}

const setHardwareHome = (hardwareHome: YesNoNotSure) => ({
    type: HardwareHomeActionType.SET_HARDWARE_HOME,
    payload: hardwareHome
})

export {hardwareHome, setHardwareHome}
