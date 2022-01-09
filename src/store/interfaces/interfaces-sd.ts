import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InterfacesSdActionType {
    SET_INTERFACES_SD = 'SET_INTERFACES_SD'
}

interface SetInterfacesSdAction {
    type: InterfacesSdActionType.SET_INTERFACES_SD
    payload: YesNoNotSure
}

type InterfacesSdAction = SetInterfacesSdAction

const defaultInterfacesSd = YesNoNotSure.NOT_SURE

const interfacesSd: Reducer<YesNoNotSure, InterfacesSdAction> = (state = defaultInterfacesSd, action: InterfacesSdAction) => {
    switch (action.type) {
        case InterfacesSdActionType.SET_INTERFACES_SD:
            return action.payload
        default:
            return state
    }
}

const setInterfacesSd = (interfacesSd: YesNoNotSure) => ({
    type: InterfacesSdActionType.SET_INTERFACES_SD,
    payload: interfacesSd
})

export {interfacesSd, setInterfacesSd}
