import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum SocialUsageActionType {
    SET_SOCIAL_USAGE = 'SET_SOCIAL_USAGE'
}

interface SetSocialUsageAction {
    type: SocialUsageActionType.SET_SOCIAL_USAGE
    payload: YesNoNotSure
}

type SocialUsageAction = SetSocialUsageAction

const defaultSocialUsage = YesNoNotSure.NOT_SURE

const socialUsage: Reducer<YesNoNotSure, SocialUsageAction> = (state = defaultSocialUsage, action: SocialUsageAction) => {
    switch (action.type) {
        case SocialUsageActionType.SET_SOCIAL_USAGE:
            return action.payload
        default:
            return state
    }
}

const setSocialUsage = (socialUsage: YesNoNotSure) => ({
    type: SocialUsageActionType.SET_SOCIAL_USAGE,
    payload: socialUsage
})

function selectSocialUsageScore(storeState: StoreState): number {
    switch (storeState.socialUsage) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {socialUsage, setSocialUsage, selectSocialUsageScore}
