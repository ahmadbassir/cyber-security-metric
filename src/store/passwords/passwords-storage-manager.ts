import {Reducer} from 'redux'


enum PasswordsStorageManagerActionType {
    SET_PASSWORDS_STORAGE_MANAGER = 'SET_PASSWORDS_STORAGE_MANAGER'
}

interface SetPasswordsStorageManagerAction {
    type: PasswordsStorageManagerActionType.SET_PASSWORDS_STORAGE_MANAGER
    payload: boolean
}

type PasswordsStorageManagerAction = SetPasswordsStorageManagerAction

const defaultPasswordsStorageManager = false

const passwordsStorageManager: Reducer<boolean, PasswordsStorageManagerAction> = (state = defaultPasswordsStorageManager, action: PasswordsStorageManagerAction) => {
    switch (action.type) {
        case PasswordsStorageManagerActionType.SET_PASSWORDS_STORAGE_MANAGER:
            return action.payload
        default:
            return state
    }
}

const setPasswordsStorageManager = (passwordsStorageManager: boolean) => ({
    type: PasswordsStorageManagerActionType.SET_PASSWORDS_STORAGE_MANAGER,
    payload: passwordsStorageManager
})


export {passwordsStorageManager, setPasswordsStorageManager}
