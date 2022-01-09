import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'
import {selectHardwareHomeSecurityScore} from './hardware-home-security'
import {selectHardwareTransportScore} from './hardware-transport'

function selectHardwareDeviceScore(storeState: StoreState): number {
    const homeSecurityScore = selectHardwareHomeSecurityScore(storeState)
    const transportScore = selectHardwareTransportScore(storeState)

    const homeScore = storeState.hardwareHome === YesNoNotSure.NO ? 10 : 1

    return homeScore * (transportScore + homeSecurityScore)
}

export {selectHardwareDeviceScore}
