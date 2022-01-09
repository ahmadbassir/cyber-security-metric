import {StoreState} from '../../index'
import {selectCompanyLocationScore} from '../company-location'
import {selectCompanySizeScore} from '../company-size'

function selectCompanyScore(storeState: StoreState): number {
    const companyScore = [
        selectCompanyLocationScore(storeState),
        selectCompanySizeScore(storeState)
    ]

    return companyScore.reduce((a, b) => a + b, 0) / companyScore.length
}

export {selectCompanyScore}
