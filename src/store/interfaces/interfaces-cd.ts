import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InterfacesCdActionType {
    SET_INTERFACES_CD = 'SET_INTERFACES_CD'
}

interface SetInterfacesCdAction {
    type: InterfacesCdActionType.SET_INTERFACES_CD
    payload: YesNoNotSure
}

type InterfacesCdAction = SetInterfacesCdAction

const defaultInterfacesCd = YesNoNotSure.NOT_SURE

const interfacesCd: Reducer<YesNoNotSure, InterfacesCdAction> = (state = defaultInterfacesCd, action: InterfacesCdAction) => {
    switch (action.type) {
        case InterfacesCdActionType.SET_INTERFACES_CD:
            return action.payload
        default:
            return state
    }
}

const setInterfacesCd = (interfacesCd: YesNoNotSure) => ({
    type: InterfacesCdActionType.SET_INTERFACES_CD,
    payload: interfacesCd
})

export {interfacesCd, setInterfacesCd}
