import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectHardwareHomeSecurityVacationScore(storeState: StoreState): number {
    return storeState.hardwareHomeSecurityVacation === YesNoNotSure.NO ? 1 : 0
}

export {selectHardwareHomeSecurityVacationScore}
