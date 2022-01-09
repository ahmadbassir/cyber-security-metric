import {Reducer} from 'redux'

enum BackupDataWindowsMacActionType {
    SET_BACKUP_DATA_WINDOWS_MAC = 'SET_BACKUP_DATA_WINDOWS_MAC'
}

interface SetBackupDataWindowsMacAction {
    type: BackupDataWindowsMacActionType.SET_BACKUP_DATA_WINDOWS_MAC
    payload: boolean
}

type BackupDataWindowsMacAction = SetBackupDataWindowsMacAction

const defaultBackupDataWindowsMac = false

const backupDataWindowsMac: Reducer<boolean, BackupDataWindowsMacAction> = (state = defaultBackupDataWindowsMac, action: BackupDataWindowsMacAction) => {
    switch (action.type) {
        case BackupDataWindowsMacActionType.SET_BACKUP_DATA_WINDOWS_MAC:
            return action.payload
        default:
            return state
    }
}

const setBackupDataWindowsMac = (backupDataWindowsMac: boolean) => ({
    type: BackupDataWindowsMacActionType.SET_BACKUP_DATA_WINDOWS_MAC,
    payload: backupDataWindowsMac
})

export {backupDataWindowsMac, setBackupDataWindowsMac}
