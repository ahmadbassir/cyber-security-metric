import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InfrastructureSearchActionType {
    SET_INFRASTRUCTURE_SEARCH = 'SET_INFRASTRUCTURE_SEARCH'
}

interface SetInfrastructureSearchAction {
    type: InfrastructureSearchActionType.SET_INFRASTRUCTURE_SEARCH
    payload: YesNoNotSure
}

type InfrastructureSearchAction = SetInfrastructureSearchAction

const defaultInfrastructureSearch = YesNoNotSure.NOT_SURE

const infrastructureSearch: Reducer<YesNoNotSure, InfrastructureSearchAction> = (state = defaultInfrastructureSearch, action: InfrastructureSearchAction) => {
    switch (action.type) {
        case InfrastructureSearchActionType.SET_INFRASTRUCTURE_SEARCH:
            return action.payload
        default:
            return state
    }
}

const setInfrastructureSearch = (infrastructureSearch: YesNoNotSure) => ({
    type: InfrastructureSearchActionType.SET_INFRASTRUCTURE_SEARCH,
    payload: infrastructureSearch
})

function selectInfrastructureSearchScore(storeState: StoreState): number {
    switch (storeState.infrastructureSearch) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {infrastructureSearch, setInfrastructureSearch, selectInfrastructureSearchScore}
