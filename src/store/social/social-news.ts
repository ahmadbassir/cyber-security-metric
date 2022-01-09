import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum SocialNewsActionType {
    SET_SOCIAL_NEWS = 'SET_SOCIAL_NEWS'
}

interface SetSocialNewsAction {
    type: SocialNewsActionType.SET_SOCIAL_NEWS
    payload: YesNoNotSure
}

type SocialNewsAction = SetSocialNewsAction

const defaultSocialNews = YesNoNotSure.NOT_SURE

const socialNews: Reducer<YesNoNotSure, SocialNewsAction> = (state = defaultSocialNews, action: SocialNewsAction) => {
    switch (action.type) {
        case SocialNewsActionType.SET_SOCIAL_NEWS:
            return action.payload
        default:
            return state
    }
}

const setSocialNews = (socialNews: YesNoNotSure) => ({
    type: SocialNewsActionType.SET_SOCIAL_NEWS,
    payload: socialNews
})

function selectSocialNewsScore(storeState: StoreState): number {
    switch (storeState.socialNews) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {socialNews, setSocialNews, selectSocialNewsScore}
