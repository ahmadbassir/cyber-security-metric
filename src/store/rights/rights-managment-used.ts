import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum RightsManagementUsedActionType {
    SET_RIGHTS_MANAGEMENT_USED = 'SET_RIGHTS_MANAGEMENT_USED'
}

interface SetRightsManagementUsedAction {
    type: RightsManagementUsedActionType.SET_RIGHTS_MANAGEMENT_USED
    payload: YesNoNotSure
}

type RightsManagementUsedAction = SetRightsManagementUsedAction

const defaultRightsManagementUsed = YesNoNotSure.NOT_SURE

const rightsManagementUsed: Reducer<YesNoNotSure, RightsManagementUsedAction> = (state = defaultRightsManagementUsed, action: RightsManagementUsedAction) => {
    switch (action.type) {
        case RightsManagementUsedActionType.SET_RIGHTS_MANAGEMENT_USED:
            return action.payload
        default:
            return state
    }
}

const setRightsManagementUsed = (rightsManagementUsed: YesNoNotSure) => ({
    type: RightsManagementUsedActionType.SET_RIGHTS_MANAGEMENT_USED,
    payload: rightsManagementUsed
})

function selectRightsManagementUsedScore(storeState: StoreState): number {
    switch (storeState.rightsManagementUsed) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {rightsManagementUsed, setRightsManagementUsed, selectRightsManagementUsedScore}
