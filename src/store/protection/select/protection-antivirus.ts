import {StoreState} from '../../index'
import {selectProtectionAntivirusMandatoryScore} from '../protection-antivirus-mandatory'
import {selectProtectionAntivirusUpdateTypeScore} from '../protection-antivirus-update-type'
import {selectProtectionAntivirusUpdatedRegularlyScore} from '../protection-antivirus-updated-regularly'

function selectProtectionAntivirusScore(storeState: StoreState): number {
    const mandatoryScore = selectProtectionAntivirusMandatoryScore(storeState)
    const updateTypeScore = selectProtectionAntivirusUpdateTypeScore(storeState)
    const updatedRegularlyScore = selectProtectionAntivirusUpdatedRegularlyScore(storeState)

    return (mandatoryScore + updatedRegularlyScore * updateTypeScore) / 2
}

export {selectProtectionAntivirusScore}
