import {Reducer} from 'redux'
import {StoreState} from '../index'

enum IntrusionIdsReactionTimeActionType {
    SET_INTRUSION_IDS_REACTION_TIME = 'SET_INTRUSION_IDS_REACTION_TIME'
}

interface SetIntrusionIdsReactionTimeAction {
    type: IntrusionIdsReactionTimeActionType.SET_INTRUSION_IDS_REACTION_TIME
    payload: number
}

type IntrusionIdsReactionTimeAction = SetIntrusionIdsReactionTimeAction

const defaultIntrusionIdsReactionTime = 0

const intrusionIdsReactionTime: Reducer<number, IntrusionIdsReactionTimeAction> = (state = defaultIntrusionIdsReactionTime, action: IntrusionIdsReactionTimeAction) => {
    switch (action.type) {
        case IntrusionIdsReactionTimeActionType.SET_INTRUSION_IDS_REACTION_TIME:
            return action.payload
        default:
            return state
    }
}

const setIntrusionIdsReactionTime = (intrusionIdsReactionTime: number) => ({
    type: IntrusionIdsReactionTimeActionType.SET_INTRUSION_IDS_REACTION_TIME,
    payload: intrusionIdsReactionTime
})

export {intrusionIdsReactionTime, setIntrusionIdsReactionTime}
