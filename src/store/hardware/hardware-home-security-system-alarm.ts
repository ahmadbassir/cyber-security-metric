import {Reducer} from 'redux'

enum HardwareHomeSecuritySystemAlarmActionType {
    SET_HARDWARE_HOME_SECURITY_SYSTEM_ALARM = 'SET_HARDWARE_HOME_SECURITY_SYSTEM_ALARM'
}

interface SetHardwareHomeSecuritySystemAlarmAction {
    type: HardwareHomeSecuritySystemAlarmActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_ALARM
    payload: boolean
}

type HardwareHomeSecuritySystemAlarmAction = SetHardwareHomeSecuritySystemAlarmAction

const defaultHardwareHomeSecuritySystemAlarm = false

const hardwareHomeSecuritySystemAlarm: Reducer<boolean, HardwareHomeSecuritySystemAlarmAction> = (state = defaultHardwareHomeSecuritySystemAlarm, action: HardwareHomeSecuritySystemAlarmAction) => {
    switch (action.type) {
        case HardwareHomeSecuritySystemAlarmActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_ALARM:
            return action.payload
        default:
            return state
    }
}

const setHardwareHomeSecuritySystemAlarm = (hardwareHomeSecuritySystemAlarm: boolean) => ({
    type: HardwareHomeSecuritySystemAlarmActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_ALARM,
    payload: hardwareHomeSecuritySystemAlarm
})

export {hardwareHomeSecuritySystemAlarm, setHardwareHomeSecuritySystemAlarm}
