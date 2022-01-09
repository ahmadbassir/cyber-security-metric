import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InfrastructureDepartmentExternalActionType {
    SET_INFRASTRUCTURE_DEPARTMENT_EXTERNAL = 'SET_INFRASTRUCTURE_DEPARTMENT_EXTERNAL'
}

interface SetInfrastructureDepartmentExternalAction {
    type: InfrastructureDepartmentExternalActionType.SET_INFRASTRUCTURE_DEPARTMENT_EXTERNAL
    payload: YesNoNotSure
}

type InfrastructureDepartmentExternalAction = SetInfrastructureDepartmentExternalAction

const defaultInfrastructureDepartmentExternal = YesNoNotSure.NOT_SURE

const infrastructureDepartmentExternal: Reducer<YesNoNotSure, InfrastructureDepartmentExternalAction> = (state = defaultInfrastructureDepartmentExternal, action: InfrastructureDepartmentExternalAction) => {
    switch (action.type) {
        case InfrastructureDepartmentExternalActionType.SET_INFRASTRUCTURE_DEPARTMENT_EXTERNAL:
            return action.payload
        default:
            return state
    }
}

const setInfrastructureDepartmentExternal = (infrastructureDepartmentExternal: YesNoNotSure) => ({
    type: InfrastructureDepartmentExternalActionType.SET_INFRASTRUCTURE_DEPARTMENT_EXTERNAL,
    payload: infrastructureDepartmentExternal
})

export {infrastructureDepartmentExternal, setInfrastructureDepartmentExternal}
