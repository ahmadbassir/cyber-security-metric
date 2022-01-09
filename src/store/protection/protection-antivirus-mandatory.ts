import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum ProtectionAntivirusMandatoryActionType {
    SET_PROTECTION_ANTIVIRUS_MANDATORY = 'SET_PROTECTION_ANTIVIRUS_MANDATORY'
}

interface SetProtectionAntivirusMandatoryAction {
    type: ProtectionAntivirusMandatoryActionType.SET_PROTECTION_ANTIVIRUS_MANDATORY
    payload: YesNoNotSure
}

type ProtectionAntivirusMandatoryAction = SetProtectionAntivirusMandatoryAction

const defaultProtectionAntivirusMandatory = YesNoNotSure.NOT_SURE

const protectionAntivirusMandatory: Reducer<YesNoNotSure, ProtectionAntivirusMandatoryAction> = (state = defaultProtectionAntivirusMandatory, action: ProtectionAntivirusMandatoryAction) => {
    switch (action.type) {
        case ProtectionAntivirusMandatoryActionType.SET_PROTECTION_ANTIVIRUS_MANDATORY:
            return action.payload
        default:
            return state
    }
}

const setProtectionAntivirusMandatory = (protectionAntivirusMandatory: YesNoNotSure) => ({
    type: ProtectionAntivirusMandatoryActionType.SET_PROTECTION_ANTIVIRUS_MANDATORY,
    payload: protectionAntivirusMandatory
})

function selectProtectionAntivirusMandatoryScore(storeState: StoreState): number {
    switch (storeState.protectionAntivirusMandatory) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {protectionAntivirusMandatory, setProtectionAntivirusMandatory, selectProtectionAntivirusMandatoryScore}
