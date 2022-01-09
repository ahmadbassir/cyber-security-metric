import {Reducer} from 'redux'

enum PasswordsStrengthContainsNumberActionType {
    SET_PASSWORDS_STRENGTH_CONTAINS_NUMBER = 'SET_PASSWORDS_STRENGTH_CONTAINS_NUMBER'
}

interface SetPasswordsStrengthContainsNumberAction {
    type: PasswordsStrengthContainsNumberActionType.SET_PASSWORDS_STRENGTH_CONTAINS_NUMBER
    payload: boolean
}

type PasswordsStrengthContainsNumberAction = SetPasswordsStrengthContainsNumberAction

const defaultPasswordsStrengthContainsNumber = false

const passwordsStrengthContainsNumber: Reducer<boolean, PasswordsStrengthContainsNumberAction> = (state = defaultPasswordsStrengthContainsNumber, action: PasswordsStrengthContainsNumberAction) => {
    switch (action.type) {
        case PasswordsStrengthContainsNumberActionType.SET_PASSWORDS_STRENGTH_CONTAINS_NUMBER:
            return action.payload
        default:
            return state
    }
}

const setPasswordsStrengthContainsNumber = (passwordsStrengthContainsNumber: boolean) => ({
    type: PasswordsStrengthContainsNumberActionType.SET_PASSWORDS_STRENGTH_CONTAINS_NUMBER,
    payload: passwordsStrengthContainsNumber
})

export {passwordsStrengthContainsNumber, setPasswordsStrengthContainsNumber}
