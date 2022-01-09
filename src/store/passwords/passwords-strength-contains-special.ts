import {Reducer} from 'redux'

enum PasswordsStrengthContainsSpecialActionType {
    SET_PASSWORDS_STRENGTH_CONTAINS_SPECIAL = 'SET_PASSWORDS_STRENGTH_CONTAINS_SPECIAL'
}

interface SetPasswordsStrengthContainsSpecialAction {
    type: PasswordsStrengthContainsSpecialActionType.SET_PASSWORDS_STRENGTH_CONTAINS_SPECIAL
    payload: boolean
}

type PasswordsStrengthContainsSpecialAction = SetPasswordsStrengthContainsSpecialAction

const defaultPasswordsStrengthContainsSpecial = false

const passwordsStrengthContainsSpecial: Reducer<boolean, PasswordsStrengthContainsSpecialAction> = (state = defaultPasswordsStrengthContainsSpecial, action: PasswordsStrengthContainsSpecialAction) => {
    switch (action.type) {
        case PasswordsStrengthContainsSpecialActionType.SET_PASSWORDS_STRENGTH_CONTAINS_SPECIAL:
            return action.payload
        default:
            return state
    }
}

const setPasswordsStrengthContainsSpecial = (passwordsStrengthContainsSpecial: boolean) => ({
    type: PasswordsStrengthContainsSpecialActionType.SET_PASSWORDS_STRENGTH_CONTAINS_SPECIAL,
    payload: passwordsStrengthContainsSpecial
})

export {passwordsStrengthContainsSpecial, setPasswordsStrengthContainsSpecial}
