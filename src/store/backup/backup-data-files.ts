import {Reducer} from 'redux'

enum BackupDataFilesActionType {
    SET_BACKUP_DATA_FILES = 'SET_BACKUP_DATA_FILES'
}

interface SetBackupDataFilesAction {
    type: BackupDataFilesActionType.SET_BACKUP_DATA_FILES
    payload: boolean
}

type BackupDataFilesAction = SetBackupDataFilesAction

const defaultBackupDataFiles = false

const backupDataFiles: Reducer<boolean, BackupDataFilesAction> = (state = defaultBackupDataFiles, action: BackupDataFilesAction) => {
    switch (action.type) {
        case BackupDataFilesActionType.SET_BACKUP_DATA_FILES:
            return action.payload
        default:
            return state
    }
}

const setBackupDataFiles = (backupDataFiles: boolean) => ({
    type: BackupDataFilesActionType.SET_BACKUP_DATA_FILES,
    payload: backupDataFiles
})

export {backupDataFiles, setBackupDataFiles}
