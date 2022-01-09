import {Reducer} from 'redux'

enum PasswordsStrengthContainsLowerActionType {
    SET_PASSWORDS_STRENGTH_CONTAINS_LOWER = 'SET_PASSWORDS_STRENGTH_CONTAINS_LOWER'
}

interface SetPasswordsStrengthContainsLowerAction {
    type: PasswordsStrengthContainsLowerActionType.SET_PASSWORDS_STRENGTH_CONTAINS_LOWER
    payload: boolean
}

type PasswordsStrengthContainsLowerAction = SetPasswordsStrengthContainsLowerAction

const defaultPasswordsStrengthContainsLower = false

const passwordsStrengthContainsLower: Reducer<boolean, PasswordsStrengthContainsLowerAction> = (state = defaultPasswordsStrengthContainsLower, action: PasswordsStrengthContainsLowerAction) => {
    switch (action.type) {
        case PasswordsStrengthContainsLowerActionType.SET_PASSWORDS_STRENGTH_CONTAINS_LOWER:
            return action.payload
        default:
            return state
    }
}

const setPasswordsStrengthContainsLower = (passwordsStrengthContainsLower: boolean) => ({
    type: PasswordsStrengthContainsLowerActionType.SET_PASSWORDS_STRENGTH_CONTAINS_LOWER,
    payload: passwordsStrengthContainsLower
})

export {passwordsStrengthContainsLower, setPasswordsStrengthContainsLower}
