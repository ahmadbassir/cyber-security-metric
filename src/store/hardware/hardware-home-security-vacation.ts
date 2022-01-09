import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HardwareHomeSecurityVacationActionType {
    SET_HARDWARE_HOME_SECURITY_VACATION = 'SET_HARDWARE_HOME_SECURITY_VACATION'
}

interface SetHardwareHomeSecurityVacationAction {
    type: HardwareHomeSecurityVacationActionType.SET_HARDWARE_HOME_SECURITY_VACATION
    payload: YesNoNotSure
}

type HardwareHomeSecurityVacationAction = SetHardwareHomeSecurityVacationAction

const defaultHardwareHomeSecurityVacation = YesNoNotSure.NOT_SURE

const hardwareHomeSecurityVacation: Reducer<YesNoNotSure, HardwareHomeSecurityVacationAction> = (state = defaultHardwareHomeSecurityVacation, action: HardwareHomeSecurityVacationAction) => {
    switch (action.type) {
        case HardwareHomeSecurityVacationActionType.SET_HARDWARE_HOME_SECURITY_VACATION:
            return action.payload
        default:
            return state
    }
}

const setHardwareHomeSecurityVacation = (hardwareHomeSecurityVacation: YesNoNotSure) => ({
    type: HardwareHomeSecurityVacationActionType.SET_HARDWARE_HOME_SECURITY_VACATION,
    payload: hardwareHomeSecurityVacation
})

export {hardwareHomeSecurityVacation, setHardwareHomeSecurityVacation}
