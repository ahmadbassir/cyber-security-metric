import {Reducer} from 'redux'

enum BackupDataProjectManagementActionType {
    SET_BACKUP_DATA_PROJECT_MANAGEMENT = 'SET_BACKUP_DATA_PROJECT_MANAGEMENT'
}

interface SetBackupDataProjectManagementAction {
    type: BackupDataProjectManagementActionType.SET_BACKUP_DATA_PROJECT_MANAGEMENT
    payload: boolean
}

type BackupDataProjectManagementAction = SetBackupDataProjectManagementAction

const defaultBackupDataProjectManagement = false

const backupDataProjectManagement: Reducer<boolean, BackupDataProjectManagementAction> = (state = defaultBackupDataProjectManagement, action: BackupDataProjectManagementAction) => {
    switch (action.type) {
        case BackupDataProjectManagementActionType.SET_BACKUP_DATA_PROJECT_MANAGEMENT:
            return action.payload
        default:
            return state
    }
}

const setBackupDataProjectManagement = (backupDataProjectManagement: boolean) => ({
    type: BackupDataProjectManagementActionType.SET_BACKUP_DATA_PROJECT_MANAGEMENT,
    payload: backupDataProjectManagement
})

export {backupDataProjectManagement, setBackupDataProjectManagement}
