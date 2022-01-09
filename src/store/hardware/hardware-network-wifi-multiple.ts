import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum HardwareNetworkWifiMultipleActionType {
    SET_HARDWARE_NETWORK_WIFI_MULTIPLE = 'SET_HARDWARE_NETWORK_WIFI_MULTIPLE'
}

interface SetHardwareNetworkWifiMultipleAction {
    type: HardwareNetworkWifiMultipleActionType.SET_HARDWARE_NETWORK_WIFI_MULTIPLE
    payload: YesNoNotSure
}

type HardwareNetworkWifiMultipleAction = SetHardwareNetworkWifiMultipleAction

const defaultHardwareNetworkWifiMultiple = YesNoNotSure.NOT_SURE

const hardwareNetworkWifiMultiple: Reducer<YesNoNotSure, HardwareNetworkWifiMultipleAction> = (state = defaultHardwareNetworkWifiMultiple, action: HardwareNetworkWifiMultipleAction) => {
    switch (action.type) {
        case HardwareNetworkWifiMultipleActionType.SET_HARDWARE_NETWORK_WIFI_MULTIPLE:
            return action.payload
        default:
            return state
    }
}

const setHardwareNetworkWifiMultiple = (hardwareNetworkWifiMultiple: YesNoNotSure) => ({
    type: HardwareNetworkWifiMultipleActionType.SET_HARDWARE_NETWORK_WIFI_MULTIPLE,
    payload: hardwareNetworkWifiMultiple
})

export {hardwareNetworkWifiMultiple, setHardwareNetworkWifiMultiple}
