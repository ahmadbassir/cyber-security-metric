import {Reducer} from 'redux'

enum HardwareOfficeSecurityStorage {
    SAFE = 'SAFE',
    LOCKED = 'LOCKED',
    UNLOCKED = 'UNLOCKED',
    DESK = 'DESK',
    OTHER = 'OTHER'
}

enum HardwareOfficeSecurityStorageActionType {
    SET_OFFICE_SECURITY_STORAGE = 'SET_OFFICE_SECURITY_STORAGE'
}

interface SetHardwareOfficeSecurityStorageAction {
    type: HardwareOfficeSecurityStorageActionType.SET_OFFICE_SECURITY_STORAGE
    payload: HardwareOfficeSecurityStorage
}

type HardwareOfficeSecurityStorageAction = SetHardwareOfficeSecurityStorageAction

const defaultHardwareOfficeSecurityStorage = HardwareOfficeSecurityStorage.UNLOCKED

const hardwareOfficeSecurityStorage: Reducer<HardwareOfficeSecurityStorage, HardwareOfficeSecurityStorageAction> = (state = defaultHardwareOfficeSecurityStorage, action: HardwareOfficeSecurityStorageAction) => {
    switch (action.type) {
        case HardwareOfficeSecurityStorageActionType.SET_OFFICE_SECURITY_STORAGE:
            return action.payload
        default:
            return state
    }
}

const setHardwareOfficeSecurityStorage = (hardwareOfficeSecurityStorage: HardwareOfficeSecurityStorage) => ({
    type: HardwareOfficeSecurityStorageActionType.SET_OFFICE_SECURITY_STORAGE,
    payload: hardwareOfficeSecurityStorage
})

export {HardwareOfficeSecurityStorage, hardwareOfficeSecurityStorage, setHardwareOfficeSecurityStorage}
