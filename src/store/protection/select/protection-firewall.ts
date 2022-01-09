import {StoreState} from '../../index'
import {selectProtectionFirewallOnScore} from './protection-firewall-on'
import {selectProtectionFirewallTypeScore} from '../protection-firewall-type'
import {selectProtectionFirewallUpdatedRegularlyScore} from '../protection-firewall-updated-regularly'
import {selectProtectionFirewallUsedScore} from '../protection-firewall-used'

function selectProtectionFirewallScore(storeState: StoreState): number {
    const protectionFirewallScores = [
        selectProtectionFirewallUsedScore(storeState),
        selectProtectionFirewallTypeScore(storeState),
        selectProtectionFirewallUpdatedRegularlyScore(storeState),
        selectProtectionFirewallOnScore(storeState)
    ]

    return protectionFirewallScores.reduce((a, b) => a + b, 0) / protectionFirewallScores.length
}

export {selectProtectionFirewallScore}
