import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum NetworkPublicInternalActionType {
    SET_NETWORK_PUBLIC_INTERNAL = 'SET_NETWORK_PUBLIC_INTERNAL'
}

interface SetNetworkPublicInternalAction {
    type: NetworkPublicInternalActionType.SET_NETWORK_PUBLIC_INTERNAL
    payload: YesNoNotSure
}

type NetworkPublicInternalAction = SetNetworkPublicInternalAction

const defaultNetworkPublicInternal = YesNoNotSure.NOT_SURE

const networkPublicInternal: Reducer<YesNoNotSure, NetworkPublicInternalAction> = (state = defaultNetworkPublicInternal, action: NetworkPublicInternalAction) => {
    switch (action.type) {
        case NetworkPublicInternalActionType.SET_NETWORK_PUBLIC_INTERNAL:
            return action.payload
        default:
            return state
    }
}

const setNetworkPublicInternal = (networkPublicInternal: YesNoNotSure) => ({
    type: NetworkPublicInternalActionType.SET_NETWORK_PUBLIC_INTERNAL,
    payload: networkPublicInternal
})

export {networkPublicInternal, setNetworkPublicInternal}
