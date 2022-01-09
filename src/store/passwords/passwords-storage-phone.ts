import {Reducer} from 'redux'


enum PasswordsStoragePhoneActionType {
    SET_PASSWORDS_STORAGE_PHONE = 'SET_PASSWORDS_STORAGE_PHONE'
}

interface SetPasswordsStoragePhoneAction {
    type: PasswordsStoragePhoneActionType.SET_PASSWORDS_STORAGE_PHONE
    payload: boolean
}

type PasswordsStoragePhoneAction = SetPasswordsStoragePhoneAction

const defaultPasswordsStoragePhone = false

const passwordsStoragePhone: Reducer<boolean, PasswordsStoragePhoneAction> = (state = defaultPasswordsStoragePhone, action: PasswordsStoragePhoneAction) => {
    switch (action.type) {
        case PasswordsStoragePhoneActionType.SET_PASSWORDS_STORAGE_PHONE:
            return action.payload
        default:
            return state
    }
}

const setPasswordsStoragePhone = (passwordsStoragePhone: boolean) => ({
    type: PasswordsStoragePhoneActionType.SET_PASSWORDS_STORAGE_PHONE,
    payload: passwordsStoragePhone
})


export {passwordsStoragePhone, setPasswordsStoragePhone}
