import {Reducer} from 'redux'

enum BackupDataTemporaryActionType {
    SET_BACKUP_DATA_TEMPORARY = 'SET_BACKUP_DATA_TEMPORARY'
}

interface SetBackupDataTemporaryAction {
    type: BackupDataTemporaryActionType.SET_BACKUP_DATA_TEMPORARY
    payload: boolean
}

type BackupDataTemporaryAction = SetBackupDataTemporaryAction

const defaultBackupDataTemporary = false

const backupDataTemporary: Reducer<boolean, BackupDataTemporaryAction> = (state = defaultBackupDataTemporary, action: BackupDataTemporaryAction) => {
    switch (action.type) {
        case BackupDataTemporaryActionType.SET_BACKUP_DATA_TEMPORARY:
            return action.payload
        default:
            return state
    }
}

const setBackupDataTemporary = (backupDataTemporary: boolean) => ({
    type: BackupDataTemporaryActionType.SET_BACKUP_DATA_TEMPORARY,
    payload: backupDataTemporary
})

export {backupDataTemporary, setBackupDataTemporary}
