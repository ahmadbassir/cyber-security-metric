import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum SocialRepresentedActionType {
    SET_SOCIAL_REPRESENTED = 'SET_SOCIAL_REPRESENTED'
}

interface SetSocialRepresentedAction {
    type: SocialRepresentedActionType.SET_SOCIAL_REPRESENTED
    payload: YesNoNotSure
}

type SocialRepresentedAction = SetSocialRepresentedAction

const defaultSocialRepresented = YesNoNotSure.NOT_SURE

const socialRepresented: Reducer<YesNoNotSure, SocialRepresentedAction> = (state = defaultSocialRepresented, action: SocialRepresentedAction) => {
    switch (action.type) {
        case SocialRepresentedActionType.SET_SOCIAL_REPRESENTED:
            return action.payload
        default:
            return state
    }
}

const setSocialRepresented = (socialRepresented: YesNoNotSure) => ({
    type: SocialRepresentedActionType.SET_SOCIAL_REPRESENTED,
    payload: socialRepresented
})

function selectSocialRepresentedScore(storeState: StoreState): number {
    switch (storeState.socialRepresented) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {socialRepresented, setSocialRepresented, selectSocialRepresentedScore}
