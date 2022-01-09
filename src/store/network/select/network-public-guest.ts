import {StoreState} from '../../index'
import {YesNoNotSure} from '../../../components/yes-no-not-sure-radios'

function selectNetworkPublicGuestScore(storeState: StoreState): number {
    const guestScore = storeState.networkGuest === YesNoNotSure.YES ? 5 : 0

    let publicScore = 1
    if (storeState.networkPublic !== YesNoNotSure.NO
        && storeState.networkPublicInternal !== YesNoNotSure.NO) {

        publicScore = 0.5
    }

    return (5 + guestScore) * publicScore
}

export {selectNetworkPublicGuestScore}
