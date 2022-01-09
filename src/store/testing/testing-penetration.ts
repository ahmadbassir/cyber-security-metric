import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum TestingPenetrationActionType {
    SET_TESTING_PENETRATION = 'SET_TESTING_PENETRATION'
}

interface SetTestingPenetrationAction {
    type: TestingPenetrationActionType.SET_TESTING_PENETRATION
    payload: YesNoNotSure
}

type TestingPenetrationAction = SetTestingPenetrationAction

const defaultTestingPenetration = YesNoNotSure.NOT_SURE

const testingPenetration: Reducer<YesNoNotSure, TestingPenetrationAction> = (state = defaultTestingPenetration, action: TestingPenetrationAction) => {
    switch (action.type) {
        case TestingPenetrationActionType.SET_TESTING_PENETRATION:
            return action.payload
        default:
            return state
    }
}

const setTestingPenetration = (testingPenetration: YesNoNotSure) => ({
    type: TestingPenetrationActionType.SET_TESTING_PENETRATION,
    payload: testingPenetration
})

export {testingPenetration, setTestingPenetration}
