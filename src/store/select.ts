import {StoreState} from './index'
import {selectAttacksScore} from './attacks/select/attacks'
import {selectAwarenessScore} from './awareness/select/awareness'
import {selectBackupScore} from './backup/select/backup'
import {selectCompanyScore} from './company/select/company'
import {selectHardwareScore} from './hardware/select/hardware'
import {selectHistoryScore} from './history/select/history'
import {selectIndustryScore} from './industry/industry'
import {selectInfrastructureScore} from './infrastructure/select/infrastructure'
import {selectInsuranceScore} from './insurance/select/insurance'
import {selectInterfacesScore} from './interfaces/select/interfaces'
import {selectIntrusionScore} from './intrusion/select/intrusion'
import {selectNetworkScore} from './network/select/network'
import {selectOfflineScore} from './offline/select/offline'
import {selectPasswordsScore} from './passwords/select/passwords'
import {selectProtectionScore} from './protection/select/protection'
import {selectRightsManagementUsedScore} from './rights/rights-managment-used'
import {selectSafetyScore} from './safety/select/safety'
import {selectSocialScore} from './social/select/social'
import {selectTestingScore} from './testing/select/testing'

function selectScore(storeState: StoreState): number {

    const numEmployees = storeState.companySize
    
    const large = numEmployees < 11 ? 1 : numEmployees/10
    const largeValue = large * 3 * (selectPasswordsScore(storeState) + selectInfrastructureScore(storeState) + selectNetworkScore(storeState))

    console.log("Large: ", large)
    console.log("Large Value: ", largeValue)

    const medium = numEmployees > 10 ? numEmployees/10 : 1
    const mediumValue = medium * (selectAwarenessScore(storeState) + selectAttacksScore(storeState) + selectHardwareScore(storeState) + selectProtectionScore(storeState))

    console.log("Mediu: ", medium)
    console.log("Medium Value: ", mediumValue)
    
    const small = numEmployees/10
    const smallValue = small * (selectBackupScore(storeState) + selectIntrusionScore(storeState) + selectRightsManagementUsedScore(storeState) + selectTestingScore(storeState))

    console.log("Small: ", small)
    console.log("Large Value: ", smallValue)

    const consistentValue = selectCompanyScore(storeState) + selectInterfacesScore(storeState) + selectSafetyScore(storeState) + selectInsuranceScore(storeState) + selectHistoryScore(storeState) + selectIndustryScore(storeState) + selectOfflineScore(storeState) + selectSocialScore(storeState)

    console.log("Consistent Value: ", consistentValue)

    return (consistentValue + smallValue + mediumValue + largeValue) / (4 * (2 + small + medium) + 9 * large)
}

export {selectScore}
