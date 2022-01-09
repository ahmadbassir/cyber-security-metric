import {Reducer} from 'redux'

enum BackupDataInvoicingActionType {
    SET_BACKUP_DATA_INVOICING = 'SET_BACKUP_DATA_INVOICING'
}

interface SetBackupDataInvoicingAction {
    type: BackupDataInvoicingActionType.SET_BACKUP_DATA_INVOICING
    payload: boolean
}

type BackupDataInvoicingAction = SetBackupDataInvoicingAction

const defaultBackupDataInvoicing = false

const backupDataInvoicing: Reducer<boolean, BackupDataInvoicingAction> = (state = defaultBackupDataInvoicing, action: BackupDataInvoicingAction) => {
    switch (action.type) {
        case BackupDataInvoicingActionType.SET_BACKUP_DATA_INVOICING:
            return action.payload
        default:
            return state
    }
}

const setBackupDataInvoicing = (backupDataInvoicing: boolean) => ({
    type: BackupDataInvoicingActionType.SET_BACKUP_DATA_INVOICING,
    payload: backupDataInvoicing
})

export {backupDataInvoicing, setBackupDataInvoicing}
