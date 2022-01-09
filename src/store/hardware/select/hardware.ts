import {StoreState} from '../../index'
import {selectHardwareAccessScore} from './hardware-access'
import {selectHardwareDeviceScore} from './hardware-device'
import {selectHardwareHomeSecurityScore} from './hardware-home-security'
import {selectHardwareInformationScore} from './hardware-information'
import {selectHardwareNetworkScore} from './hardware-network'

function selectHardwareScore(storeState: StoreState): number {
    const deviceScore = selectHardwareDeviceScore(storeState)
    const securityScore = selectHardwareHomeSecurityScore(storeState)
    const networkScore = selectHardwareNetworkScore(storeState)
    const accessScore = selectHardwareAccessScore(storeState)
    const informationScore = selectHardwareInformationScore(storeState)

    return (2 * deviceScore + 2 * securityScore + networkScore + accessScore + informationScore) / 7
}

export {selectHardwareScore}
