import {Reducer} from 'redux'

enum ProtectionFirewallOnEnvironmentActionType {
    SET_PROTECTION_FIREWALL_ON_ENVIRONMENT = 'SET_PROTECTION_FIREWALL_ON_ENVIRONMENT'
}

interface SetProtectionFirewallOnEnvironmentAction {
    type: ProtectionFirewallOnEnvironmentActionType.SET_PROTECTION_FIREWALL_ON_ENVIRONMENT
    payload: boolean
}

type ProtectionFirewallOnEnvironmentAction = SetProtectionFirewallOnEnvironmentAction

const defaultProtectionFirewallOnEnvironment = false

const protectionFirewallOnEnvironment: Reducer<boolean, ProtectionFirewallOnEnvironmentAction> = (state = defaultProtectionFirewallOnEnvironment, action: ProtectionFirewallOnEnvironmentAction) => {
    switch (action.type) {
        case ProtectionFirewallOnEnvironmentActionType.SET_PROTECTION_FIREWALL_ON_ENVIRONMENT:
            return action.payload
        default:
            return state
    }
}

const setProtectionFirewallOnEnvironment = (protectionFirewallOnEnvironment: boolean) => ({
    type: ProtectionFirewallOnEnvironmentActionType.SET_PROTECTION_FIREWALL_ON_ENVIRONMENT,
    payload: protectionFirewallOnEnvironment
})

export {protectionFirewallOnEnvironment, setProtectionFirewallOnEnvironment}
