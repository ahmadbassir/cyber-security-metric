import {Reducer} from 'redux'

enum HardwareAccessPhysicalCountActionType {
    SET_HARDWARE_ACCESS_PHYSICAL_COUNT = 'SET_HARDWARE_ACCESS_PHYSICAL_COUNT'
}

interface SetHardwareAccessPhysicalCountAction {
    type: HardwareAccessPhysicalCountActionType.SET_HARDWARE_ACCESS_PHYSICAL_COUNT
    payload: number
}

type HardwareAccessPhysicalCountAction = SetHardwareAccessPhysicalCountAction

const defaultHardwareAccessPhysicalCount = 1

const hardwareAccessPhysicalCount: Reducer<number, HardwareAccessPhysicalCountAction> = (state = defaultHardwareAccessPhysicalCount, action: HardwareAccessPhysicalCountAction) => {
    switch (action.type) {
        case HardwareAccessPhysicalCountActionType.SET_HARDWARE_ACCESS_PHYSICAL_COUNT:
            return action.payload
        default:
            return state
    }
}

const setHardwareAccessPhysicalCount = (hardwareAccessPhysicalCount: number) => ({
    type: HardwareAccessPhysicalCountActionType.SET_HARDWARE_ACCESS_PHYSICAL_COUNT,
    payload: hardwareAccessPhysicalCount
})

export {hardwareAccessPhysicalCount, setHardwareAccessPhysicalCount}
