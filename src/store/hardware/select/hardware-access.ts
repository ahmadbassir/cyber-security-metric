import {StoreState} from '../../index'

function selectHardwareAccessScore(storeState: StoreState): number {
    const physicalCount = storeState.hardwareAccessPhysicalCount
    const fullCount = storeState.hardwareAccessFullCount

    const physicalCountScore = 10 - Math.pow(1.4, physicalCount - 1) / 10
    const fullCountScore = 10 / Math.pow(2, fullCount - 1)

    return (physicalCountScore + fullCountScore) / 2
}

export {selectHardwareAccessScore}
