import {Reducer} from 'redux'
import {StoreState} from '../index'

enum CompanySizeActionType {
    SET_COMPANY_SIZE = 'SET_COMPANY_SIZE'
}

interface SetCompanySizeAction {
    type: CompanySizeActionType.SET_COMPANY_SIZE
    payload: number
}

type CompanySizeAction = SetCompanySizeAction

const defaultCompanySize = 0

const companySize: Reducer<number, CompanySizeAction> = (state = defaultCompanySize, action: CompanySizeAction) => {
    switch (action.type) {
        case CompanySizeActionType.SET_COMPANY_SIZE:
            return action.payload
        default:
            return state
    }
}

const setCompanySize = (companySize: number) => ({
    type: CompanySizeActionType.SET_COMPANY_SIZE,
    payload: companySize
})

function selectCompanySizeScore(storeState: StoreState): number {
    const companySize = storeState.companySize
    
    let value1, value2, value3, value4, value5, value6

    // value1: FB_152
    if (companySize < 10) {
    } else if (companySize < 50) {
        value1 = 39.4;
    } else if (companySize < 100) {
        value1 = 45.6;
    } else if (companySize < 250) {
        value1 = 47.1;
    } else if (companySize < 500) {
        value1 = 47.3;
    } else {
        value1 = 58.2;
    }

     // value2: Bitkom18
    if (companySize < 10) {
    } else if (companySize < 100) {
        value2 = 68
    } else if (companySize < 500) {
        value2 = 73
    } else {
        value2 = 60
    }

    // value3: Keeper
    if (companySize < 1) {
        value3 = 8
    } else if (companySize < 51) {
        value3 = 49
    } else if (companySize < 101) {
        value3 = 15
    } else if (companySize < 251) {
        value3 = 12
    } else if (companySize < 501) {
        value3 = 11
    } else if (companySize < 1001) {
        value3 = 4
    } else {
        value3 = 3
    }

    // value4: Bundesdruckerei17
    if (companySize < 20) {
    } else if (companySize < 100) {
        value4 = 35
    } else if (companySize < 500) {
        value4 = 35
    } else if (companySize < 2000) {
        value4 = 20
    } else {
        value4 = 10
    }

    // value5: WIK17
    if (companySize < 1){
    } else if (companySize < 10) {
        value5 = 19.42
    } else if (companySize < 50) {
        value5 = 13.92
    } else if (companySize < 100) {
        value5 = 33.35
    } else if (companySize < 250) {
        value5 = 27.38
    } else if (companySize < 500) {
        value5 = 5.90
    } else {}

    // value6: Bollhoefer18
    if (companySize < 50) {
        value6 = 11
    } else if (companySize < 250) {
        value6 = 10
    } else {
        value6 = 18
    }

    const values = [value1, value2, value3, value4, value5, value6].filter(value => value) as number[]

    const sum = values.reduce((a, b) => a + b, 0)
    const avg = sum / values.length

    return (100 - avg) / 10
}

export {companySize, setCompanySize, selectCompanySizeScore}
