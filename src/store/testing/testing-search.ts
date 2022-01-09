import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum TestingSearchActionType {
    SET_TESTING_SEARCH = 'SET_TESTING_SEARCH'
}

interface SetTestingSearchAction {
    type: TestingSearchActionType.SET_TESTING_SEARCH
    payload: YesNoNotSure
}

type TestingSearchAction = SetTestingSearchAction

const defaultTestingSearch = YesNoNotSure.NOT_SURE

const testingSearch: Reducer<YesNoNotSure, TestingSearchAction> = (state = defaultTestingSearch, action: TestingSearchAction) => {
    switch (action.type) {
        case TestingSearchActionType.SET_TESTING_SEARCH:
            return action.payload
        default:
            return state
    }
}

const setTestingSearch = (testingSearch: YesNoNotSure) => ({
    type: TestingSearchActionType.SET_TESTING_SEARCH,
    payload: testingSearch
})

export {testingSearch, setTestingSearch}
