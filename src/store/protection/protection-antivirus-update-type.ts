import {Reducer} from 'redux'
import {StoreState} from '../index'

enum ProtectionAntivirusUpdateType {
    MANUAL = 'MANUAL',
    AUTOMATIC = 'AUTOMATIC',
    NOT_SURE = 'NOT_SURE'
}

enum ProtectionAntivirusUpdateTypeActionType {
    SET_PROTECTION_ANTIVIRUS_UPDATE_TYPE = 'SET_PROTECTION_ANTIVIRUS_UPDATE_TYPE'
}

interface SetProtectionAntivirusUpdateTypeAction {
    type: ProtectionAntivirusUpdateTypeActionType.SET_PROTECTION_ANTIVIRUS_UPDATE_TYPE
    payload: ProtectionAntivirusUpdateType
}

type ProtectionAntivirusUpdateTypeAction = SetProtectionAntivirusUpdateTypeAction

const defaultProtectionAntivirusUpdateType = ProtectionAntivirusUpdateType.NOT_SURE

const protectionAntivirusUpdateType: Reducer<ProtectionAntivirusUpdateType, ProtectionAntivirusUpdateTypeAction> = (state = defaultProtectionAntivirusUpdateType, action: ProtectionAntivirusUpdateTypeAction) => {
    switch (action.type) {
        case ProtectionAntivirusUpdateTypeActionType.SET_PROTECTION_ANTIVIRUS_UPDATE_TYPE:
            return action.payload
        default:
            return state
    }
}

const setProtectionAntivirusUpdateType = (protectionAntivirusUpdateType: ProtectionAntivirusUpdateType) => ({
    type: ProtectionAntivirusUpdateTypeActionType.SET_PROTECTION_ANTIVIRUS_UPDATE_TYPE,
    payload: protectionAntivirusUpdateType
})

function selectProtectionAntivirusUpdateTypeScore(storeState: StoreState): number {
    switch (storeState.protectionAntivirusUpdateType) {
        case ProtectionAntivirusUpdateType.MANUAL:
            return 0.75
        case ProtectionAntivirusUpdateType.AUTOMATIC:
            return 1
        case ProtectionAntivirusUpdateType.NOT_SURE:
            return 0.75
    }
}

export {ProtectionAntivirusUpdateType, protectionAntivirusUpdateType, setProtectionAntivirusUpdateType, selectProtectionAntivirusUpdateTypeScore}
