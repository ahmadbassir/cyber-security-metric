import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InfrastructureDepartmentAnyActionType {
    SET_INFRASTRUCTURE_DEPARTMENT_ANY = 'SET_INFRASTRUCTURE_DEPARTMENT_ANY'
}

interface SetInfrastructureDepartmentAnyAction {
    type: InfrastructureDepartmentAnyActionType.SET_INFRASTRUCTURE_DEPARTMENT_ANY
    payload: YesNoNotSure
}

type InfrastructureDepartmentAnyAction = SetInfrastructureDepartmentAnyAction

const defaultInfrastructureDepartmentAny = YesNoNotSure.NOT_SURE

const infrastructureDepartmentAny: Reducer<YesNoNotSure, InfrastructureDepartmentAnyAction> = (state = defaultInfrastructureDepartmentAny, action: InfrastructureDepartmentAnyAction) => {
    switch (action.type) {
        case InfrastructureDepartmentAnyActionType.SET_INFRASTRUCTURE_DEPARTMENT_ANY:
            return action.payload
        default:
            return state
    }
}

const setInfrastructureDepartmentAny = (infrastructureDepartmentAny: YesNoNotSure) => ({
    type: InfrastructureDepartmentAnyActionType.SET_INFRASTRUCTURE_DEPARTMENT_ANY,
    payload: infrastructureDepartmentAny
})

export {infrastructureDepartmentAny, setInfrastructureDepartmentAny}
