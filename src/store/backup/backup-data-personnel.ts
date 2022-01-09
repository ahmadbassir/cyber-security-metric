import {Reducer} from 'redux'

enum BackupDataPersonnelActionType {
    SET_BACKUP_DATA_PERSONNEL = 'SET_BACKUP_DATA_PERSONNEL'
}

interface SetBackupDataPersonnelAction {
    type: BackupDataPersonnelActionType.SET_BACKUP_DATA_PERSONNEL
    payload: boolean
}

type BackupDataPersonnelAction = SetBackupDataPersonnelAction

const defaultBackupDataPersonnel = false

const backupDataPersonnel: Reducer<boolean, BackupDataPersonnelAction> = (state = defaultBackupDataPersonnel, action: BackupDataPersonnelAction) => {
    switch (action.type) {
        case BackupDataPersonnelActionType.SET_BACKUP_DATA_PERSONNEL:
            return action.payload
        default:
            return state
    }
}

const setBackupDataPersonnel = (backupDataPersonnel: boolean) => ({
    type: BackupDataPersonnelActionType.SET_BACKUP_DATA_PERSONNEL,
    payload: backupDataPersonnel
})

export {backupDataPersonnel, setBackupDataPersonnel}
