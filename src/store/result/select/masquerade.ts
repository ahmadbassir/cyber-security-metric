import {StoreState} from '../../index'
import {selectAwarenessScore} from '../../awareness/select/awareness'
import {selectHardwareHomeSecurityVacationScore} from '../../hardware/select/hardware-home-security-vacation'
import {selectRightsManagementUsedScore} from '../../rights/rights-managment-used'
import {selectSocialScore} from '../../social/select/social'

function selectMasqueradeScore(storeState: StoreState): number {
    const awarenessScore = selectAwarenessScore(storeState)
    const rightsScore = selectRightsManagementUsedScore(storeState)
    const socialScore = selectSocialScore(storeState)
    const vacationScore = selectHardwareHomeSecurityVacationScore(storeState)

    return (awarenessScore + 0.5 * socialScore + 0.5 * vacationScore + rightsScore) / 3
}

export {selectMasqueradeScore}
