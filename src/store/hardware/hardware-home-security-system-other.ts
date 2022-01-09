import {Reducer} from 'redux'

enum HardwareHomeSecuritySystemOtherActionType {
    SET_HARDWARE_HOME_SECURITY_SYSTEM_OTHER = 'SET_HARDWARE_HOME_SECURITY_SYSTEM_OTHER'
}

interface SetHardwareHomeSecuritySystemOtherAction {
    type: HardwareHomeSecuritySystemOtherActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_OTHER
    payload: boolean
}

type HardwareHomeSecuritySystemOtherAction = SetHardwareHomeSecuritySystemOtherAction

const defaultHardwareHomeSecuritySystemOther = false

const hardwareHomeSecuritySystemOther: Reducer<boolean, HardwareHomeSecuritySystemOtherAction> = (state = defaultHardwareHomeSecuritySystemOther, action: HardwareHomeSecuritySystemOtherAction) => {
    switch (action.type) {
        case HardwareHomeSecuritySystemOtherActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_OTHER:
            return action.payload
        default:
            return state
    }
}

const setHardwareHomeSecuritySystemOther = (hardwareHomeSecuritySystemOther: boolean) => ({
    type: HardwareHomeSecuritySystemOtherActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_OTHER,
    payload: hardwareHomeSecuritySystemOther
})

export {hardwareHomeSecuritySystemOther, setHardwareHomeSecuritySystemOther}
