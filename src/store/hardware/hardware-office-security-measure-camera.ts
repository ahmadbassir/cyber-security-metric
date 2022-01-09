import {Reducer} from 'redux'

enum HardwareOfficeSecurityMeasureCameraActionType {
    SET_HARDWARE_OFFICE_SECURITY_MEASURE_CAMERA = 'SET_HARDWARE_OFFICE_SECURITY_MEASURE_CAMERA'
}

interface SetHardwareOfficeSecurityMeasureCameraAction {
    type: HardwareOfficeSecurityMeasureCameraActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_CAMERA
    payload: boolean
}

type HardwareOfficeSecurityMeasureCameraAction = SetHardwareOfficeSecurityMeasureCameraAction

const defaultHardwareOfficeSecurityMeasureCamera = false

const hardwareOfficeSecurityMeasureCamera: Reducer<boolean, HardwareOfficeSecurityMeasureCameraAction> = (state = defaultHardwareOfficeSecurityMeasureCamera, action: HardwareOfficeSecurityMeasureCameraAction) => {
    switch (action.type) {
        case HardwareOfficeSecurityMeasureCameraActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_CAMERA:
            return action.payload
        default:
            return state
    }
}

const setHardwareOfficeSecurityMeasureCamera = (hardwareOfficeSecurityMeasureCamera: boolean) => ({
    type: HardwareOfficeSecurityMeasureCameraActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_CAMERA,
    payload: hardwareOfficeSecurityMeasureCamera
})

export {hardwareOfficeSecurityMeasureCamera, setHardwareOfficeSecurityMeasureCamera}
