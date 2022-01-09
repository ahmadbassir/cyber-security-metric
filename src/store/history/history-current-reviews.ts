import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HistoryCurrentReviewsActionType {
    SET_HISTORY_CURRENT_REVIEWS = 'SET_HISTORY_CURRENT_REVIEWS'
}

interface SetHistoryCurrentReviewsAction {
    type: HistoryCurrentReviewsActionType.SET_HISTORY_CURRENT_REVIEWS
    payload: YesNoNotSure
}

type HistoryCurrentReviewsAction = SetHistoryCurrentReviewsAction

const defaultHistoryCurrentReviews = YesNoNotSure.NOT_SURE

const historyCurrentReviews: Reducer<YesNoNotSure, HistoryCurrentReviewsAction> = (state = defaultHistoryCurrentReviews, action: HistoryCurrentReviewsAction) => {
    switch (action.type) {
        case HistoryCurrentReviewsActionType.SET_HISTORY_CURRENT_REVIEWS:
            return action.payload
        default:
            return state
    }
}

const setHistoryCurrentReviews = (historyCurrentReviews: YesNoNotSure) => ({
    type: HistoryCurrentReviewsActionType.SET_HISTORY_CURRENT_REVIEWS,
    payload: historyCurrentReviews
})

export {historyCurrentReviews, setHistoryCurrentReviews}
