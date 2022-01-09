import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum AwarenessTrainingActionType {
    SET_AWARENESS_TRAINING = 'SET_AWARENESS_TRAINING'
}

interface SetAwarenessTrainingAction {
    type: AwarenessTrainingActionType.SET_AWARENESS_TRAINING
    payload: YesNoNotSure
}

type AwarenessTrainingAction = SetAwarenessTrainingAction

const defaultAwarenessTraining = YesNoNotSure.NOT_SURE

const awarenessTraining: Reducer<YesNoNotSure, AwarenessTrainingAction> = (state = defaultAwarenessTraining, action: AwarenessTrainingAction) => {
    switch (action.type) {
        case AwarenessTrainingActionType.SET_AWARENESS_TRAINING:
            return action.payload
        default:
            return state
    }
}

const setAwarenessTraining = (awarenessTraining: YesNoNotSure) => ({
    type: AwarenessTrainingActionType.SET_AWARENESS_TRAINING,
    payload: awarenessTraining
})

export {awarenessTraining, setAwarenessTraining}
