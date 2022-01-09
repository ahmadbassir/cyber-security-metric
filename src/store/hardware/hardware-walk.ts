import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HardwareWalkActionType {
    SET_HARDWARE_WALK = 'SET_HARDWARE_WALK'
}

interface SetHardwareWalkAction {
    type: HardwareWalkActionType.SET_HARDWARE_WALK
    payload: YesNoNotSure
}

type HardwareWalkAction = SetHardwareWalkAction

const defaultHardwareWalk = YesNoNotSure.NOT_SURE

const hardwareWalk: Reducer<YesNoNotSure, HardwareWalkAction> = (state = defaultHardwareWalk, action: HardwareWalkAction) => {
    switch (action.type) {
        case HardwareWalkActionType.SET_HARDWARE_WALK:
            return action.payload
        default:
            return state
    }
}

const setHardwareWalk = (hardwareWalk: YesNoNotSure) => ({
    type: HardwareWalkActionType.SET_HARDWARE_WALK,
    payload: hardwareWalk
})

export {hardwareWalk, setHardwareWalk}
