import {HardwareParkCar} from '../hardware-park-car'
import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectHardwareTransportScore(storeState: StoreState): number {

    const publicScore = storeState.hardwarePublicTransport === YesNoNotSure.YES
        ? 0.8 - 0.1 * storeState.hardwareTrainChanges
        : 0

    let carScore = 0

    if (storeState.hardwareDriveCar === YesNoNotSure.YES) {
        switch (storeState.hardwareParkCar) {
            case HardwareParkCar.OWN_GARAGE:
                carScore = 1.0
                break

            case HardwareParkCar.OWN_PROPERTY:
            case HardwareParkCar.PUBLIC_GARAGE:
                carScore = 0.9
                break

            case HardwareParkCar.PUBLIC_ROAD:
                carScore = 0.8
                break
        }
    }

    const walkScore = storeState.hardwareWalk === YesNoNotSure.YES ? 0.8 : 0

    const scores = [publicScore, carScore, walkScore]
    const nonZeroScores = scores.filter(score => score !== 0)

    if (nonZeroScores.length === 0) {
        return 0
    } else {
        return nonZeroScores.reduce((acc: number, next: number) => acc + next, 0) / nonZeroScores.length
    }
}

export {selectHardwareTransportScore}
