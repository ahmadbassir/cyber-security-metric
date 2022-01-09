import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum NetworkVpnActionType {
    SET_NETWORK_VPN = 'SET_NETWORK_VPN'
}

interface SetNetworkVpnAction {
    type: NetworkVpnActionType.SET_NETWORK_VPN
    payload: YesNoNotSure
}

type NetworkVpnAction = SetNetworkVpnAction

const defaultNetworkVpn = YesNoNotSure.NOT_SURE

const networkVpn: Reducer<YesNoNotSure, NetworkVpnAction> = (state = defaultNetworkVpn, action: NetworkVpnAction) => {
    switch (action.type) {
        case NetworkVpnActionType.SET_NETWORK_VPN:
            return action.payload
        default:
            return state
    }
}

const setNetworkVpn = (networkVpn: YesNoNotSure) => ({
    type: NetworkVpnActionType.SET_NETWORK_VPN,
    payload: networkVpn
})

function selectNetworkVpnScore(storeState: StoreState): number {
    switch (storeState.networkVpn) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {networkVpn, setNetworkVpn, selectNetworkVpnScore}
