import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum AwarenessEmployeesActionType {
    SET_AWARENESS_EMPLOYEES = 'SET_AWARENESS_EMPLOYEES'
}

interface SetAwarenessEmployeesAction {
    type: AwarenessEmployeesActionType.SET_AWARENESS_EMPLOYEES
    payload: YesNoNotSure
}

type AwarenessEmployeesAction = SetAwarenessEmployeesAction

const defaultAwarenessEmployees = YesNoNotSure.NOT_SURE

const awarenessEmployees: Reducer<YesNoNotSure, AwarenessEmployeesAction> = (state = defaultAwarenessEmployees, action: AwarenessEmployeesAction) => {
    switch (action.type) {
        case AwarenessEmployeesActionType.SET_AWARENESS_EMPLOYEES:
            return action.payload
        default:
            return state
    }
}

const setAwarenessEmployees = (awarenessEmployees: YesNoNotSure) => ({
    type: AwarenessEmployeesActionType.SET_AWARENESS_EMPLOYEES,
    payload: awarenessEmployees
})

export {awarenessEmployees, setAwarenessEmployees}
