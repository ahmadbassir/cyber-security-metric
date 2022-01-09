import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InfrastructurePenetrationActionType {
    SET_INFRASTRUCTURE_PENETRATION = 'SET_INFRASTRUCTURE_PENETRATION'
}

interface SetInfrastructurePenetrationAction {
    type: InfrastructurePenetrationActionType.SET_INFRASTRUCTURE_PENETRATION
    payload: YesNoNotSure
}

type InfrastructurePenetrationAction = SetInfrastructurePenetrationAction

const defaultInfrastructurePenetration = YesNoNotSure.NOT_SURE

const infrastructurePenetration: Reducer<YesNoNotSure, InfrastructurePenetrationAction> = (state = defaultInfrastructurePenetration, action: InfrastructurePenetrationAction) => {
    switch (action.type) {
        case InfrastructurePenetrationActionType.SET_INFRASTRUCTURE_PENETRATION:
            return action.payload
        default:
            return state
    }
}

const setInfrastructurePenetration = (infrastructurePenetration: YesNoNotSure) => ({
    type: InfrastructurePenetrationActionType.SET_INFRASTRUCTURE_PENETRATION,
    payload: infrastructurePenetration
})

function selectInfrastructurePenetrationScore(storeState: StoreState): number {
    switch (storeState.infrastructurePenetration) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {infrastructurePenetration, setInfrastructurePenetration, selectInfrastructurePenetrationScore}
