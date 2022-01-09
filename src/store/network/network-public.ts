import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum NetworkPublicActionType {
    SET_NETWORK_PUBLIC = 'SET_NETWORK_PUBLIC'
}

interface SetNetworkPublicAction {
    type: NetworkPublicActionType.SET_NETWORK_PUBLIC
    payload: YesNoNotSure
}

type NetworkPublicAction = SetNetworkPublicAction

const defaultNetworkPublic = YesNoNotSure.NOT_SURE

const networkPublic: Reducer<YesNoNotSure, NetworkPublicAction> = (state = defaultNetworkPublic, action: NetworkPublicAction) => {
    switch (action.type) {
        case NetworkPublicActionType.SET_NETWORK_PUBLIC:
            return action.payload
        default:
            return state
    }
}

const setNetworkPublic = (networkPublic: YesNoNotSure) => ({
    type: NetworkPublicActionType.SET_NETWORK_PUBLIC,
    payload: networkPublic
})

export {networkPublic, setNetworkPublic}
