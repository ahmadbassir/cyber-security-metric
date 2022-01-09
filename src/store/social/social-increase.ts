import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum SocialIncreaseActionType {
    SET_SOCIAL_INCREASE = 'SET_SOCIAL_INCREASE'
}

interface SetSocialIncreaseAction {
    type: SocialIncreaseActionType.SET_SOCIAL_INCREASE
    payload: YesNoNotSure
}

type SocialIncreaseAction = SetSocialIncreaseAction

const defaultSocialIncrease = YesNoNotSure.NOT_SURE

const socialIncrease: Reducer<YesNoNotSure, SocialIncreaseAction> = (state = defaultSocialIncrease, action: SocialIncreaseAction) => {
    switch (action.type) {
        case SocialIncreaseActionType.SET_SOCIAL_INCREASE:
            return action.payload
        default:
            return state
    }
}

const setSocialIncrease = (socialIncrease: YesNoNotSure) => ({
    type: SocialIncreaseActionType.SET_SOCIAL_INCREASE,
    payload: socialIncrease
})

function selectSocialIncreaseScore(storeState: StoreState): number {
    switch (storeState.socialIncrease) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {socialIncrease, setSocialIncrease, selectSocialIncreaseScore}
