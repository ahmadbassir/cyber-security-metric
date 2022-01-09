import {Reducer} from 'redux'
import {StoreState} from '../index'

enum BackupStorageTimeActionType {
    SET_BACKUP_STORAGE_TIME = 'SET_BACKUP_STORAGE_TIME'
}

interface SetBackupStorageTimeAction {
    type: BackupStorageTimeActionType.SET_BACKUP_STORAGE_TIME
    payload: number
}

type BackupStorageTimeAction = SetBackupStorageTimeAction

const defaultBackupStorageTime = 0

const backupStorageTime: Reducer<number, BackupStorageTimeAction> = (state = defaultBackupStorageTime, action: BackupStorageTimeAction) => {
    switch (action.type) {
        case BackupStorageTimeActionType.SET_BACKUP_STORAGE_TIME:
            return action.payload
        default:
            return state
    }
}

const setBackupStorageTime = (backupStorageTime: number) => ({
    type: BackupStorageTimeActionType.SET_BACKUP_STORAGE_TIME,
    payload: backupStorageTime
})

function selectBackupStorageTimeScore(storeState: StoreState): number {
    const storageTime = storeState.backupStorageTime

    if (storageTime > 60) {
        return 1
    } else {
        return storageTime / 60
    }
}

export {backupStorageTime, setBackupStorageTime, selectBackupStorageTimeScore}
