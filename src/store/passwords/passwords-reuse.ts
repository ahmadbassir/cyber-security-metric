import {Reducer} from 'redux'
import {StoreState} from '../index'

enum PasswordsReuseActionType {
    SET_PASSWORDS_REUSE = 'SET_PASSWORDS_REUSE'
}

interface SetPasswordsReuseAction {
    type: PasswordsReuseActionType.SET_PASSWORDS_REUSE
    payload: number
}

type PasswordsReuseAction = SetPasswordsReuseAction

const defaultPasswordsReuse = 1

const passwordsReuse: Reducer<number, PasswordsReuseAction> = (state = defaultPasswordsReuse, action: PasswordsReuseAction) => {
    switch (action.type) {
        case PasswordsReuseActionType.SET_PASSWORDS_REUSE:
            return action.payload
        default:
            return state
    }
}

const setPasswordsReuse = (passwordsReuse: number) => ({
    type: PasswordsReuseActionType.SET_PASSWORDS_REUSE,
    payload: passwordsReuse
})

function selectPasswordsReuseScore(storeState: StoreState): number {
    const passwordReuse = storeState.passwordsReuse

    return 10 / passwordReuse
}

export {passwordsReuse, setPasswordsReuse, selectPasswordsReuseScore}
