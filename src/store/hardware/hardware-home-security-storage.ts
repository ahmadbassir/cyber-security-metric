import {Reducer} from 'redux'

enum HardwareHomeSecurityStorage {
    LOCKED_ROOM = 'LOCKED_ROOM',
    UNLOCKED = 'UNLOCKED'
}

enum HardwareHomeSecurityStorageActionType {
    SET_HOME_SECURITY_STORAGE = 'SET_HOME_SECURITY_STORAGE'
}

interface SetHardwareHomeSecurityStorageAction {
    type: HardwareHomeSecurityStorageActionType.SET_HOME_SECURITY_STORAGE
    payload: HardwareHomeSecurityStorage
}

type HardwareHomeSecurityStorageAction = SetHardwareHomeSecurityStorageAction

const defaultHardwareHomeSecurityStorage = HardwareHomeSecurityStorage.UNLOCKED

const hardwareHomeSecurityStorage: Reducer<HardwareHomeSecurityStorage, HardwareHomeSecurityStorageAction> = (state = defaultHardwareHomeSecurityStorage, action: HardwareHomeSecurityStorageAction) => {
    switch (action.type) {
        case HardwareHomeSecurityStorageActionType.SET_HOME_SECURITY_STORAGE:
            return action.payload
        default:
            return state
    }
}

const setHardwareHomeSecurityStorage = (hardwareHomeSecurityStorage: HardwareHomeSecurityStorage) => ({
    type: HardwareHomeSecurityStorageActionType.SET_HOME_SECURITY_STORAGE,
    payload: hardwareHomeSecurityStorage
})

export {HardwareHomeSecurityStorage, hardwareHomeSecurityStorage, setHardwareHomeSecurityStorage}
