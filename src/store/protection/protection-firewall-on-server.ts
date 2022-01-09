import {Reducer} from 'redux'

enum ProtectionFirewallOnServerActionType {
    SET_PROTECTION_FIREWALL_ON_SERVER = 'SET_PROTECTION_FIREWALL_ON_SERVER'
}

interface SetProtectionFirewallOnServerAction {
    type: ProtectionFirewallOnServerActionType.SET_PROTECTION_FIREWALL_ON_SERVER
    payload: boolean
}

type ProtectionFirewallOnServerAction = SetProtectionFirewallOnServerAction

const defaultProtectionFirewallOnServer = false

const protectionFirewallOnServer: Reducer<boolean, ProtectionFirewallOnServerAction> = (state = defaultProtectionFirewallOnServer, action: ProtectionFirewallOnServerAction) => {
    switch (action.type) {
        case ProtectionFirewallOnServerActionType.SET_PROTECTION_FIREWALL_ON_SERVER:
            return action.payload
        default:
            return state
    }
}

const setProtectionFirewallOnServer = (protectionFirewallOnServer: boolean) => ({
    type: ProtectionFirewallOnServerActionType.SET_PROTECTION_FIREWALL_ON_SERVER,
    payload: protectionFirewallOnServer
})

export {protectionFirewallOnServer, setProtectionFirewallOnServer}
