import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum BackupSeparatedActionType {
    SET_BACKUP_SEPARATED = 'SET_BACKUP_SEPARATED'
}

interface SetBackupSeparatedAction {
    type: BackupSeparatedActionType.SET_BACKUP_SEPARATED
    payload: YesNoNotSure
}

type BackupSeparatedAction = SetBackupSeparatedAction

const defaultBackupSeparated = YesNoNotSure.NOT_SURE

const backupSeparated: Reducer<YesNoNotSure, BackupSeparatedAction> = (state = defaultBackupSeparated, action: BackupSeparatedAction) => {
    switch (action.type) {
        case BackupSeparatedActionType.SET_BACKUP_SEPARATED:
            return action.payload
        default:
            return state
    }
}

const setBackupSeparated = (backupSeparated: YesNoNotSure) => ({
    type: BackupSeparatedActionType.SET_BACKUP_SEPARATED,
    payload: backupSeparated
})

function selectBackupSeparatedScore(storeState: StoreState): number {
    switch (storeState.backupSeparated) {
        case YesNoNotSure.YES:
            return 1
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {backupSeparated, setBackupSeparated, selectBackupSeparatedScore}
