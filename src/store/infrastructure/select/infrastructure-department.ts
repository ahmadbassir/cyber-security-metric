import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectInfrastructureDepartmentScore(storeState: StoreState): number {
    const exists = storeState.infrastructureDepartmentExists
    const external = storeState.infrastructureDepartmentExternal
    const any = storeState.infrastructureDepartmentAny

    if (exists === YesNoNotSure.YES) {
        return 10
    }

    if (external === YesNoNotSure.YES) {
        return 9
    }

    if (any === YesNoNotSure.YES) {
        return 8
    }

    return 0
}

export {selectInfrastructureDepartmentScore}
