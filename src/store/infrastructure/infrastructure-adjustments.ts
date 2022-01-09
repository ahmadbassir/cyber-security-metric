import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InfrastructureAdjustmentsActionType {
    SET_INFRASTRUCTURE_ADJUSTMENTS = 'SET_INFRASTRUCTURE_ADJUSTMENTS'
}

interface SetInfrastructureAdjustmentsAction {
    type: InfrastructureAdjustmentsActionType.SET_INFRASTRUCTURE_ADJUSTMENTS
    payload: YesNoNotSure
}

type InfrastructureAdjustmentsAction = SetInfrastructureAdjustmentsAction

const defaultInfrastructureAdjustments = YesNoNotSure.NOT_SURE

const infrastructureAdjustments: Reducer<YesNoNotSure, InfrastructureAdjustmentsAction> = (state = defaultInfrastructureAdjustments, action: InfrastructureAdjustmentsAction) => {
    switch (action.type) {
        case InfrastructureAdjustmentsActionType.SET_INFRASTRUCTURE_ADJUSTMENTS:
            return action.payload
        default:
            return state
    }
}

const setInfrastructureAdjustments = (infrastructureAdjustments: YesNoNotSure) => ({
    type: InfrastructureAdjustmentsActionType.SET_INFRASTRUCTURE_ADJUSTMENTS,
    payload: infrastructureAdjustments
})

function selectInfrastructureAdjustmentsScore(storeState: StoreState): number {
    switch (storeState.infrastructureAdjustments) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {infrastructureAdjustments, setInfrastructureAdjustments, selectInfrastructureAdjustmentsScore}
