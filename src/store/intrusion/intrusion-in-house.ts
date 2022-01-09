import {Reducer} from 'redux'
import { YesNoNotSure } from '../../components/yes-no-not-sure-radios'
import {StoreState} from '../index'


enum IntrusionInHouseActionType {
    SET_INTRUSION_IN_HOUSE = 'SET_INTRUSION_IN_HOUSE'
}

interface SetIntrusionInHouseAction {
    type: IntrusionInHouseActionType.SET_INTRUSION_IN_HOUSE
    payload: YesNoNotSure
}

type IntrusionInHouseAction = SetIntrusionInHouseAction

const defaultIntrusionInHouse = YesNoNotSure.NO

const intrusionInHouse: Reducer<YesNoNotSure, IntrusionInHouseAction> = (state = defaultIntrusionInHouse, action: IntrusionInHouseAction) => {
    switch (action.type) {
        case IntrusionInHouseActionType.SET_INTRUSION_IN_HOUSE:
            return action.payload
        default:
            return state
    }
}

const setIntrusionInHouse = (intrusionInHouse: YesNoNotSure) => ({
    type: IntrusionInHouseActionType.SET_INTRUSION_IN_HOUSE,
    payload: intrusionInHouse
})

function selectIntrusionInHouseScore(storeState: StoreState): number {
    switch (storeState.intrusionInHouse) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {intrusionInHouse, setIntrusionInHouse, selectIntrusionInHouseScore}
