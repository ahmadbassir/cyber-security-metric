import {StoreState} from '../../index'
import {selectHistoryCurrentScore} from './history-current'
import {selectHistoryPastScore} from './history-past'

function selectHistoryScore(storeState: StoreState): number {
    const pastScore = selectHistoryPastScore(storeState)
    const currentScore = selectHistoryCurrentScore(storeState)

    return (pastScore + currentScore) / 2
}

export {selectHistoryScore}
