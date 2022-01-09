import {Reducer} from 'redux'

enum HardwareNetworkWifiCountActionType {
    SET_HARDWARE_NETWORK_WIFI_COUNT = 'SET_HARDWARE_NETWORK_WIFI_COUNT'
}

interface SetHardwareNetworkWifiCountAction {
    type: HardwareNetworkWifiCountActionType.SET_HARDWARE_NETWORK_WIFI_COUNT
    payload: number
}

type HardwareNetworkWifiCountAction = SetHardwareNetworkWifiCountAction

const defaultHardwareNetworkWifiCount = 1

const hardwareNetworkWifiCount: Reducer<number, HardwareNetworkWifiCountAction> = (state = defaultHardwareNetworkWifiCount, action: HardwareNetworkWifiCountAction) => {
    switch (action.type) {
        case HardwareNetworkWifiCountActionType.SET_HARDWARE_NETWORK_WIFI_COUNT:
            return action.payload
        default:
            return state
    }
}

const setHardwareNetworkWifiCount = (hardwareNetworkWifiCount: number) => ({
    type: HardwareNetworkWifiCountActionType.SET_HARDWARE_NETWORK_WIFI_COUNT,
    payload: hardwareNetworkWifiCount
})

export {hardwareNetworkWifiCount, setHardwareNetworkWifiCount}
