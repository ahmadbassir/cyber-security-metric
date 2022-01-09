import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum BackupEncryptedActionType {
    SET_BACKUP_ENCRYPTED = 'SET_BACKUP_ENCRYPTED'
}

interface SetBackupEncryptedAction {
    type: BackupEncryptedActionType.SET_BACKUP_ENCRYPTED
    payload: YesNoNotSure
}

type BackupEncryptedAction = SetBackupEncryptedAction

const defaultBackupEncrypted = YesNoNotSure.NOT_SURE

const backupEncrypted: Reducer<YesNoNotSure, BackupEncryptedAction> = (state = defaultBackupEncrypted, action: BackupEncryptedAction) => {
    switch (action.type) {
        case BackupEncryptedActionType.SET_BACKUP_ENCRYPTED:
            return action.payload
        default:
            return state
    }
}

const setBackupEncrypted = (backupEncrypted: YesNoNotSure) => ({
    type: BackupEncryptedActionType.SET_BACKUP_ENCRYPTED,
    payload: backupEncrypted
})

function selectBackupEncryptedScore(storeState: StoreState): number {
    switch (storeState.backupEncrypted) {
        case YesNoNotSure.YES:
            return 1
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {backupEncrypted, setBackupEncrypted, selectBackupEncryptedScore}
