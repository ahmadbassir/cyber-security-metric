import {Reducer} from 'redux'


enum PasswordsStorageOtherActionType {
    SET_PASSWORDS_STORAGE_OTHER = 'SET_PASSWORDS_STORAGE_OTHER'
}

interface SetPasswordsStorageOtherAction {
    type: PasswordsStorageOtherActionType.SET_PASSWORDS_STORAGE_OTHER
    payload: boolean
}

type PasswordsStorageOtherAction = SetPasswordsStorageOtherAction

const defaultPasswordsStorageOther = false

const passwordsStorageOther: Reducer<boolean, PasswordsStorageOtherAction> = (state = defaultPasswordsStorageOther, action: PasswordsStorageOtherAction) => {
    switch (action.type) {
        case PasswordsStorageOtherActionType.SET_PASSWORDS_STORAGE_OTHER:
            return action.payload
        default:
            return state
    }
}

const setPasswordsStorageOther = (passwordsStorageOther: boolean) => ({
    type: PasswordsStorageOtherActionType.SET_PASSWORDS_STORAGE_OTHER,
    payload: passwordsStorageOther
})


export {passwordsStorageOther, setPasswordsStorageOther}
