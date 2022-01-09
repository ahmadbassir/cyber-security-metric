import {Reducer} from 'redux'

enum BackupDataMusicActionType {
    SET_BACKUP_DATA_MUSIC = 'SET_BACKUP_DATA_MUSIC'
}

interface SetBackupDataMusicAction {
    type: BackupDataMusicActionType.SET_BACKUP_DATA_MUSIC
    payload: boolean
}

type BackupDataMusicAction = SetBackupDataMusicAction

const defaultBackupDataMusic = false

const backupDataMusic: Reducer<boolean, BackupDataMusicAction> = (state = defaultBackupDataMusic, action: BackupDataMusicAction) => {
    switch (action.type) {
        case BackupDataMusicActionType.SET_BACKUP_DATA_MUSIC:
            return action.payload
        default:
            return state
    }
}

const setBackupDataMusic = (backupDataMusic: boolean) => ({
    type: BackupDataMusicActionType.SET_BACKUP_DATA_MUSIC,
    payload: backupDataMusic
})

export {backupDataMusic, setBackupDataMusic}
