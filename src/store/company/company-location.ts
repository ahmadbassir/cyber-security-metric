import {Reducer} from 'redux'
import {StoreState} from '../index'

enum CompanyLocation {
    AUSTRALIA = 'AUSTRALIA',
    BELGIUM = 'BELGIUM',
    CANADA = 'CANADA',
    FRANCE = 'FRANCE',
    GERMANY = 'GERMANY',
    IRELAND = 'IRELAND',
    ITALY = 'ITALY',
    JAPAN = 'JAPAN',
    NETHERLANDS = 'NETHERLANDS',
    SAUDI_ARABIA = 'SAUDI_ARABIA',
    SINGAPORE = 'SINGAPORE',
    SPAIN = 'SPAIN',
    SWEDEN = 'SWEDEN',
    UAE = 'UAE',
    UK = 'UK',
    USA = 'USA',
    OTHER = 'OTHER'
}

enum CompanyLocationActionType {
    SET_COMPANY_LOCATION = 'SET_COMPANY_LOCATION'
}

interface SetCompanyLocationAction {
    type: CompanyLocationActionType.SET_COMPANY_LOCATION
    payload: CompanyLocation
}

type CompanyLocationAction = SetCompanyLocationAction

const defaultCompanyLocation = CompanyLocation.OTHER

const companyLocation: Reducer<CompanyLocation, CompanyLocationAction> = (state = defaultCompanyLocation, action: CompanyLocationAction) => {
    switch (action.type) {
        case CompanyLocationActionType.SET_COMPANY_LOCATION:
            return action.payload
        default:
            return state
    }
}

const setCompanyLocation = (companyLocation: CompanyLocation) => ({
    type: CompanyLocationActionType.SET_COMPANY_LOCATION,
    payload: companyLocation
})

function selectCompanyLocationScore(storeState: StoreState): number {
    const companyLocation: CompanyLocation = storeState.companyLocation

    //hiscox21
    const other1 = 43
    const dict1: { [companyLocation in CompanyLocation]?: number } = {
        BELGIUM: 42,
        FRANCE: 49,
        GERMANY: 46,
        IRELAND: 39,
        NETHERLANDS: 41,
        SPAIN: 53,
        UK: 36,
        USA: 40
    }

    // proofpoint
    const other2 = 58
    const dict2: { [companyLocation in CompanyLocation]?: number } = {
        AUSTRALIA: 45,
        CANADA: 63,
        FRANCE: 56,
        GERMANY: 64,
        ITALY: 58,
        JAPAN: 54,
        NETHERLANDS: 53,
        SAUDI_ARABIA: 69,
        SINGAPORE: 39,
        SPAIN: 56,
        SWEDEN: 55,
        UAE: 76,
        UK: 60,
        USA: 65
    }

    // hiscox20
    const other3 = 39.625
    const dict3: { [companyLocation in CompanyLocation]?: number } = {
        BELGIUM: 49,
        FRANCE: 34,
        GERMANY: 41,
        IRELAND: 41,
        NETHERLANDS: 37,
        SPAIN: 44,
        UK: 30,
        USA: 41
    }

    // hiscox19
    const other4 = 63
    const dict4: { [companyLocation in CompanyLocation]?: number } = {
        BELGIUM: 71,
        FRANCE: 67,
        GERMANY: 61,
        NETHERLANDS: 68,
        SPAIN: 66,
        UK: 55,
        USA: 53
    }

    const companyLocations: number[] = []

    if (companyLocation in dict1) {
        // companyLocation must be in dict1 => dict1[companyLocation] must be number
        companyLocations.push(dict1[companyLocation] as number)
    }

    if (companyLocation in dict2) {
        // companyLocation must be in dict2 => dict2[companyLocation] must be number
        companyLocations.push(dict2[companyLocation] as number)
    }

    if (companyLocation in dict3) {
        // companyLocation must be in dict3 => dict3[companyLocation] must be number
        companyLocations.push(dict3[companyLocation] as number)
    }

    if (companyLocation in dict4) {
        // companyLocation must be in dict4 => dict4[companyLocation] must be number
        companyLocations.push(dict4[companyLocation] as number)
    }

    let avg

    if (companyLocations.length > 0) {
        const sum = companyLocations.reduce((a, b) => a + b, 0)
        avg = sum / companyLocations.length
    } else {
        avg = (other1 + other2 + other3 + other4) / 4
    }

    return (100 - avg) / 10
}

export {CompanyLocation, companyLocation, setCompanyLocation, selectCompanyLocationScore}
