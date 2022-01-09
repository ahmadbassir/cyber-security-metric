import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectInterfacesSdScore(storeState: StoreState): number {
    return (storeState.interfacesSd === YesNoNotSure.NO) ? 10 : 0
}

export {selectInterfacesSdScore}
