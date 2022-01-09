import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HistoryPastChangesActionType {
    SET_HISTORY_PAST_CHANGES = 'SET_HISTORY_PAST_CHANGES'
}

interface SetHistoryPastChangesAction {
    type: HistoryPastChangesActionType.SET_HISTORY_PAST_CHANGES
    payload: YesNoNotSure
}

type HistoryPastChangesAction = SetHistoryPastChangesAction

const defaultHistoryPastChanges = YesNoNotSure.NOT_SURE

const historyPastChanges: Reducer<YesNoNotSure, HistoryPastChangesAction> = (state = defaultHistoryPastChanges, action: HistoryPastChangesAction) => {
    switch (action.type) {
        case HistoryPastChangesActionType.SET_HISTORY_PAST_CHANGES:
            return action.payload
        default:
            return state
    }
}

const setHistoryPastChanges = (historyPastChanges: YesNoNotSure) => ({
    type: HistoryPastChangesActionType.SET_HISTORY_PAST_CHANGES,
    payload: historyPastChanges
})

export {historyPastChanges, setHistoryPastChanges}
