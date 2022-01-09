import { YesNoNotSure } from '../../../components/yes-no-not-sure-radios'
import {StoreState} from '../../index'

function selectSocialScore(storeState: StoreState): number {
    let policyScore = storeState.socialPolicy === YesNoNotSure.YES ? 10 : 0
    let usageScore = storeState.socialUsage === YesNoNotSure.YES ? 10 : 0
    let representedScore = storeState.socialRepresented === YesNoNotSure.NO ? 10 : 0
    let increaseScore = storeState.socialIncrease === YesNoNotSure.NO ? 10 : 0
    let newsScore = storeState.socialNews === YesNoNotSure.NO ? 10 : 0

    return (policyScore + usageScore + representedScore + increaseScore + newsScore) / 5
}

export {selectSocialScore}
