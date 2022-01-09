import {StoreState} from '../../index'

function selectProtectionFirewallOnScore(storeState: StoreState): number {

    const firewalls = [
        storeState.protectionFirewallOnComputer,
        storeState.protectionFirewallOnEnvironment,
        storeState.protectionFirewallOnServer
    ]

    const numberOfFirewalls = firewalls.reduce((acc: number, next: boolean) => next ? acc + 1 : acc, 0)

    return numberOfFirewalls > 0 ? 10 : 8
}

export {selectProtectionFirewallOnScore}
