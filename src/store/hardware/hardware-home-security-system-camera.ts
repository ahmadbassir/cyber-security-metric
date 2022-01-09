import {Reducer} from 'redux'

enum HardwareHomeSecuritySystemCameraActionType {
    SET_HARDWARE_HOME_SECURITY_SYSTEM_CAMERA = 'SET_HARDWARE_HOME_SECURITY_SYSTEM_CAMERA'
}

interface SetHardwareHomeSecuritySystemCameraAction {
    type: HardwareHomeSecuritySystemCameraActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_CAMERA
    payload: boolean
}

type HardwareHomeSecuritySystemCameraAction = SetHardwareHomeSecuritySystemCameraAction

const defaultHardwareHomeSecuritySystemCamera = false

const hardwareHomeSecuritySystemCamera: Reducer<boolean, HardwareHomeSecuritySystemCameraAction> = (state = defaultHardwareHomeSecuritySystemCamera, action: HardwareHomeSecuritySystemCameraAction) => {
    switch (action.type) {
        case HardwareHomeSecuritySystemCameraActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_CAMERA:
            return action.payload
        default:
            return state
    }
}

const setHardwareHomeSecuritySystemCamera = (hardwareHomeSecuritySystemCamera: boolean) => ({
    type: HardwareHomeSecuritySystemCameraActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_CAMERA,
    payload: hardwareHomeSecuritySystemCamera
})

export {hardwareHomeSecuritySystemCamera, setHardwareHomeSecuritySystemCamera}
