import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InfrastructureDepartmentExistsActionType {
    SET_INFRASTRUCTURE_DEPARTMENT_EXISTS = 'SET_INFRASTRUCTURE_DEPARTMENT_EXISTS'
}

interface SetInfrastructureDepartmentExistsAction {
    type: InfrastructureDepartmentExistsActionType.SET_INFRASTRUCTURE_DEPARTMENT_EXISTS
    payload: YesNoNotSure
}

type InfrastructureDepartmentExistsAction = SetInfrastructureDepartmentExistsAction

const defaultInfrastructureDepartmentExists = YesNoNotSure.NOT_SURE

const infrastructureDepartmentExists: Reducer<YesNoNotSure, InfrastructureDepartmentExistsAction> = (state = defaultInfrastructureDepartmentExists, action: InfrastructureDepartmentExistsAction) => {
    switch (action.type) {
        case InfrastructureDepartmentExistsActionType.SET_INFRASTRUCTURE_DEPARTMENT_EXISTS:
            return action.payload
        default:
            return state
    }
}

const setInfrastructureDepartmentExists = (infrastructureDepartmentExists: YesNoNotSure) => ({
    type: InfrastructureDepartmentExistsActionType.SET_INFRASTRUCTURE_DEPARTMENT_EXISTS,
    payload: infrastructureDepartmentExists
})

export {infrastructureDepartmentExists, setInfrastructureDepartmentExists}
