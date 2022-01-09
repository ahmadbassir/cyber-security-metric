import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectNetworkDisconnectScore, setNetworkDisconnect} from '../store/network/network-disconnect'
import {selectNetworkPrivateDevicesScore, setNetworkPrivateDevices} from '../store/network/network-private-devices'
import {selectNetworkPublicGuestScore} from '../store/network/select/network-public-guest'
import {selectNetworkScore} from '../store/network/select/network'
import {selectNetworkVpnScore, setNetworkVpn} from '../store/network/network-vpn'
import {setNetworkGuest} from '../store/network/network-guest'
import {setNetworkPublicInternal} from '../store/network/network-public-internal'
import {setNetworkPublic} from '../store/network/network-public'

const mapStateToProps = (storeState: StoreState) => ({
    networkDisconnect: storeState.networkDisconnect,
    networkGuest: storeState.networkGuest,
    networkPrivateDevices: storeState.networkPrivateDevices,
    networkPublic: storeState.networkPublic,
    networkPublicInternal: storeState.networkPublicInternal,
    networkVpn: storeState.networkVpn,

    networkPublicGuestScore: selectNetworkPublicGuestScore(storeState),
    networkDisconnectScore: selectNetworkDisconnectScore(storeState),
    networkPrivateDevicesScore: selectNetworkPrivateDevicesScore(storeState),
    networkVpnScore: selectNetworkVpnScore(storeState),

    networkScore: selectNetworkScore(storeState)
})

const mapDispatchToProps = {
    setNetworkDisconnect,
    setNetworkGuest,
    setNetworkPrivateDevices,
    setNetworkPublic,
    setNetworkPublicInternal,
    setNetworkVpn
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedNetworkFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onNetworkDisconnectChange = this.onNetworkDisconnectChange.bind(this)
        this.onNetworkGuestChange = this.onNetworkGuestChange.bind(this)
        this.onNetworkPrivateDevicesChange = this.onNetworkPrivateDevicesChange.bind(this)
        this.onNetworkPublicChange = this.onNetworkPublicChange.bind(this)
        this.onNetworkPublicInternalChange = this.onNetworkPublicInternalChange.bind(this)
        this.onNetworkVpnChange = this.onNetworkVpnChange.bind(this)
    }

    onNetworkDisconnectChange(event: ChangeEvent<HTMLInputElement>): void {
        const disconnect = event.target.value as YesNoNotSure
        this.props.setNetworkDisconnect(disconnect)
    }

    onNetworkGuestChange(event: ChangeEvent<HTMLInputElement>): void {
        const guest = event.target.value as YesNoNotSure
        this.props.setNetworkGuest(guest)
    }

    onNetworkPrivateDevicesChange(event: ChangeEvent<HTMLInputElement>): void {
        const privateDevices = Number(event.target.value)
        this.props.setNetworkPrivateDevices(privateDevices)
    }

    onNetworkPublicChange(event: ChangeEvent<HTMLInputElement>): void {
        const public_ = event.target.value as YesNoNotSure
        this.props.setNetworkPublic(public_)
    }

    onNetworkPublicInternalChange(event: ChangeEvent<HTMLInputElement>): void {
        const publicInternal = event.target.value as YesNoNotSure
        this.props.setNetworkPublicInternal(publicInternal)
    }

    onNetworkVpnChange(event: ChangeEvent<HTMLInputElement>): void {
        const vpn = event.target.value as YesNoNotSure
        this.props.setNetworkVpn(vpn)
    }

    render() {
        return <>
            <h2>4. WiFi / VPN</h2>
            <p className="additional-information-h2">In this aspect, it is assumed that a private internal network
                already exists. This is the second of the three most important aspects</p>
            <h3>4.1. Public/Guest Network</h3>
            <p className="additional-information-h3">A network with a simple password, such as in a cafeteria or
                community room, is also counted as a public network</p>

            <p>
                Does your company provide a guest network?
            </p>

            <YesNoNotSureRadios name="network-guest"
                                selection={this.props.networkGuest}
                                onChange={this.onNetworkGuestChange}/>

            <p>
                Does your company provide a public network?
            </p>

            <YesNoNotSureRadios name="network-public"
                                selection={this.props.networkPublic}
                                onChange={this.onNetworkPublicChange}/>

            <p>
                Are your own devices connected to the public network?
            </p>

            <YesNoNotSureRadios name="network-public-internal"
                                selection={this.props.networkPublicInternal}
                                disabled={this.props.networkPublic !== YesNoNotSure.YES}
                                onChange={this.onNetworkPublicInternalChange}/>

            <h3>4.2. Password Change & Automatic Disconnect</h3>
            <p className="additional-information-h3">Automatic disconnection and password changes reduce the risk of
                already connected devices causing damage</p>

            <p>
                Are passwords changed or are devices automatically disconnected from the network
                after some time?
            </p>

            <YesNoNotSureRadios name="network-disconnect"
                                selection={this.props.networkDisconnect}
                                onChange={this.onNetworkDisconnectChange}/>

            <h3>4.3. Private Devices</h3>
            <p className="additional-information-h3">This refers to devices such as cell phones, laptops, tablets,
                etc.</p>

            <p>
                How many private devices are connected to the internal WiFi?
            </p>

            <label htmlFor="network-private-devices">Number of devices</label>
            <input id="network-private-devices" className="ml-16"
                   type="number" min="0" defaultValue={this.props.networkPrivateDevices}
                   onChange={this.onNetworkPrivateDevicesChange}/>

            <h3>4.4. VPN</h3>
            <p className="additional-information-h3">By means of VPN, Internet traffic is encrypted and one's identity
                is disguised, thus increasing security</p>

            <p>
                Is a VPN being used?
            </p>

            <YesNoNotSureRadios name="network-vpn"
                                selection={this.props.networkVpn}
                                onChange={this.onNetworkVpnChange}/>
        </>
    }
}

const NetworkFragment = connector(UnconnectedNetworkFragment)

export {NetworkFragment}
