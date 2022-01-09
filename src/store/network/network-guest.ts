import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum NetworkGuestActionType {
    SET_NETWORK_GUEST = 'SET_NETWORK_GUEST'
}

interface SetNetworkGuestAction {
    type: NetworkGuestActionType.SET_NETWORK_GUEST
    payload: YesNoNotSure
}

type NetworkGuestAction = SetNetworkGuestAction

const defaultNetworkGuest = YesNoNotSure.NOT_SURE

const networkGuest: Reducer<YesNoNotSure, NetworkGuestAction> = (state = defaultNetworkGuest, action: NetworkGuestAction) => {
    switch (action.type) {
        case NetworkGuestActionType.SET_NETWORK_GUEST:
            return action.payload
        default:
            return state
    }
}

const setNetworkGuest = (networkGuest: YesNoNotSure) => ({
    type: NetworkGuestActionType.SET_NETWORK_GUEST,
    payload: networkGuest
})

export {networkGuest, setNetworkGuest}
