import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectInterfacesUsbScore(storeState: StoreState): number {
    return (storeState.interfacesUsb === YesNoNotSure.NO) ? 10 : 0
}

export {selectInterfacesUsbScore}
