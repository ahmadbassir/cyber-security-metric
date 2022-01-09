import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum PasswordsPhotosTakenActionType {
    SET_PASSWORDS_PHOTOS_TAKEN = 'SET_PASSWORDS_PHOTOS_TAKEN'
}

interface SetPasswordsPhotosTakenAction {
    type: PasswordsPhotosTakenActionType.SET_PASSWORDS_PHOTOS_TAKEN
    payload: YesNoNotSure
}

type PasswordsPhotosTakenAction = SetPasswordsPhotosTakenAction

const defaultPasswordsPhotosTaken = YesNoNotSure.NOT_SURE

const passwordsPhotosTaken: Reducer<YesNoNotSure, PasswordsPhotosTakenAction> = (state = defaultPasswordsPhotosTaken, action: PasswordsPhotosTakenAction) => {
    switch (action.type) {
        case PasswordsPhotosTakenActionType.SET_PASSWORDS_PHOTOS_TAKEN:
            return action.payload
        default:
            return state
    }
}

const setPasswordsPhotosTaken = (passwordsPhotosTaken: YesNoNotSure) => ({
    type: PasswordsPhotosTakenActionType.SET_PASSWORDS_PHOTOS_TAKEN,
    payload: passwordsPhotosTaken
})

function selectPasswordsPhotosTakenScore(storeState: StoreState): number {
    switch (storeState.passwordsPhotosTaken) {
        case YesNoNotSure.YES:
            return 0
        case YesNoNotSure.NO:
            return 10
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {passwordsPhotosTaken, setPasswordsPhotosTaken, selectPasswordsPhotosTakenScore}
