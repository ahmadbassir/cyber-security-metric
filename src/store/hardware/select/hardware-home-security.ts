import {HardwareHomeSecurityStorage} from '../hardware-home-security-storage'
import {StoreState} from '../../index'
import {selectHardwareHomeSecurityVacationScore} from './hardware-home-security-vacation'

function selectHardwareHomeSecurityScore(storeState: StoreState): number {
    const storage = storeState.hardwareHomeSecurityStorage
    const storageScore = storage === HardwareHomeSecurityStorage.LOCKED_ROOM ? 1 : 0.8

    const systems = [
        storeState.hardwareHomeSecuritySystemAlarm,
        storeState.hardwareHomeSecuritySystemDog,
        storeState.hardwareHomeSecuritySystemCamera,
        storeState.hardwareHomeSecuritySystemOther,
        storeState.hardwareHomeSecuritySystemMotion
    ]

    let systemsScore = systems.reduce((acc: number, next: boolean) => next ? acc + 0.25 : acc, 0)
    systemsScore = Math.min(systemsScore, 1)

    const vacationScore = selectHardwareHomeSecurityVacationScore(storeState)

    return 0.3 * storageScore + 0.6 * systemsScore + 0.1 * vacationScore
}

export {selectHardwareHomeSecurityScore}
