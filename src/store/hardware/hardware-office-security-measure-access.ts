import {Reducer} from 'redux'

enum HardwareOfficeSecurityMeasureAccessActionType {
    SET_HARDWARE_OFFICE_SECURITY_MEASURE_ACCESS = 'SET_HARDWARE_OFFICE_SECURITY_MEASURE_ACCESS'
}

interface SetHardwareOfficeSecurityMeasureAccessAction {
    type: HardwareOfficeSecurityMeasureAccessActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_ACCESS
    payload: boolean
}

type HardwareOfficeSecurityMeasureAccessAction = SetHardwareOfficeSecurityMeasureAccessAction

const defaultHardwareOfficeSecurityMeasureAccess = false

const hardwareOfficeSecurityMeasureAccess: Reducer<boolean, HardwareOfficeSecurityMeasureAccessAction> = (state = defaultHardwareOfficeSecurityMeasureAccess, action: HardwareOfficeSecurityMeasureAccessAction) => {
    switch (action.type) {
        case HardwareOfficeSecurityMeasureAccessActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_ACCESS:
            return action.payload
        default:
            return state
    }
}

const setHardwareOfficeSecurityMeasureAccess = (hardwareOfficeSecurityMeasureAccess: boolean) => ({
    type: HardwareOfficeSecurityMeasureAccessActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_ACCESS,
    payload: hardwareOfficeSecurityMeasureAccess
})

export {hardwareOfficeSecurityMeasureAccess, setHardwareOfficeSecurityMeasureAccess}
