import {StoreState} from '../../index'
import {selectInterfacesCdScore} from './interfaces-cd'
import {selectInterfacesSdScore} from './interfaces-sd'
import {selectInterfacesUsbScore} from './interfaces-usb'

function selectInterfacesScore(storeState: StoreState): number {
    const cdScore = selectInterfacesCdScore(storeState)
    const sdScore = selectInterfacesSdScore(storeState)
    const usbScore = selectInterfacesUsbScore(storeState)

    return 0.2 * cdScore + 0.4 * sdScore + 0.4 * usbScore
}

export {selectInterfacesScore}
