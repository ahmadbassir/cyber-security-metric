import {Reducer} from 'redux'

enum HardwareOfficeSecurityMeasureAlarmActionType {
    SET_HARDWARE_OFFICE_SECURITY_MEASURE_ALARM = 'SET_HARDWARE_OFFICE_SECURITY_MEASURE_ALARM'
}

interface SetHardwareOfficeSecurityMeasureAlarmAction {
    type: HardwareOfficeSecurityMeasureAlarmActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_ALARM
    payload: boolean
}

type HardwareOfficeSecurityMeasureAlarmAction = SetHardwareOfficeSecurityMeasureAlarmAction

const defaultHardwareOfficeSecurityMeasureAlarm = false

const hardwareOfficeSecurityMeasureAlarm: Reducer<boolean, HardwareOfficeSecurityMeasureAlarmAction> = (state = defaultHardwareOfficeSecurityMeasureAlarm, action: HardwareOfficeSecurityMeasureAlarmAction) => {
    switch (action.type) {
        case HardwareOfficeSecurityMeasureAlarmActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_ALARM:
            return action.payload
        default:
            return state
    }
}

const setHardwareOfficeSecurityMeasureAlarm = (hardwareOfficeSecurityMeasureAlarm: boolean) => ({
    type: HardwareOfficeSecurityMeasureAlarmActionType.SET_HARDWARE_OFFICE_SECURITY_MEASURE_ALARM,
    payload: hardwareOfficeSecurityMeasureAlarm
})

export {hardwareOfficeSecurityMeasureAlarm, setHardwareOfficeSecurityMeasureAlarm}
