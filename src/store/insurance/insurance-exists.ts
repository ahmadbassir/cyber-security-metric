import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InsuranceExistsActionType {
    SET_INSURANCE_EXISTS = 'SET_INSURANCE_EXISTS'
}

interface SetInsuranceExistsAction {
    type: InsuranceExistsActionType.SET_INSURANCE_EXISTS
    payload: YesNoNotSure
}

type InsuranceExistsAction = SetInsuranceExistsAction

const defaultInsuranceExists = YesNoNotSure.NOT_SURE

const insuranceExists: Reducer<YesNoNotSure, InsuranceExistsAction> = (state = defaultInsuranceExists, action: InsuranceExistsAction) => {
    switch (action.type) {
        case InsuranceExistsActionType.SET_INSURANCE_EXISTS:
            return action.payload
        default:
            return state
    }
}

const setInsuranceExists = (insuranceExists: YesNoNotSure) => ({
    type: InsuranceExistsActionType.SET_INSURANCE_EXISTS,
    payload: insuranceExists
})

export {insuranceExists, setInsuranceExists}
