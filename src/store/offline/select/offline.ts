import { YesNoNotSure } from '../../../components/yes-no-not-sure-radios'
import {StoreState} from '../../index'

function selectOfflineScore(storeState: StoreState): number {
    return storeState.offlineOperation === YesNoNotSure.YES ? 10 : 0
}


export {selectOfflineScore}
