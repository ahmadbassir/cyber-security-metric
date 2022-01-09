import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectInterfacesCdScore} from '../store/interfaces/select/interfaces-cd'
import {selectInterfacesScore} from '../store/interfaces/select/interfaces'
import {selectInterfacesSdScore} from '../store/interfaces/select/interfaces-sd'
import {selectInterfacesUsbScore} from '../store/interfaces/select/interfaces-usb'
import {setInterfacesCd} from '../store/interfaces/interfaces-cd'
import {setInterfacesSd} from '../store/interfaces/interfaces-sd'
import {setInterfacesUsb} from '../store/interfaces/interfaces-usb'

const mapStateToProps = (storeState: StoreState) => ({
    interfacesCd: storeState.interfacesCd,
    interfacesSd: storeState.interfacesSd,
    interfacesUsb: storeState.interfacesUsb,

    interfacesCdScore: selectInterfacesCdScore(storeState),
    interfacesSdScore: selectInterfacesSdScore(storeState),
    interfacesUsbScore: selectInterfacesUsbScore(storeState),

    interfacesScore: selectInterfacesScore(storeState)
})

const mapDispatchToProps = {
    setInterfacesCd,
    setInterfacesSd,
    setInterfacesUsb
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedInterfacesFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onInterfacesCdChange = this.onInterfacesCdChange.bind(this)
        this.onInterfacesSdChange = this.onInterfacesSdChange.bind(this)
        this.onInterfacesUsbChange = this.onInterfacesUsbChange.bind(this)
    }

    onInterfacesCdChange(event: ChangeEvent<HTMLInputElement>): void {
        const interfacesCd = event.target.value as YesNoNotSure
        this.props.setInterfacesCd(interfacesCd)
    }

    onInterfacesSdChange(event: ChangeEvent<HTMLInputElement>): void {
        const interfacesSd = event.target.value as YesNoNotSure
        this.props.setInterfacesSd(interfacesSd)
    }

    onInterfacesUsbChange(event: ChangeEvent<HTMLInputElement>): void {
        const interfacesUsb = event.target.value as YesNoNotSure
        this.props.setInterfacesUsb(interfacesUsb)
    }

    render() {
        return <>
            <h2>11. Computer Interfaces</h2>
            <p className="additional-information-h2">Every possible interface to a device can be misused by attackers,
                therefore it is recommended not to connect foreign media to it</p>

            <h3>11.1. USB sticks</h3>

            <p>
                Is it possible to connect USB sticks?
            </p>

            <YesNoNotSureRadios name="interface-usb"
                                selection={this.props.interfacesUsb}
                                onChange={this.onInterfacesUsbChange}/>

            <h3>11.2. SD cards</h3>

            <p>
                Is it possible to connect SD cards?
            </p>

            <YesNoNotSureRadios name="interface-sd"
                                selection={this.props.interfacesSd}
                                onChange={this.onInterfacesSdChange}/>

            <h3>11.3. CDs</h3>
            <p className="additional-information-h3">Although a CD drive is becoming increasingly unpopular, it should
                be considered in terms of security.</p>

            <p>
                Is it possible to read CDs?
            </p>

            <YesNoNotSureRadios name="interface-cd"
                                selection={this.props.interfacesCd}
                                onChange={this.onInterfacesCdChange}/>
        </>
    }
}

const InterfacesFragment = connector(UnconnectedInterfacesFragment)

export {InterfacesFragment}
