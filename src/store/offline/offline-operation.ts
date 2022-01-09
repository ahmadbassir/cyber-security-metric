import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum OfflineOperationActionType {
    SET_OFFLINE_OPERATION = 'SET_OFFLINE_OPERATION'
}

interface SetOfflineOperationAction {
    type: OfflineOperationActionType.SET_OFFLINE_OPERATION
    payload: YesNoNotSure
}

type OfflineOperationAction = SetOfflineOperationAction

const defaultOfflineOperation = YesNoNotSure.NOT_SURE

const offlineOperation: Reducer<YesNoNotSure, OfflineOperationAction> = (state = defaultOfflineOperation, action: OfflineOperationAction) => {
    switch (action.type) {
        case OfflineOperationActionType.SET_OFFLINE_OPERATION:
            return action.payload
        default:
            return state
    }
}

const setOfflineOperation = (offlineOperation: YesNoNotSure) => ({
    type: OfflineOperationActionType.SET_OFFLINE_OPERATION,
    payload: offlineOperation
})


export {offlineOperation, setOfflineOperation}
