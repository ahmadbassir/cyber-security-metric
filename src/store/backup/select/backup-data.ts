import {StoreState} from '../../index'

function selectBackupDataScore(storeState: StoreState): number {
    const positiveData = [
        storeState.backupDataCluebt,
        storeState.backupDataCommunications,
        storeState.backupDataCreditCard,
        storeState.backupDataFiles,
        storeState.backupDataInvoicing,
        storeState.backupDataMusic,
        storeState.backupDataPersonnel,
        storeState.backupDataProjectManagement,
    ]

    const negativeData = [
        storeState.backupDataProgramFiles,
        storeState.backupDataTemporary,
        storeState.backupDataWindowsMac
    ]

    const positiveDataScore = positiveData.reduce((acc: number, next: boolean) => acc + (next ? 1 / 7 : 0), 0)
    const negativeDataScore = negativeData.reduce((acc: number, next: boolean) => acc - (next ? 0.1 : 0), 0)

    return positiveDataScore + negativeDataScore
}

export {selectBackupDataScore}
