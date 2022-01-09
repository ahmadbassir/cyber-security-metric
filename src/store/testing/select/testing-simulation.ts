import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectTestingSimulationScore(storeState: StoreState): number {
    return (storeState.testingSimulation === YesNoNotSure.YES) ? 10 : 0
}

export {selectTestingSimulationScore}
