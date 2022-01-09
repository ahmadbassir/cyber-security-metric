import {StoreState} from '../../index'
import {selectNetworkDisconnectScore} from '../network-disconnect'
import {selectNetworkPrivateDevicesScore} from '../network-private-devices'
import {selectNetworkPublicGuestScore} from './network-public-guest'
import {selectNetworkVpnScore} from '../network-vpn'

function selectNetworkScore(storeState: StoreState): number {
    const disconnectScore = selectNetworkDisconnectScore(storeState)
    const privateDevicesScore = selectNetworkPrivateDevicesScore(storeState)
    const publicGuestScore = selectNetworkPublicGuestScore(storeState)
    const vpnScore = selectNetworkVpnScore(storeState)

    const score = ((publicGuestScore * disconnectScore) / privateDevicesScore) + 2 * vpnScore

    return score / 3
}

export {selectNetworkScore}
