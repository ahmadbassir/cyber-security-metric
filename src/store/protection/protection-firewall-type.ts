import {Reducer} from 'redux'
import {StoreState} from '../index'

enum ProtectionFirewallType {
    SIMPLE = 'SIMPLE',
    ADVANCED = 'ADVANCED',
    NOT_SURE = 'NOT_SURE'
}

enum ProtectionFirewallTypeActionType {
    SET_PROTECTION_FIREWALL_TYPE = 'SET_PROTECTION_FIREWALL_TYPE'
}

interface SetProtectionFirewallTypeAction {
    type: ProtectionFirewallTypeActionType.SET_PROTECTION_FIREWALL_TYPE
    payload: ProtectionFirewallType
}

type ProtectionFirewallTypeAction = SetProtectionFirewallTypeAction

const defaultProtectionFirewallType = ProtectionFirewallType.SIMPLE

const protectionFirewallType: Reducer<ProtectionFirewallType, ProtectionFirewallTypeAction> = (state = defaultProtectionFirewallType, action: ProtectionFirewallTypeAction) => {
    switch (action.type) {
        case ProtectionFirewallTypeActionType.SET_PROTECTION_FIREWALL_TYPE:
            return action.payload
        default:
            return state
    }
}

const setProtectionFirewallType = (protectionFirewallType: ProtectionFirewallType) => ({
    type: ProtectionFirewallTypeActionType.SET_PROTECTION_FIREWALL_TYPE,
    payload: protectionFirewallType
})

function selectProtectionFirewallTypeScore(storeState: StoreState): number {
    switch (storeState.protectionFirewallType) {
        case ProtectionFirewallType.SIMPLE:
            return 20 / 3
        case ProtectionFirewallType.ADVANCED:
            return 10
        case ProtectionFirewallType.NOT_SURE:
            return 20 / 3
    }
}

export {ProtectionFirewallType, protectionFirewallType, setProtectionFirewallType, selectProtectionFirewallTypeScore}
