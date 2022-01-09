import {Reducer} from 'redux'
import {StoreState} from '../index'

enum BackupPeopleWithAccessActionType {
    SET_BACKUP_PEOPLE_WITH_ACCESS = 'SET_BACKUP_PEOPLE_WITH_ACCESS'
}

interface SetBackupPeopleWithAccessAction {
    type: BackupPeopleWithAccessActionType.SET_BACKUP_PEOPLE_WITH_ACCESS
    payload: number
}

type BackupPeopleWithAccessAction = SetBackupPeopleWithAccessAction

const defaultBackupPeopleWithAccess = 1

const backupPeopleWithAccess: Reducer<number, BackupPeopleWithAccessAction> = (state = defaultBackupPeopleWithAccess, action: BackupPeopleWithAccessAction) => {
    switch (action.type) {
        case BackupPeopleWithAccessActionType.SET_BACKUP_PEOPLE_WITH_ACCESS:
            return action.payload
        default:
            return state
    }
}

const setBackupPeopleWithAccess = (backupPeopleWithAccess: number) => ({
    type: BackupPeopleWithAccessActionType.SET_BACKUP_PEOPLE_WITH_ACCESS,
    payload: backupPeopleWithAccess
})

function selectBackupPeopleWithAccessScore(storeState: StoreState): number {
    const peopleWithAccess = storeState.backupPeopleWithAccess

    return 1 / peopleWithAccess
}

export {backupPeopleWithAccess, setBackupPeopleWithAccess, selectBackupPeopleWithAccessScore}
