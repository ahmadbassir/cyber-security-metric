import {Reducer} from 'redux'

enum BackupDataCreditCardActionType {
    SET_BACKUP_DATA_CREDIT_CARD = 'SET_BACKUP_DATA_CREDIT_CARD'
}

interface SetBackupDataCreditCardAction {
    type: BackupDataCreditCardActionType.SET_BACKUP_DATA_CREDIT_CARD
    payload: boolean
}

type BackupDataCreditCardAction = SetBackupDataCreditCardAction

const defaultBackupDataCreditCard = false

const backupDataCreditCard: Reducer<boolean, BackupDataCreditCardAction> = (state = defaultBackupDataCreditCard, action: BackupDataCreditCardAction) => {
    switch (action.type) {
        case BackupDataCreditCardActionType.SET_BACKUP_DATA_CREDIT_CARD:
            return action.payload
        default:
            return state
    }
}

const setBackupDataCreditCard = (backupDataCreditCard: boolean) => ({
    type: BackupDataCreditCardActionType.SET_BACKUP_DATA_CREDIT_CARD,
    payload: backupDataCreditCard
})

export {backupDataCreditCard, setBackupDataCreditCard}
