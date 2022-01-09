import {Reducer} from 'redux'


enum PasswordsStorageFileActionType {
    SET_PASSWORDS_STORAGE_FILE = 'SET_PASSWORDS_STORAGE_FILE'
}

interface SetPasswordsStorageFileAction {
    type: PasswordsStorageFileActionType.SET_PASSWORDS_STORAGE_FILE
    payload: boolean
}

type PasswordsStorageFileAction = SetPasswordsStorageFileAction

const defaultPasswordsStorageFile = false

const passwordsStorageFile: Reducer<boolean, PasswordsStorageFileAction> = (state = defaultPasswordsStorageFile, action: PasswordsStorageFileAction) => {
    switch (action.type) {
        case PasswordsStorageFileActionType.SET_PASSWORDS_STORAGE_FILE:
            return action.payload
        default:
            return state
    }
}

const setPasswordsStorageFile = (passwordsStorageFile: boolean) => ({
    type: PasswordsStorageFileActionType.SET_PASSWORDS_STORAGE_FILE,
    payload: passwordsStorageFile
})


export {passwordsStorageFile, setPasswordsStorageFile}
