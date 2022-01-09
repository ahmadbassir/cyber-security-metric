import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum AwarenessOnboardingActionType {
    SET_AWARENESS_ONBOARDING = 'SET_AWARENESS_ONBOARDING'
}

interface SetAwarenessOnboardingAction {
    type: AwarenessOnboardingActionType.SET_AWARENESS_ONBOARDING
    payload: YesNoNotSure
}

type AwarenessOnboardingAction = SetAwarenessOnboardingAction

const defaultAwarenessOnboarding = YesNoNotSure.NOT_SURE

const awarenessOnboarding: Reducer<YesNoNotSure, AwarenessOnboardingAction> = (state = defaultAwarenessOnboarding, action: AwarenessOnboardingAction) => {
    switch (action.type) {
        case AwarenessOnboardingActionType.SET_AWARENESS_ONBOARDING:
            return action.payload
        default:
            return state
    }
}

const setAwarenessOnboarding = (awarenessOnboarding: YesNoNotSure) => ({
    type: AwarenessOnboardingActionType.SET_AWARENESS_ONBOARDING,
    payload: awarenessOnboarding
})

export {awarenessOnboarding, setAwarenessOnboarding}
