import {Reducer} from 'redux'
import {StoreState} from '../index'

enum PasswordsKnowingPeopleActionType {
    SET_PASSWORDS_KNOWING_PEOPLE = 'SET_PASSWORDS_KNOWING_PEOPLE'
}

interface SetPasswordsKnowingPeopleAction {
    type: PasswordsKnowingPeopleActionType.SET_PASSWORDS_KNOWING_PEOPLE
    payload: number
}

type PasswordsKnowingPeopleAction = SetPasswordsKnowingPeopleAction

const defaultPasswordsKnowingPeople = 1

const passwordsKnowingPeople: Reducer<number, PasswordsKnowingPeopleAction> = (state = defaultPasswordsKnowingPeople, action: PasswordsKnowingPeopleAction) => {
    switch (action.type) {
        case PasswordsKnowingPeopleActionType.SET_PASSWORDS_KNOWING_PEOPLE:
            return action.payload
        default:
            return state
    }
}

const setPasswordsKnowingPeople = (passwordsKnowingPeople: number) => ({
    type: PasswordsKnowingPeopleActionType.SET_PASSWORDS_KNOWING_PEOPLE,
    payload: passwordsKnowingPeople
})

function selectPasswordsKnowingPeopleScore(storeState: StoreState): number {
    const knowingPeople = storeState.passwordsKnowingPeople

    return Math.pow(2, knowingPeople - 1)
}

export {passwordsKnowingPeople, setPasswordsKnowingPeople, selectPasswordsKnowingPeopleScore}
