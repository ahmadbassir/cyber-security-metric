import {Reducer} from 'redux'

enum BackupDataProgramFilesActionType {
    SET_BACKUP_DATA_PROGRAM_FILES = 'SET_BACKUP_DATA_PROGRAM_FILES'
}

interface SetBackupDataProgramFilesAction {
    type: BackupDataProgramFilesActionType.SET_BACKUP_DATA_PROGRAM_FILES
    payload: boolean
}

type BackupDataProgramFilesAction = SetBackupDataProgramFilesAction

const defaultBackupDataProgramFiles = false

const backupDataProgramFiles: Reducer<boolean, BackupDataProgramFilesAction> = (state = defaultBackupDataProgramFiles, action: BackupDataProgramFilesAction) => {
    switch (action.type) {
        case BackupDataProgramFilesActionType.SET_BACKUP_DATA_PROGRAM_FILES:
            return action.payload
        default:
            return state
    }
}

const setBackupDataProgramFiles = (backupDataProgramFiles: boolean) => ({
    type: BackupDataProgramFilesActionType.SET_BACKUP_DATA_PROGRAM_FILES,
    payload: backupDataProgramFiles
})

export {backupDataProgramFiles, setBackupDataProgramFiles}
