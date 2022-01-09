import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectInsuranceScore(storeState: StoreState): number {
    if (storeState.insuranceExists === YesNoNotSure.YES) {
        return 10
    } else if (storeState.insurancePlanned === YesNoNotSure.YES) {
        return 5
    } else {
        return 0
    }
}

export {selectInsuranceScore}
