import {Reducer} from 'redux'

enum HardwareTrainChangesActionType {
    SET_HARDWARE_TRAIN_CHANGES = 'SET_HARDWARE_TRAIN_CHANGES'
}

interface SetHardwareTrainChangesAction {
    type: HardwareTrainChangesActionType.SET_HARDWARE_TRAIN_CHANGES
    payload: number
}

type HardwareTrainChangesAction = SetHardwareTrainChangesAction

const defaultHardwareTrainChanges = 1

const hardwareTrainChanges: Reducer<number, HardwareTrainChangesAction> = (state = defaultHardwareTrainChanges, action: HardwareTrainChangesAction) => {
    switch (action.type) {
        case HardwareTrainChangesActionType.SET_HARDWARE_TRAIN_CHANGES:
            return action.payload
        default:
            return state
    }
}

const setHardwareTrainChanges = (hardwareTrainChanges: number) => ({
    type: HardwareTrainChangesActionType.SET_HARDWARE_TRAIN_CHANGES,
    payload: hardwareTrainChanges
})

export {hardwareTrainChanges, setHardwareTrainChanges}
