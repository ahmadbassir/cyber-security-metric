import {StoreState} from '../../index'
import {selectBackupDataScore} from './backup-data'
import {selectBackupEncryptedScore} from '../backup-encrypted'
import {selectBackupFrequencyScore} from '../backup-frequency'
import {selectBackupPeopleWithAccessScore} from '../backup-people-with-access'
import {selectBackupSeparatedScore} from '../backup-separated'
import {selectBackupServerUsedScore} from '../backup-server-used'
import {selectBackupStorageTimeScore} from '../backup-storage-time'

function selectBackupScore(storeState: StoreState): number {
    const backupUsed = selectBackupServerUsedScore(storeState)

    const backupScores = [
        selectBackupDataScore(storeState),
        selectBackupEncryptedScore(storeState),
        selectBackupFrequencyScore(storeState),
        selectBackupPeopleWithAccessScore(storeState),
        selectBackupSeparatedScore(storeState),
        selectBackupStorageTimeScore(storeState)
    ]

    return backupUsed * backupScores.reduce((a, b) => a + b, 0) / backupScores.length
}

export {selectBackupScore}
