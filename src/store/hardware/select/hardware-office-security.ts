import {HardwareOfficeSecurityStorage} from '../hardware-office-security-storage'
import {StoreState} from '../../index'

function selectHardwareOfficeSecurityScore(storeState: StoreState): number {

    const measures = [
        storeState.hardwareOfficeSecurityMeasureAccess,
        storeState.hardwareOfficeSecurityMeasureAlarm,
        storeState.hardwareOfficeSecurityMeasureCamera,
        storeState.hardwareOfficeSecurityMeasureOther,
        storeState.hardwareOfficeSecurityMeasureMotion
    ]

    let measuresScore = measures.reduce((acc: number, next: boolean) => next ? acc + 2.5 : acc, 0)
    measuresScore = Math.min(measuresScore, 10)

    let storageScore

    switch (storeState.hardwareOfficeSecurityStorage) {

        case HardwareOfficeSecurityStorage.SAFE:
        case HardwareOfficeSecurityStorage.LOCKED:
            storageScore = 10
            break

        case HardwareOfficeSecurityStorage.UNLOCKED:
        case HardwareOfficeSecurityStorage.DESK:
            storageScore = 8
            break

        case HardwareOfficeSecurityStorage.OTHER:
            storageScore = 6
            break
    }

    return (2 * measuresScore + storageScore) / 3
}

export {selectHardwareOfficeSecurityScore}
