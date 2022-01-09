import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum TestingSimulationActionType {
    SET_TESTING_SIMULATION = 'SET_TESTING_SIMULATION'
}

interface SetTestingSimulationAction {
    type: TestingSimulationActionType.SET_TESTING_SIMULATION
    payload: YesNoNotSure
}

type TestingSimulationAction = SetTestingSimulationAction

const defaultTestingSimulation = YesNoNotSure.NOT_SURE

const testingSimulation: Reducer<YesNoNotSure, TestingSimulationAction> = (state = defaultTestingSimulation, action: TestingSimulationAction) => {
    switch (action.type) {
        case TestingSimulationActionType.SET_TESTING_SIMULATION:
            return action.payload
        default:
            return state
    }
}

const setTestingSimulation = (testingSimulation: YesNoNotSure) => ({
    type: TestingSimulationActionType.SET_TESTING_SIMULATION,
    payload: testingSimulation
})

export {testingSimulation, setTestingSimulation}
