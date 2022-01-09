import {Reducer} from 'redux'
import {StoreState} from '../index'
import {YesNoNotSure} from '../../components/yes-no-not-sure-radios'

enum ProtectionFirewallUpdatedRegularlyActionType {
    SET_PROTECTION_FIREWALL_UPDATED_REGULARLY = 'SET_PROTECTION_FIREWALL_UPDATED_REGULARLY'
}

interface SetProtectionFirewallUpdatedRegularlyAction {
    type: ProtectionFirewallUpdatedRegularlyActionType.SET_PROTECTION_FIREWALL_UPDATED_REGULARLY
    payload: YesNoNotSure
}

type ProtectionFirewallUpdatedRegularlyAction = SetProtectionFirewallUpdatedRegularlyAction

const defaultProtectionFirewallUpdatedRegularly = YesNoNotSure.NOT_SURE

const protectionFirewallUpdatedRegularly: Reducer<YesNoNotSure, ProtectionFirewallUpdatedRegularlyAction> = (state = defaultProtectionFirewallUpdatedRegularly, action: ProtectionFirewallUpdatedRegularlyAction) => {
    switch (action.type) {
        case ProtectionFirewallUpdatedRegularlyActionType.SET_PROTECTION_FIREWALL_UPDATED_REGULARLY:
            return action.payload
        default:
            return state
    }
}

const setProtectionFirewallUpdatedRegularly = (protectionFirewallUpdatedRegularly: YesNoNotSure) => ({
    type: ProtectionFirewallUpdatedRegularlyActionType.SET_PROTECTION_FIREWALL_UPDATED_REGULARLY,
    payload: protectionFirewallUpdatedRegularly
})

function selectProtectionFirewallUpdatedRegularlyScore(storeState: StoreState): number {
    switch (storeState.protectionFirewallUpdatedRegularly) {
        case YesNoNotSure.YES:
            return 10
        case YesNoNotSure.NO:
            return 0
        case YesNoNotSure.NOT_SURE:
            return 0
    }
}

export {protectionFirewallUpdatedRegularly, setProtectionFirewallUpdatedRegularly, selectProtectionFirewallUpdatedRegularlyScore}
