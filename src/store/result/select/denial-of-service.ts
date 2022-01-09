import {StoreState} from '../../index'
import {selectBackupScore} from '../../backup/select/backup'
import {selectIntrusionScore} from '../../intrusion/select/intrusion'
import {selectOfflineScore} from '../../offline/select/offline'
import {selectProtectionFirewallScore} from '../../protection/select/protection-firewall'
import {selectSocialScore} from '../../social/select/social'
import {selectTestingSimulationScore} from '../../testing/select/testing-simulation'

function selectDenialOfServiceScore(storeState: StoreState): number {
    const backupScore = selectBackupScore(storeState)
    const firewallScore = selectProtectionFirewallScore(storeState)
    const intrusionScore = selectIntrusionScore(storeState)
    const offlineScore = selectOfflineScore(storeState)
    const simulationScore = selectTestingSimulationScore(storeState)
    const socialScore = selectSocialScore(storeState)

    return (
        firewallScore +
        intrusionScore +
        backupScore * 2 +
        simulationScore +
        offlineScore * 2 +
        socialScore
    ) / 8
}

export {selectDenialOfServiceScore}
