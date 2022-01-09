import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectHistoryCurrentScore(storeState: StoreState): number {
    const reviewsScore = storeState.historyCurrentReviews === YesNoNotSure.YES ? 10 : 0
    const punishmentScore = storeState.historyCurrentPunishment === YesNoNotSure.YES ? 10 : 0

    return (reviewsScore + punishmentScore) / 2
}

export {selectHistoryCurrentScore}
