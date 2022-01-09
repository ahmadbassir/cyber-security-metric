import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum SocialPolicyActionType {
    SET_SOCIAL_POLICY = 'SET_SOCIAL_POLICY'
}

interface SetSocialPolicyAction {
    type: SocialPolicyActionType.SET_SOCIAL_POLICY
    payload: YesNoNotSure
}

type SocialPolicyAction = SetSocialPolicyAction

const defaultSocialPolicy = YesNoNotSure.NOT_SURE

const socialPolicy: Reducer<YesNoNotSure, SocialPolicyAction> = (state = defaultSocialPolicy, action: SocialPolicyAction) => {
    switch (action.type) {
        case SocialPolicyActionType.SET_SOCIAL_POLICY:
            return action.payload
        default:
            return state
    }
}

const setSocialPolicy = (socialPolicy: YesNoNotSure) => ({
    type: SocialPolicyActionType.SET_SOCIAL_POLICY,
    payload: socialPolicy
})

function selectSocialPolicyScore(storeState: StoreState): number {
    switch (storeState.socialPolicy) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {socialPolicy, setSocialPolicy, selectSocialPolicyScore}
