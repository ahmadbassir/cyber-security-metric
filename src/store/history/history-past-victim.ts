import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HistoryPastVictimActionType {
    SET_HISTORY_PAST_VICTIM = 'SET_HISTORY_PAST_VICTIM'
}

interface SetHistoryPastVictimAction {
    type: HistoryPastVictimActionType.SET_HISTORY_PAST_VICTIM
    payload: YesNoNotSure
}

type HistoryPastVictimAction = SetHistoryPastVictimAction

const defaultHistoryPastVictim = YesNoNotSure.NOT_SURE

const historyPastVictim: Reducer<YesNoNotSure, HistoryPastVictimAction> = (state = defaultHistoryPastVictim, action: HistoryPastVictimAction) => {
    switch (action.type) {
        case HistoryPastVictimActionType.SET_HISTORY_PAST_VICTIM:
            return action.payload
        default:
            return state
    }
}

const setHistoryPastVictim = (historyPastVictim: YesNoNotSure) => ({
    type: HistoryPastVictimActionType.SET_HISTORY_PAST_VICTIM,
    payload: historyPastVictim
})

export {historyPastVictim, setHistoryPastVictim}
