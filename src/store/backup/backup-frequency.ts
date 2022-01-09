import {Reducer} from 'redux'
import {StoreState} from '../index'

enum BackupFrequencyActionType {
    SET_BACKUP_FREQUENCY = 'SET_BACKUP_FREQUENCY'
}

interface SetBackupFrequencyAction {
    type: BackupFrequencyActionType.SET_BACKUP_FREQUENCY
    payload: number
}

type BackupFrequencyAction = SetBackupFrequencyAction

const defaultBackupFrequency = 1

const backupFrequency: Reducer<number, BackupFrequencyAction> = (state = defaultBackupFrequency, action: BackupFrequencyAction) => {
    switch (action.type) {
        case BackupFrequencyActionType.SET_BACKUP_FREQUENCY:
            return action.payload
        default:
            return state
    }
}

const setBackupFrequency = (backupFrequency: number) => ({
    type: BackupFrequencyActionType.SET_BACKUP_FREQUENCY,
    payload: backupFrequency
})

function selectBackupFrequencyScore(storeState: StoreState): number {
    const frequency = storeState.backupFrequency

    if (frequency <= 0) {
        return 0
    } else if (frequency>11){
        return 0.1
    }else{
        return 1.075 - 0.075 * frequency
    }
}

export {backupFrequency, setBackupFrequency, selectBackupFrequencyScore}
