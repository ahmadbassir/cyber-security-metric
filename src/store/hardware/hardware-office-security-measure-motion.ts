import {Reducer} from 'redux'

enum HardwareOfficeSecurityMeasureMotionActionType {
    SET_HARDWARE_OFFICE_SECURITY_MEASURE_MOTION = 'SET_HARDWARE_OFFICE_SECURITY_MEASURE_MOTION'
}

interface SetHardwareOfficeSecurityMeasureMotionAction {
    type: HardwareOfficeSecurityMeasureMotionActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_MOTION
    payload: boolean
}

type HardwareOfficeSecurityMeasureMotionAction = SetHardwareOfficeSecurityMeasureMotionAction

const defaultHardwareOfficeSecurityMeasureMotion = false

const hardwareOfficeSecurityMeasureMotion: Reducer<boolean, HardwareOfficeSecurityMeasureMotionAction> = (state = defaultHardwareOfficeSecurityMeasureMotion, action: HardwareOfficeSecurityMeasureMotionAction) => {
    switch (action.type) {
        case HardwareOfficeSecurityMeasureMotionActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_MOTION:
            return action.payload
        default:
            return state
    }
}

const setHardwareOfficeSecurityMeasureMotion = (hardwareOfficeSecurityMeasureMotion: boolean) => ({
    type: HardwareOfficeSecurityMeasureMotionActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_MOTION,
    payload: hardwareOfficeSecurityMeasureMotion
})

export {hardwareOfficeSecurityMeasureMotion, setHardwareOfficeSecurityMeasureMotion}
