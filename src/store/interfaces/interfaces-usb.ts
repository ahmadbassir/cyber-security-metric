import {Reducer} from 'redux'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum InterfacesUsbActionType {
    SET_INTERFACES_USB = 'SET_INTERFACES_USB'
}

interface SetInterfacesUsbAction {
    type: InterfacesUsbActionType.SET_INTERFACES_USB
    payload: YesNoNotSure
}

type InterfacesUsbAction = SetInterfacesUsbAction

const defaultInterfacesUsb = YesNoNotSure.NOT_SURE

const interfacesUsb: Reducer<YesNoNotSure, InterfacesUsbAction> = (state = defaultInterfacesUsb, action: InterfacesUsbAction) => {
    switch (action.type) {
        case InterfacesUsbActionType.SET_INTERFACES_USB:
            return action.payload
        default:
            return state
    }
}

const setInterfacesUsb = (interfacesUsb: YesNoNotSure) => ({
    type: InterfacesUsbActionType.SET_INTERFACES_USB,
    payload: interfacesUsb
})

export {interfacesUsb, setInterfacesUsb}
