import React, {ChangeEvent} from 'react'
import {Checkboxes} from '../components/checkboxes'
import {
    ProtectionAntivirusUpdateType,
    setProtectionAntivirusUpdateType
} from '../store/protection/protection-antivirus-update-type'
import {ProtectionFirewallType, setProtectionFirewallType} from '../store/protection/protection-firewall-type'
import {Radios} from '../components/radios'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectProtectionAntivirusScore} from '../store/protection/select/protection-antivirus'
import {selectProtectionFirewallScore} from '../store/protection/select/protection-firewall'
import {selectProtectionScore} from '../store/protection/select/protection'
import {setProtectionAntivirusMandatory} from '../store/protection/protection-antivirus-mandatory'
import {setProtectionAntivirusUpdatedRegularly} from '../store/protection/protection-antivirus-updated-regularly'
import {setProtectionFirewallOnComputer} from '../store/protection/protection-firewall-on-computer'
import {setProtectionFirewallOnEnvironment} from '../store/protection/protection-firewall-on-environment'
import {setProtectionFirewallOnServer} from '../store/protection/protection-firewall-on-server'
import {setProtectionFirewallUpdatedRegularly} from '../store/protection/protection-firewall-updated-regularly'
import {setProtectionFirewallUsed} from '../store/protection/protection-firewall-used'

const mapStateToProps = (storeState: StoreState) => ({
    protectionAntivirusMandatory: storeState.protectionAntivirusMandatory,
    protectionAntivirusUpdateType: storeState.protectionAntivirusUpdateType,
    protectionAntivirusUpdatedRegularly: storeState.protectionAntivirusUpdatedRegularly,
    protectionFirewallOnComputer: storeState.protectionFirewallOnComputer,
    protectionFirewallOnEnvironment: storeState.protectionFirewallOnEnvironment,
    protectionFirewallOnServer: storeState.protectionFirewallOnServer,
    protectionFirewallType: storeState.protectionFirewallType,
    protectionFirewallUpdatedRegularly: storeState.protectionFirewallUpdatedRegularly,
    protectionFirewallUsed: storeState.protectionFirewallUsed,

    protectionAntivirusScore: selectProtectionAntivirusScore(storeState),
    protectionFirewallScore: selectProtectionFirewallScore(storeState),

    protectionScore: selectProtectionScore(storeState)
})

const mapDispatchToProps = {
    setProtectionAntivirusMandatory,
    setProtectionAntivirusUpdateType,
    setProtectionAntivirusUpdatedRegularly,
    setProtectionFirewallOnComputer,
    setProtectionFirewallOnEnvironment,
    setProtectionFirewallOnServer,
    setProtectionFirewallType,
    setProtectionFirewallUpdatedRegularly,
    setProtectionFirewallUsed
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedProtectionFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onProtectionAntivirusMandatoryChange = this.onProtectionAntivirusMandatoryChange.bind(this)
        this.onProtectionAntivirusUpdateTypeChange = this.onProtectionAntivirusUpdateTypeChange.bind(this)
        this.onProtectionAntivirusUpdatedRegularlyChange = this.onProtectionAntivirusUpdatedRegularlyChange.bind(this)
        this.onProtectionFirewallOnComputerChange = this.onProtectionFirewallOnComputerChange.bind(this)
        this.onProtectionFirewallOnEnvironmentChange = this.onProtectionFirewallOnEnvironmentChange.bind(this)
        this.onProtectionFirewallOnServerChange = this.onProtectionFirewallOnServerChange.bind(this)
        this.onProtectionFirewallTypeChange = this.onProtectionFirewallTypeChange.bind(this)
        this.onProtectionFirewallUpdatedRegularlyChange = this.onProtectionFirewallUpdatedRegularlyChange.bind(this)
        this.onProtectionFirewallUsedChange = this.onProtectionFirewallUsedChange.bind(this)
    }

    onProtectionAntivirusMandatoryChange(event: ChangeEvent<HTMLInputElement>): void {
        const protectionAntivirusMandatory = event.target.value as YesNoNotSure
        this.props.setProtectionAntivirusMandatory(protectionAntivirusMandatory)
    }

    onProtectionAntivirusUpdateTypeChange(event: ChangeEvent<HTMLInputElement>): void {
        const protectionAntivirusUpdateType = event.target.value as ProtectionAntivirusUpdateType
        this.props.setProtectionAntivirusUpdateType(protectionAntivirusUpdateType)
    }

    onProtectionAntivirusUpdatedRegularlyChange(event: ChangeEvent<HTMLInputElement>): void {
        const protectionAntivirusUpdatedRegularly = event.target.value as YesNoNotSure
        this.props.setProtectionAntivirusUpdatedRegularly(protectionAntivirusUpdatedRegularly)
    }

    onProtectionFirewallOnComputerChange(event: ChangeEvent<HTMLInputElement>): void {
        const protectionFirewallOnComputer = event.target.checked
        this.props.setProtectionFirewallOnComputer(protectionFirewallOnComputer)
    }

    onProtectionFirewallOnEnvironmentChange(event: ChangeEvent<HTMLInputElement>): void {
        const protectionFirewallOnEnvironment = event.target.checked
        this.props.setProtectionFirewallOnEnvironment(protectionFirewallOnEnvironment)
    }

    onProtectionFirewallOnServerChange(event: ChangeEvent<HTMLInputElement>): void {
        const protectionFirewallOnServer = event.target.checked
        this.props.setProtectionFirewallOnServer(protectionFirewallOnServer)
    }

    onProtectionFirewallTypeChange(event: ChangeEvent<HTMLInputElement>): void {
        const protectionFirewallType = event.target.value as ProtectionFirewallType
        this.props.setProtectionFirewallType(protectionFirewallType)
    }

    onProtectionFirewallUpdatedRegularlyChange(event: ChangeEvent<HTMLInputElement>): void {
        const protectionFirewallUpdatedRegularly = event.target.value as YesNoNotSure
        this.props.setProtectionFirewallUpdatedRegularly(protectionFirewallUpdatedRegularly)
    }

    onProtectionFirewallUsedChange(event: ChangeEvent<HTMLInputElement>): void {
        const protectionFirewallUsed = event.target.value as YesNoNotSure
        this.props.setProtectionFirewallUsed(protectionFirewallUsed)
    }

    render() {
        const firewallOnOptions = [
            {
                text: 'Computer',
                checked: this.props.protectionFirewallOnComputer,
                onChange: this.onProtectionFirewallOnComputerChange
            },
            {
                text: 'Server',
                checked: this.props.protectionFirewallOnServer,
                onChange: this.onProtectionFirewallOnServerChange
            },
            {
                text: 'Environment',
                checked: this.props.protectionFirewallOnEnvironment,
                onChange: this.onProtectionFirewallOnEnvironmentChange
            }
        ]

        return <>
            <h2>6. Protection Standards</h2>
            <p className="additional-information-h2">Almost every laptop is equipped with a free firewall and antivirus
                programs are accessible for free</p>

            <h3>6.1. Firewall</h3>
            <p className="additional-information-h3">The firewall can be enabled and disabled in the settings of the
                laptops. It is recommended to always have the firewall enabled. </p>

            <p>
                Is a firewall being used?
            </p>

            <YesNoNotSureRadios name="firewall-used"
                                selection={this.props.protectionFirewallUsed}
                                onChange={this.onProtectionFirewallUsedChange}/>

            <p>
                Which kind of firewall is being used?
            </p>

            <Radios name="firewall-type"
                    options={[
                        {text: 'Simple', value: ProtectionFirewallType.SIMPLE},
                        {text: 'Advanced', value: ProtectionFirewallType.ADVANCED},
                        {text: 'Not Sure', value: ProtectionFirewallType.NOT_SURE}
                    ]}
                    selection={this.props.protectionFirewallType}
                    disabled={this.props.protectionFirewallUsed !== YesNoNotSure.YES}
                    onChange={this.onProtectionFirewallTypeChange}/>

            <p>
                Is the firewall checked or updated regularly?
            </p>

            <YesNoNotSureRadios name="firewall-updated-regularly"
                                selection={this.props.protectionFirewallUpdatedRegularly}
                                disabled={this.props.protectionFirewallUsed !== YesNoNotSure.YES}
                                onChange={this.onProtectionFirewallUpdatedRegularlyChange}/>

            <p>
                Are multiple firewalls being used?
            </p>

            <Checkboxes name="firewall-on"
                        options={firewallOnOptions}
                        disabled={this.props.protectionFirewallUsed !== YesNoNotSure.YES}/>

            <h3>6.2. Antivirus</h3>
            <p className="additional-information-h3">Numerous providers have made different programs available free of
                charge. It is recommended to always have the latest version of antivirus software. </p>

            <p>
                Is antivirus software mandatory?
            </p>

            <YesNoNotSureRadios name="antivirus-mandatory"
                                selection={this.props.protectionAntivirusMandatory}
                                onChange={this.onProtectionAntivirusMandatoryChange}/>

            <p>
                Is the antivirus software updated regularly?
            </p>

            <YesNoNotSureRadios name="antivirus-updated-regularly"
                                selection={this.props.protectionAntivirusUpdatedRegularly}
                                onChange={this.onProtectionAntivirusUpdatedRegularlyChange}/>

            <p>
                Are antivirus updates checked for automatically?
            </p>

            <Radios name="antivirus-update-type"
                    options={[
                        {text: 'Manual', value: ProtectionAntivirusUpdateType.MANUAL},
                        {text: 'Automatic', value: ProtectionAntivirusUpdateType.AUTOMATIC},
                        {text: 'Not Sure', value: ProtectionAntivirusUpdateType.NOT_SURE}
                    ]}
                    selection={this.props.protectionAntivirusUpdateType}
                    disabled={this.props.protectionAntivirusUpdatedRegularly !== YesNoNotSure.YES}
                    onChange={this.onProtectionAntivirusUpdateTypeChange}/>
        </>
    }
}

const ProtectionFragment = connector(UnconnectedProtectionFragment)

export {ProtectionFragment}
