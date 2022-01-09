import {Reducer} from 'redux'
import {StoreState} from '../index'

enum PasswordsUpdateFrequencyActionType {
    SET_PASSWORDS_UPDATE_FREQUENCY = 'SET_PASSWORDS_UPDATE_FREQUENCY'
}

interface SetPasswordsUpdateFrequencyAction {
    type: PasswordsUpdateFrequencyActionType.SET_PASSWORDS_UPDATE_FREQUENCY
    payload: number
}

type PasswordsUpdateFrequencyAction = SetPasswordsUpdateFrequencyAction

const defaultPasswordsUpdateFrequency = 0

const passwordsUpdateFrequency: Reducer<number, PasswordsUpdateFrequencyAction> = (state = defaultPasswordsUpdateFrequency, action: PasswordsUpdateFrequencyAction) => {
    switch (action.type) {
        case PasswordsUpdateFrequencyActionType.SET_PASSWORDS_UPDATE_FREQUENCY:
            return action.payload
        default:
            return state
    }
}

const setPasswordsUpdateFrequency = (passwordsUpdateFrequency: number) => ({
    type: PasswordsUpdateFrequencyActionType.SET_PASSWORDS_UPDATE_FREQUENCY,
    payload: passwordsUpdateFrequency
})

function selectPasswordsUpdateFrequencyScore(storeState: StoreState): number {
    const passwordUpdateFrequency = storeState.passwordsUpdateFrequency

    if (passwordUpdateFrequency < 3) {
        return 10 * (passwordUpdateFrequency / 3)
    } else if (passwordUpdateFrequency === 3) {
        return 10
    } else {
        return 10 * (3 / passwordUpdateFrequency)
    }
}

export {passwordsUpdateFrequency, setPasswordsUpdateFrequency, selectPasswordsUpdateFrequencyScore}
