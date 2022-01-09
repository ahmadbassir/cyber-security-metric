import {StoreState} from '../../index'

function selectPasswordsStrengthScore(storeState: StoreState): number {
    let alphabetSize = 0

    if (storeState.passwordsStrengthContainsCapital) {
        alphabetSize += 26
    }

    if (storeState.passwordsStrengthContainsLower) {
        alphabetSize += 26
    }

    if (storeState.passwordsStrengthContainsNumber) {
        alphabetSize += 10
    }

    if (storeState.passwordsStrengthContainsSpecial) {
        alphabetSize += 40
    }

    const combinations = Math.pow(alphabetSize, storeState.passwordsStrengthLength)
    const secondsToCrack = combinations / 2_147_483_600

    const oneHour = 60 * 60
    const oneDay = oneHour * 24
    const oneMonth = oneDay * 30
    const oneYear = oneMonth * 12
    const oneDecade = oneYear * 10

    if (secondsToCrack < oneHour) {
        return 0
    } else if (secondsToCrack < oneDay) {
        return 2
    } else if (secondsToCrack < oneMonth) {
        return 4
    } else if (secondsToCrack < oneYear) {
        return 6
    } else if (secondsToCrack < oneDecade) {
        return 8
    } else {
        return 10
    }
}

export {selectPasswordsStrengthScore}
