import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum PasswordsPersonalInformationActionType {
    SET_PASSWORDS_PERSONAL_INFORMATION = 'SET_PASSWORDS_PERSONAL_INFORMATION'
}

interface SetPasswordsPersonalInformationAction {
    type: PasswordsPersonalInformationActionType.SET_PASSWORDS_PERSONAL_INFORMATION
    payload: YesNoNotSure
}

type PasswordsPersonalInformationAction = SetPasswordsPersonalInformationAction

const defaultPasswordsPersonalInformation = YesNoNotSure.NOT_SURE

const passwordsPersonalInformation: Reducer<YesNoNotSure, PasswordsPersonalInformationAction> = (state = defaultPasswordsPersonalInformation, action: PasswordsPersonalInformationAction) => {
    switch (action.type) {
        case PasswordsPersonalInformationActionType.SET_PASSWORDS_PERSONAL_INFORMATION:
            return action.payload
        default:
            return state
    }
}

const setPasswordsPersonalInformation = (passwordsPersonalInformation: YesNoNotSure) => ({
    type: PasswordsPersonalInformationActionType.SET_PASSWORDS_PERSONAL_INFORMATION,
    payload: passwordsPersonalInformation
})

function selectPasswordsPersonalInformationScore(storeState: StoreState): number {
    switch (storeState.passwordsPersonalInformation) {
        case YesNoNotSure.YES:
            return 0
        case YesNoNotSure.NO:
            return 10
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {passwordsPersonalInformation, setPasswordsPersonalInformation, selectPasswordsPersonalInformationScore}
