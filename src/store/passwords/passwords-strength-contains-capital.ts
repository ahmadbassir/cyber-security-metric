import {Reducer} from 'redux'

enum PasswordsStrengthContainsCapitalActionType {
    SET_PASSWORDS_STRENGTH_CONTAINS_CAPITAL = 'SET_PASSWORDS_STRENGTH_CONTAINS_CAPITAL'
}

interface SetPasswordsStrengthContainsCapitalAction {
    type: PasswordsStrengthContainsCapitalActionType.SET_PASSWORDS_STRENGTH_CONTAINS_CAPITAL
    payload: boolean
}

type PasswordsStrengthContainsCapitalAction = SetPasswordsStrengthContainsCapitalAction

const defaultPasswordsStrengthContainsCapital = false

const passwordsStrengthContainsCapital: Reducer<boolean, PasswordsStrengthContainsCapitalAction> = (state = defaultPasswordsStrengthContainsCapital, action: PasswordsStrengthContainsCapitalAction) => {
    switch (action.type) {
        case PasswordsStrengthContainsCapitalActionType.SET_PASSWORDS_STRENGTH_CONTAINS_CAPITAL:
            return action.payload
        default:
            return state
    }
}

const setPasswordsStrengthContainsCapital = (passwordsStrengthContainsCapital: boolean) => ({
    type: PasswordsStrengthContainsCapitalActionType.SET_PASSWORDS_STRENGTH_CONTAINS_CAPITAL,
    payload: passwordsStrengthContainsCapital
})

export {passwordsStrengthContainsCapital, setPasswordsStrengthContainsCapital}
