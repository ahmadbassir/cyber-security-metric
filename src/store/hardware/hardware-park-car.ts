import {Reducer} from 'redux'

enum HardwareParkCar {
    PUBLIC_ROAD = 'PUBLIC_ROAD',
    OWN_PROPERTY = 'OWN_PROPERTY',
    PUBLIC_GARAGE = 'PUBLIC_GARAGE',
    OWN_GARAGE = 'OWN_GARAGE'
}

enum HardwareParkCarActionType {
    SET_HARDWARE_PARK_CAR = 'SET_HARDWARE_PARK_CAR'
}

interface SetHardwareParkCarAction {
    type: HardwareParkCarActionType.SET_HARDWARE_PARK_CAR
    payload: HardwareParkCar
}

type HardwareParkCarAction = SetHardwareParkCarAction

const defaultHardwareParkCar = HardwareParkCar.PUBLIC_ROAD

const hardwareParkCar: Reducer<HardwareParkCar, HardwareParkCarAction> = (state = defaultHardwareParkCar, action: HardwareParkCarAction) => {
    switch (action.type) {
        case HardwareParkCarActionType.SET_HARDWARE_PARK_CAR:
            return action.payload
        default:
            return state
    }
}

const setHardwareParkCar = (hardwareParkCar: HardwareParkCar) => ({
    type: HardwareParkCarActionType.SET_HARDWARE_PARK_CAR,
    payload: hardwareParkCar
})

export {HardwareParkCar, hardwareParkCar, setHardwareParkCar}
