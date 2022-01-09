import {Reducer} from 'redux'

enum ProtectionFirewallOnComputerActionType {
    SET_FIREWALL_ON_COMPUTER = 'SET_FIREWALL_ON_COMPUTER'
}

interface SetProtectionFirewallOnComputerAction {
    type: ProtectionFirewallOnComputerActionType.SET_FIREWALL_ON_COMPUTER
    payload: boolean
}

type ProtectionFirewallOnComputerAction = SetProtectionFirewallOnComputerAction

const defaultProtectionFirewallOnComputer = false

const protectionFirewallOnComputer: Reducer<boolean, ProtectionFirewallOnComputerAction> = (state = defaultProtectionFirewallOnComputer, action: ProtectionFirewallOnComputerAction) => {
    switch (action.type) {
        case ProtectionFirewallOnComputerActionType.SET_FIREWALL_ON_COMPUTER:
            return action.payload
        default:
            return state
    }
}

const setProtectionFirewallOnComputer = (protectionFirewallOnComputer: boolean) => ({
    type: ProtectionFirewallOnComputerActionType.SET_FIREWALL_ON_COMPUTER,
    payload: protectionFirewallOnComputer
})

export {protectionFirewallOnComputer, setProtectionFirewallOnComputer}
