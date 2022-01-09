import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectSafetyCaptchasScore(storeState: StoreState): number {
    switch (storeState.safetyCaptchasUsed) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {selectSafetyCaptchasScore}
