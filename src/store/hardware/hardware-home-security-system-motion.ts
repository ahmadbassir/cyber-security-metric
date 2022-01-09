import {Reducer} from 'redux'

enum HardwareHomeSecuritySystemMotionActionType {
    SET_HARDWARE_HOME_SECURITY_SYSTEM_MOTION = 'SET_HARDWARE_HOME_SECURITY_SYSTEM_MOTION'
}

interface SetHardwareHomeSecuritySystemMotionAction {
    type: HardwareHomeSecuritySystemMotionActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_MOTION
    payload: boolean
}

type HardwareHomeSecuritySystemMotionAction = SetHardwareHomeSecuritySystemMotionAction

const defaultHardwareHomeSecuritySystemMotion = false

const hardwareHomeSecuritySystemMotion: Reducer<boolean, HardwareHomeSecuritySystemMotionAction> = (state = defaultHardwareHomeSecuritySystemMotion, action: HardwareHomeSecuritySystemMotionAction) => {
    switch (action.type) {
        case HardwareHomeSecuritySystemMotionActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_MOTION:
            return action.payload
        default:
            return state
    }
}

const setHardwareHomeSecuritySystemMotion = (hardwareHomeSecuritySystemMotion: boolean) => ({
    type: HardwareHomeSecuritySystemMotionActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_MOTION,
    payload: hardwareHomeSecuritySystemMotion
})

export {hardwareHomeSecuritySystemMotion, setHardwareHomeSecuritySystemMotion}
