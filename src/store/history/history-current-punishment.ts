import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HistoryCurrentPunishmentActionType {
    SET_HISTORY_CURRENT_PUNISHMENT = 'SET_HISTORY_CURRENT_PUNISHMENT'
}

interface SetHistoryCurrentPunishmentAction {
    type: HistoryCurrentPunishmentActionType.SET_HISTORY_CURRENT_PUNISHMENT
    payload: YesNoNotSure
}

type HistoryCurrentPunishmentAction = SetHistoryCurrentPunishmentAction

const defaultHistoryCurrentPunishment = YesNoNotSure.NOT_SURE

const historyCurrentPunishment: Reducer<YesNoNotSure, HistoryCurrentPunishmentAction> = (state = defaultHistoryCurrentPunishment, action: HistoryCurrentPunishmentAction) => {
    switch (action.type) {
        case HistoryCurrentPunishmentActionType.SET_HISTORY_CURRENT_PUNISHMENT:
            return action.payload
        default:
            return state
    }
}

const setHistoryCurrentPunishment = (historyCurrentPunishment: YesNoNotSure) => ({
    type: HistoryCurrentPunishmentActionType.SET_HISTORY_CURRENT_PUNISHMENT,
    payload: historyCurrentPunishment
})

export {historyCurrentPunishment, setHistoryCurrentPunishment}
