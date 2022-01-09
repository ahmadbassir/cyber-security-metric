import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectAwarenessScore(storeState: StoreState): number {
    const awarenessScores = [
        storeState.awarenessDevice === YesNoNotSure.YES ? 10 : 0,
        storeState.awarenessEmployees === YesNoNotSure.YES ? 10 : 0,
        storeState.awarenessOnboarding === YesNoNotSure.YES ? 10 : 0,
        storeState.awarenessProtocol === YesNoNotSure.YES ? 10 : 0,
        storeState.awarenessTraining === YesNoNotSure.YES ? 10 : 0
    ]

    return awarenessScores.reduce((a, b) => a + b, 0) / awarenessScores.length
}

export {selectAwarenessScore}
