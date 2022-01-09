import {StoreState} from '../../index'
import {selectTestingPenetrationScore} from './testing-penetration'
import {selectTestingSearchScore} from './testing-search'
import {selectTestingSimulationScore} from './testing-simulation'

function selectTestingScore(storeState: StoreState): number {
    const penetrationScore = selectTestingPenetrationScore(storeState)
    const searchScore = selectTestingSearchScore(storeState)
    const simulationScore = selectTestingSimulationScore(storeState)

    return 0.25 * penetrationScore + 0.25 * simulationScore + 0.5 * searchScore
}

export {selectTestingScore}
