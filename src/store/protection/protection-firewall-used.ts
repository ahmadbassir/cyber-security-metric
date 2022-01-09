import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum ProtectionFirewallUsedActionType {
    SET_PROTECTION_FIREWALL_USED = 'SET_PROTECTION_FIREWALL_USED'
}

interface SetProtectionFirewallUsedAction {
    type: ProtectionFirewallUsedActionType.SET_PROTECTION_FIREWALL_USED
    payload: YesNoNotSure
}

type ProtectionFirewallUsedAction = SetProtectionFirewallUsedAction

const defaultProtectionFirewallUsed = YesNoNotSure.NOT_SURE

const protectionFirewallUsed: Reducer<YesNoNotSure, ProtectionFirewallUsedAction> = (state = defaultProtectionFirewallUsed, action: ProtectionFirewallUsedAction) => {
    switch (action.type) {
        case ProtectionFirewallUsedActionType.SET_PROTECTION_FIREWALL_USED:
            return action.payload
        default:
            return state
    }
}

const setProtectionFirewallUsed = (protectionFirewallUsed: YesNoNotSure) => ({
    type: ProtectionFirewallUsedActionType.SET_PROTECTION_FIREWALL_USED,
    payload: protectionFirewallUsed
})

function selectProtectionFirewallUsedScore(storeState: StoreState): number {
    switch (storeState.protectionFirewallUsed) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {protectionFirewallUsed, setProtectionFirewallUsed, selectProtectionFirewallUsedScore}
