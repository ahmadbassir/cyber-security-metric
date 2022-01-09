import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectHardwareNetworkScore(storeState: StoreState): number {
    const wifiMultiple = storeState.hardwareNetworkWifiMultiple
    const wifiCount = storeState.hardwareNetworkWifiCount

    return wifiMultiple === YesNoNotSure.YES
        ? Math.max(11 - wifiCount, 0)
        : 10
}

export {selectHardwareNetworkScore}
