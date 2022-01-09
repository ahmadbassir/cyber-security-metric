import {Reducer} from 'redux'

enum BackupDataCommunicationsActionType {
    SET_BACKUP_DATA_COMMUNICATIONS = 'SET_BACKUP_DATA_COMMUNICATIONS'
}

interface SetBackupDataCommunicationsAction {
    type: BackupDataCommunicationsActionType.SET_BACKUP_DATA_COMMUNICATIONS
    payload: boolean
}

type BackupDataCommunicationsAction = SetBackupDataCommunicationsAction

const defaultBackupDataCommunications = false

const backupDataCommunications: Reducer<boolean, BackupDataCommunicationsAction> = (state = defaultBackupDataCommunications, action: BackupDataCommunicationsAction) => {
    switch (action.type) {
        case BackupDataCommunicationsActionType.SET_BACKUP_DATA_COMMUNICATIONS:
            return action.payload
        default:
            return state
    }
}

const setBackupDataCommunications = (backupDataCommunications: boolean) => ({
    type: BackupDataCommunicationsActionType.SET_BACKUP_DATA_COMMUNICATIONS,
    payload: backupDataCommunications
})

export {backupDataCommunications, setBackupDataCommunications}
