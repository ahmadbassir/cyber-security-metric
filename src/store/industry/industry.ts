import {Reducer} from 'redux'
import {StoreState} from '../index'

enum Industry {
    AGRICULTURE = 'AGRICULTURE',
    ART = 'ART',
    CONSTRUCTION = 'CONSTRUCTION',
    EDUCATION = 'EDUCATION',
    EXTRATERRITORIAL_ORGANIZATIONS = 'EXTRATERRITORIAL_ORGANIZATIONS',
    ENERGY = 'ENERGY',
    FINANCE = 'FINANCE',
    HEALTH = 'HEALTH',
    HOSPITALITY = 'HOSPITALITY',
    INFORMATION = 'INFORMATION',
    MANUFACTURING = 'MANUFACTURING',
    MINING = 'MINING',
    OTHER_ECONOMIC = 'OTHER_ECONOMIC',
    OTHER_SERVICES = 'OTHER_SERVICES',
    PRIVATE_HOUSEHOLDS = 'PRIVATE_HOUSEHOLDS',
    PROFESSIONAL = 'PROFESSIONAL',
    PUBLIC_ADMINISTRATION = 'PUBLIC_ADMINISTRATION',
    REAL_ESTATE = 'REAL_ESTATE',
    TRADE = 'TRADE',
    TRANSPORT = 'TRANSPORT',
    WATER_SUPPLY = 'WATER_SUPPLY',
}

enum IndustryActionType {
    SET_INDUSTRY = 'SET_INDUSTRY'
}

interface SetIndustryAction {
    type: IndustryActionType.SET_INDUSTRY
    payload: Industry
}

type IndustryAction = SetIndustryAction

const defaultIndustry = Industry.AGRICULTURE

const industry: Reducer<Industry, IndustryAction> = (state = defaultIndustry, action: IndustryAction) => {
    switch (action.type) {
        case IndustryActionType.SET_INDUSTRY:
            return action.payload
        default:
            return state
    }
}

const setIndustry = (industry: Industry) => ({
    type: IndustryActionType.SET_INDUSTRY,
    payload: industry
})

function selectIndustryScore(storeState: StoreState): number {
    const industry = storeState.industry

    const industry_to_score: { [industry in Industry]: number} = {
        AGRICULTURE: 36.55,
        MINING: 71.9,
        MANUFACTURING: 29.67,
        ENERGY: 10.54,
        WATER_SUPPLY: 24.4,
        CONSTRUCTION: 43.5,
        TRADE: 31.63,
        TRANSPORT: 22.91,
        HOSPITALITY: 35.0,
        INFORMATION: 33.63,
        FINANCE: 29.7,
        REAL_ESTATE: 35.8,
        PROFESSIONAL: 46.5,
        OTHER_ECONOMIC: 52.9,
        PUBLIC_ADMINISTRATION: 11.15,
        EDUCATION: 16.175,
        HEALTH: 22.78,
        ART: 30.15,
        OTHER_SERVICES: 71.9,
        PRIVATE_HOUSEHOLDS: 71.9,
        EXTRATERRITORIAL_ORGANIZATIONS: 71.9
    }

    return (100 - industry_to_score[industry]) / 10
}

export {Industry, industry, setIndustry, selectIndustryScore}
