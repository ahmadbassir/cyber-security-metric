import {Reducer} from 'redux'

enum HardwareOfficeSecurityMeasureOtherActionType {
    SET_HARDWARE_OFFICE_SECURITY_MEASURE_OTHER = 'SET_HARDWARE_OFFICE_SECURITY_MEASURE_OTHER'
}

interface SetHardwareOfficeSecurityMeasureOtherAction {
    type: HardwareOfficeSecurityMeasureOtherActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_OTHER
    payload: boolean
}

type HardwareOfficeSecurityMeasureOtherAction = SetHardwareOfficeSecurityMeasureOtherAction

const defaultHardwareOfficeSecurityMeasureOther = false

const hardwareOfficeSecurityMeasureOther: Reducer<boolean, HardwareOfficeSecurityMeasureOtherAction> = (state = defaultHardwareOfficeSecurityMeasureOther, action: HardwareOfficeSecurityMeasureOtherAction) => {
    switch (action.type) {
        case HardwareOfficeSecurityMeasureOtherActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_OTHER:
            return action.payload
        default:
            return state
    }
}

const setHardwareOfficeSecurityMeasureOther = (hardwareOfficeSecurityMeasureOther: boolean) => ({
    type: HardwareOfficeSecurityMeasureOtherActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_OTHER,
    payload: hardwareOfficeSecurityMeasureOther
})

export {hardwareOfficeSecurityMeasureOther, setHardwareOfficeSecurityMeasureOther}
