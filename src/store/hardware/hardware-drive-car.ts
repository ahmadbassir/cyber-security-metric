import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HardwareDriveCarActionType {
    SET_HARDWARE_DRIVE_CAR = 'SET_HARDWARE_DRIVE_CAR'
}

interface SetHardwareDriveCarAction {
    type: HardwareDriveCarActionType.SET_HARDWARE_DRIVE_CAR
    payload: YesNoNotSure
}

type HardwareDriveCarAction = SetHardwareDriveCarAction

const defaultHardwareDriveCar = YesNoNotSure.NOT_SURE

const hardwareDriveCar: Reducer<YesNoNotSure, HardwareDriveCarAction> = (state = defaultHardwareDriveCar, action: HardwareDriveCarAction) => {
    switch (action.type) {
        case HardwareDriveCarActionType.SET_HARDWARE_DRIVE_CAR:
            return action.payload
        default:
            return state
    }
}

const setHardwareDriveCar = (hardwareDriveCar: YesNoNotSure) => ({
    type: HardwareDriveCarActionType.SET_HARDWARE_DRIVE_CAR,
    payload: hardwareDriveCar
})

export {hardwareDriveCar, setHardwareDriveCar}
