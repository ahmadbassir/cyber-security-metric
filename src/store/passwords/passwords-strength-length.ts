import {Reducer} from 'redux'

enum PasswordsStrengthLengthActionType {
    SET_PASSWORDS_STRENGTH_LENGTH = 'SET_PASSWORDS_STRENGTH_LENGTH'
}

interface SetPasswordsStrengthLengthAction {
    type: PasswordsStrengthLengthActionType.SET_PASSWORDS_STRENGTH_LENGTH
    payload: number
}

type PasswordsStrengthLengthAction = SetPasswordsStrengthLengthAction

const defaultPasswordsStrengthLength = 0

const passwordsStrengthLength: Reducer<number, PasswordsStrengthLengthAction> = (state = defaultPasswordsStrengthLength, action: PasswordsStrengthLengthAction) => {
    switch (action.type) {
        case PasswordsStrengthLengthActionType.SET_PASSWORDS_STRENGTH_LENGTH:
            return action.payload
        default:
            return state
    }
}

const setPasswordsStrengthLength = (passwordsStrengthLength: number) => ({
    type: PasswordsStrengthLengthActionType.SET_PASSWORDS_STRENGTH_LENGTH,
    payload: passwordsStrengthLength
})

export {passwordsStrengthLength, setPasswordsStrengthLength}
