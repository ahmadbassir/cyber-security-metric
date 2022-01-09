import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum ProtectionAntivirusUpdatedRegularlyActionType {
    SET_PROTECTION_ANTIVIRUS_UPDATED_REGULARLY = 'SET_PROTECTION_ANTIVIRUS_UPDATED_REGULARLY'
}

interface SetProtectionAntivirusUpdatedRegularlyAction {
    type: ProtectionAntivirusUpdatedRegularlyActionType.SET_PROTECTION_ANTIVIRUS_UPDATED_REGULARLY
    payload: YesNoNotSure
}

type ProtectionAntivirusUpdatedRegularlyAction = SetProtectionAntivirusUpdatedRegularlyAction

const defaultProtectionAntivirusUpdatedRegularly = YesNoNotSure.NOT_SURE

const protectionAntivirusUpdatedRegularly: Reducer<YesNoNotSure, ProtectionAntivirusUpdatedRegularlyAction> = (state = defaultProtectionAntivirusUpdatedRegularly, action: ProtectionAntivirusUpdatedRegularlyAction) => {
    switch (action.type) {
        case ProtectionAntivirusUpdatedRegularlyActionType.SET_PROTECTION_ANTIVIRUS_UPDATED_REGULARLY:
            return action.payload
        default:
            return state
    }
}

const setProtectionAntivirusUpdatedRegularly = (protectionAntivirusUpdatedRegularly: YesNoNotSure) => ({
    type: ProtectionAntivirusUpdatedRegularlyActionType.SET_PROTECTION_ANTIVIRUS_UPDATED_REGULARLY,
    payload: protectionAntivirusUpdatedRegularly
})

function selectProtectionAntivirusUpdatedRegularlyScore(storeState: StoreState): number {
    switch (storeState.protectionAntivirusUpdatedRegularly) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {protectionAntivirusUpdatedRegularly, setProtectionAntivirusUpdatedRegularly, selectProtectionAntivirusUpdatedRegularlyScore}
