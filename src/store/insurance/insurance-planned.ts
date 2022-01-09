import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InsurancePlannedActionType {
    SET_INSURANCE_PLANNED = 'SET_INSURANCE_PLANNED'
}

interface SetInsurancePlannedAction {
    type: InsurancePlannedActionType.SET_INSURANCE_PLANNED
    payload: YesNoNotSure
}

type InsurancePlannedAction = SetInsurancePlannedAction

const defaultInsurancePlanned = YesNoNotSure.NOT_SURE

const insurancePlanned: Reducer<YesNoNotSure, InsurancePlannedAction> = (state = defaultInsurancePlanned, action: InsurancePlannedAction) => {
    switch (action.type) {
        case InsurancePlannedActionType.SET_INSURANCE_PLANNED:
            return action.payload
        default:
            return state
    }
}

const setInsurancePlanned = (insurancePlanned: YesNoNotSure) => ({
    type: InsurancePlannedActionType.SET_INSURANCE_PLANNED,
    payload: insurancePlanned
})

export {insurancePlanned, setInsurancePlanned}
