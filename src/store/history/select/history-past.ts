import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectHistoryPastScore(storeState: StoreState): number {
    const victimScore = storeState.historyPastVictim === YesNoNotSure.YES ? 10 : 0
    const changesScore = storeState.historyPastChanges === YesNoNotSure.YES ? 10 : 0

    return (victimScore + changesScore) / 2
}

export {selectHistoryPastScore}
