import {Reducer} from 'redux'

enum HardwareHomeSecuritySystemDogActionType {
    SET_HARDWARE_HOME_SECURITY_SYSTEM_DOG = 'SET_HARDWARE_HOME_SECURITY_SYSTEM_DOG'
}

interface SetHardwareHomeSecuritySystemDogAction {
    type: HardwareHomeSecuritySystemDogActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_DOG
    payload: boolean
}

type HardwareHomeSecuritySystemDogAction = SetHardwareHomeSecuritySystemDogAction

const defaultHardwareHomeSecuritySystemDog = false

const hardwareHomeSecuritySystemDog: Reducer<boolean, HardwareHomeSecuritySystemDogAction> = (state = defaultHardwareHomeSecuritySystemDog, action: HardwareHomeSecuritySystemDogAction) => {
    switch (action.type) {
        case HardwareHomeSecuritySystemDogActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_DOG:
            return action.payload
        default:
            return state
    }
}

const setHardwareHomeSecuritySystemDog = (hardwareHomeSecuritySystemDog: boolean) => ({
    type: HardwareHomeSecuritySystemDogActionType.SET_HARDWARE_HOME_SECURITY_SYSTEM_DOG,
    payload: hardwareHomeSecuritySystemDog
})

export {hardwareHomeSecuritySystemDog, setHardwareHomeSecuritySystemDog}
