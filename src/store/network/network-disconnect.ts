import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum NetworkDisconnectActionType {
    SET_NETWORK_DISCONNECT = 'SET_NETWORK_DISCONNECT'
}

interface SetNetworkDisconnectAction {
    type: NetworkDisconnectActionType.SET_NETWORK_DISCONNECT
    payload: YesNoNotSure
}

type NetworkDisconnectAction = SetNetworkDisconnectAction

const defaultNetworkDisconnect = YesNoNotSure.NOT_SURE

const networkDisconnect: Reducer<YesNoNotSure, NetworkDisconnectAction> = (state = defaultNetworkDisconnect, action: NetworkDisconnectAction) => {
    switch (action.type) {
        case NetworkDisconnectActionType.SET_NETWORK_DISCONNECT:
            return action.payload
        default:
            return state
    }
}

const setNetworkDisconnect = (networkDisconnect: YesNoNotSure) => ({
    type: NetworkDisconnectActionType.SET_NETWORK_DISCONNECT,
    payload: networkDisconnect
})

function selectNetworkDisconnectScore(storeState: StoreState): number {
    switch (storeState.networkDisconnect) {
        case YesNoNotSure.YES:
            return 1
        case YesNoNotSure.NO:
            return 0.5
        case YesNoNotSure.NOT_SURE:
            return 0.5
    }
}

export {networkDisconnect, setNetworkDisconnect, selectNetworkDisconnectScore}
