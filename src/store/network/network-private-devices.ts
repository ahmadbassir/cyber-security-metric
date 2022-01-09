import {Reducer} from 'redux'
import {StoreState} from '../index'

enum NetworkPrivateDevicesActionType {
    SET_NETWORK_PRIVATE_DEVICES = 'SET_NETWORK_PRIVATE_DEVICES'
}

interface SetNetworkPrivateDevicesAction {
    type: NetworkPrivateDevicesActionType.SET_NETWORK_PRIVATE_DEVICES
    payload: number
}

type NetworkPrivateDevicesAction = SetNetworkPrivateDevicesAction

const defaultNetworkPrivateDevices = 0

const networkPrivateDevices: Reducer<number, NetworkPrivateDevicesAction> = (state = defaultNetworkPrivateDevices, action: NetworkPrivateDevicesAction) => {
    switch (action.type) {
        case NetworkPrivateDevicesActionType.SET_NETWORK_PRIVATE_DEVICES:
            return action.payload
        default:
            return state
    }
}

const setNetworkPrivateDevices = (networkPrivateDevices: number) => ({
    type: NetworkPrivateDevicesActionType.SET_NETWORK_PRIVATE_DEVICES,
    payload: networkPrivateDevices
})

function selectNetworkPrivateDevicesScore(storeState: StoreState): number {
    return Math.pow(1.3, storeState.networkPrivateDevices)
}

export {networkPrivateDevices, setNetworkPrivateDevices, selectNetworkPrivateDevicesScore}
