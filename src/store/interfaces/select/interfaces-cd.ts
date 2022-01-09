import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectInterfacesCdScore(storeState: StoreState): number {
    return (storeState.interfacesCd === YesNoNotSure.NO) ? 10 : 0
}

export {selectInterfacesCdScore}
