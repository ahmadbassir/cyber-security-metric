import {Reducer} from 'redux'

enum BackupDataCluebtActionType {
    SET_BACKUP_DATA_CLUEBT = 'SET_BACKUP_DATA_CLUEBT'
}

interface SetBackupDataCluebtAction {
    type: BackupDataCluebtActionType.SET_BACKUP_DATA_CLUEBT
    payload: boolean
}

type BackupDataCluebtAction = SetBackupDataCluebtAction

const defaultBackupDataCluebt = false

const backupDataCluebt: Reducer<boolean, BackupDataCluebtAction> = (state = defaultBackupDataCluebt, action: BackupDataCluebtAction) => {
    switch (action.type) {
        case BackupDataCluebtActionType.SET_BACKUP_DATA_CLUEBT:
            return action.payload
        default:
            return state
    }
}

const setBackupDataCluebt = (backupDataCluebt: boolean) => ({
    type: BackupDataCluebtActionType.SET_BACKUP_DATA_CLUEBT,
    payload: backupDataCluebt
})

export {backupDataCluebt, setBackupDataCluebt}
