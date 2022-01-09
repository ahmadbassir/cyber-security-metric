import {StoreState} from '../../index'
import {selectInfrastructureAdjustmentsScore} from '../infrastructure-adjustments'
import {selectInfrastructureDepartmentScore} from './infrastructure-department'
import {selectInfrastructurePenetrationScore} from '../infrastructure-penetration'
import {selectInfrastructureSearchScore} from '../infrastructure-search'

function selectInfrastructureScore(storeState: StoreState): number {
    const adjustmentsScore = selectInfrastructureAdjustmentsScore(storeState)
    const departmentScore = selectInfrastructureDepartmentScore(storeState)
    const penetrationScore = selectInfrastructurePenetrationScore(storeState)
    const searchScore = selectInfrastructureSearchScore(storeState)

    return (departmentScore + 2 * adjustmentsScore + 2 * searchScore + penetrationScore) / 6
}

export {selectInfrastructureScore}
