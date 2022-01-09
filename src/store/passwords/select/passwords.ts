import {StoreState} from '../../index'
import {selectPasswordsKnowingPeopleScore} from '../passwords-knowing-people'
import {selectPasswordsPersonalInformationScore} from '../passwords-personal-information'
import {selectPasswordsPhotosTakenScore} from '../passwords-photos-taken'
import {selectPasswordsReuseScore} from '../passwords-reuse'
import {selectPasswordsStorageScore} from './passwords-storage'
import {selectPasswordsStrengthScore} from './passwords-strength'
import {selectPasswordsUpdateFrequencyScore} from '../passwords-update-frequency'

function selectPasswordsScore(storeState: StoreState): number {
    const strengthScore = selectPasswordsStrengthScore(storeState)
    const knowledgePeopleScore = selectPasswordsKnowingPeopleScore(storeState)

    const additionalInformationScore =
        selectPasswordsReuseScore(storeState) +
        selectPasswordsUpdateFrequencyScore(storeState) +
        selectPasswordsStorageScore(storeState) +
        selectPasswordsPersonalInformationScore(storeState) +
        selectPasswordsPhotosTakenScore(storeState)
    
    return (0.375 * strengthScore + 0.125 * additionalInformationScore) / knowledgePeopleScore

}

export {selectPasswordsScore}
