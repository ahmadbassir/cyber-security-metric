import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HardwareInformationReviewLockActionType {
    SET_HARDWARE_INFORMATION_REVIEW_LOCK = 'SET_HARDWARE_INFORMATION_REVIEW_LOCK'
}

interface SetHardwareInformationReviewLockAction {
    type: HardwareInformationReviewLockActionType.SET_HARDWARE_INFORMATION_REVIEW_LOCK
    payload: YesNoNotSure
}

type HardwareInformationReviewLockAction = SetHardwareInformationReviewLockAction

const defaultHardwareInformationReviewLock = YesNoNotSure.NOT_SURE

const hardwareInformationReviewLock: Reducer<YesNoNotSure, HardwareInformationReviewLockAction> = (state = defaultHardwareInformationReviewLock, action: HardwareInformationReviewLockAction) => {
    switch (action.type) {
        case HardwareInformationReviewLockActionType.SET_HARDWARE_INFORMATION_REVIEW_LOCK:
            return action.payload
        default:
            return state
    }
}

const setHardwareInformationReviewLock = (hardwareInformationReviewLock: YesNoNotSure) => ({
    type: HardwareInformationReviewLockActionType.SET_HARDWARE_INFORMATION_REVIEW_LOCK,
    payload: hardwareInformationReviewLock
})

export {hardwareInformationReviewLock, setHardwareInformationReviewLock}
