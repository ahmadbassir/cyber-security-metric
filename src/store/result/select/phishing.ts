import {StoreState} from '../../index'
import {selectAwarenessScore} from '../../awareness/select/awareness'
import {selectHardwareHomeSecurityVacationScore} from '../../hardware/select/hardware-home-security-vacation'
import {selectIntrusionScore} from '../../intrusion/select/intrusion'
import {selectProtectionAntivirusScore} from '../../protection/select/protection-antivirus'
import {selectProtectionFirewallScore} from '../../protection/select/protection-firewall'
import {selectSocialScore} from '../../social/select/social'

function selectPhishingScore(storeState: StoreState): number {
    const antivirusScore = selectProtectionAntivirusScore(storeState)
    const awarenessScore = selectAwarenessScore(storeState)
    const firewallScore = selectProtectionFirewallScore(storeState)
    const intrusionScore = selectIntrusionScore(storeState)
    const socialScore = selectSocialScore(storeState)
    const vacationScore = selectHardwareHomeSecurityVacationScore(storeState)

    return (
        firewallScore +
        antivirusScore +
        awarenessScore * 2 +
        socialScore +
        vacationScore +
        intrusionScore
    ) / 7
}

export {selectPhishingScore}
