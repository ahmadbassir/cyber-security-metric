import {StoreState} from '../../index'
import {selectProtectionAntivirusScore} from './protection-antivirus'
import {selectProtectionFirewallScore} from './protection-firewall'

function selectProtectionScore(storeState: StoreState): number {
    const antivirusScore = selectProtectionAntivirusScore(storeState)
    const firewallScore = selectProtectionFirewallScore(storeState)

    return (antivirusScore + firewallScore) / 2
}

export {selectProtectionScore}
