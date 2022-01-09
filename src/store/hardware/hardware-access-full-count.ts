import {Reducer} from 'redux'

enum HardwareAccessFullCountActionType {
    SET_HARDWARE_ACCESS_FULL_COUNT = 'SET_HARDWARE_ACCESS_FULL_COUNT'
}

interface SetHardwareAccessFullCountAction {
    type: HardwareAccessFullCountActionType.SET_HARDWARE_ACCESS_FULL_COUNT
    payload: number
}

type HardwareAccessFullCountAction = SetHardwareAccessFullCountAction

const defaultHardwareAccessFullCount = 1

const hardwareAccessFullCount: Reducer<number, HardwareAccessFullCountAction> = (state = defaultHardwareAccessFullCount, action: HardwareAccessFullCountAction) => {
    switch (action.type) {
        case HardwareAccessFullCountActionType.SET_HARDWARE_ACCESS_FULL_COUNT:
            return action.payload
        default:
            return state
    }
}

const setHardwareAccessFullCount = (hardwareAccessFullCount: number) => ({
    type: HardwareAccessFullCountActionType.SET_HARDWARE_ACCESS_FULL_COUNT,
    payload: hardwareAccessFullCount
})

export {hardwareAccessFullCount, setHardwareAccessFullCount}
