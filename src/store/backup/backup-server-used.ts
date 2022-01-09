import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum BackupServerUsedActionType {
    SET_BACKUP_SERVER_USED = 'SET_BACKUP_SERVER_USED'
}

interface SetBackupServerUsedAction {
    type: BackupServerUsedActionType.SET_BACKUP_SERVER_USED
    payload: YesNoNotSure
}

type BackupServerUsedAction = SetBackupServerUsedAction

const defaultBackupServerUsed = YesNoNotSure.NOT_SURE

const backupServerUsed: Reducer<YesNoNotSure, BackupServerUsedAction> = (state = defaultBackupServerUsed, action: BackupServerUsedAction) => {
    switch (action.type) {
        case BackupServerUsedActionType.SET_BACKUP_SERVER_USED:
            return action.payload
        default:
            return state
    }
}

const setBackupServerUsed = (backupServerUsed: YesNoNotSure) => ({
    type: BackupServerUsedActionType.SET_BACKUP_SERVER_USED,
    payload: backupServerUsed
})

function selectBackupServerUsedScore(storeState: StoreState): number {
    switch (storeState.backupServerUsed) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {backupServerUsed, setBackupServerUsed, selectBackupServerUsedScore}
