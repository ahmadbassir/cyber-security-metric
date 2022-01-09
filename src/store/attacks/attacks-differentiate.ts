import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum AttacksDifferentiateActionType {
    SET_ATTACKS_DIFFERENTIATE = 'SET_ATTACKS_DIFFERENTIATE'
}

interface SetAttacksDifferentiateAction {
    type: AttacksDifferentiateActionType.SET_ATTACKS_DIFFERENTIATE
    payload: YesNoNotSure
}

type AttacksDifferentiateAction = SetAttacksDifferentiateAction

const defaultAttacksDifferentiate = YesNoNotSure.NOT_SURE

const attacksDifferentiate: Reducer<YesNoNotSure, AttacksDifferentiateAction> = (state = defaultAttacksDifferentiate, action: AttacksDifferentiateAction) => {
    switch (action.type) {
        case AttacksDifferentiateActionType.SET_ATTACKS_DIFFERENTIATE:
            return action.payload
        default:
            return state
    }
}

const setAttacksDifferentiate = (attacksDifferentiate: YesNoNotSure) => ({
    type: AttacksDifferentiateActionType.SET_ATTACKS_DIFFERENTIATE,
    payload: attacksDifferentiate
})

export {attacksDifferentiate, setAttacksDifferentiate}
