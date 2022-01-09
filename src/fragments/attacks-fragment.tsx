import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectAttacksDifferentiateScore} from '../store/attacks/select/attacks-differentiate'
import {selectAttacksHoneypotUsedScore} from '../store/attacks/select/attacks-honeypot-used'
import {selectAttacksProtocolScore} from '../store/attacks/select/attacks-protocol'
import {selectAttacksProtocolUpdatedScore} from '../store/attacks/select/attacks-protocol-updated'
import {selectAttacksQuarantineZoneScore} from '../store/attacks/select/attacks-quarantine-zone'
import {selectAttacksScore} from '../store/attacks/select/attacks'
import {setAttacksDifferentiate} from '../store/attacks/attacks-differentiate'
import {setAttacksHoneypotUsed} from '../store/attacks/attacks-honeypot-used'
import {setAttacksProtocolUpdated} from '../store/attacks/attacks-protocol-updated'
import {setAttacksProtocol} from '../store/attacks/attacks-protocol'
import {setAttacksQuarantineZone} from '../store/attacks/attacks-quarantine-zone'

const mapStateToProps = (storeState: StoreState) => ({
    attacksDifferentiate: storeState.attacksDifferentiate,
    attacksHoneypotUsed: storeState.attacksHoneypotUsed,
    attacksProtocol: storeState.attacksProtocol,
    attacksProtocolUpdated: storeState.attacksProtocolUpdated,
    attacksQuarantineZone: storeState.attacksQuarantineZone,

    attacksDifferentiateScore: selectAttacksDifferentiateScore(storeState),
    attacksHoneypotUsedScore: selectAttacksHoneypotUsedScore(storeState),
    attacksProtocolScore: selectAttacksProtocolScore(storeState),
    attacksProtocolUpdatedScore: selectAttacksProtocolUpdatedScore(storeState),
    attacksQuarantineZoneScore: selectAttacksQuarantineZoneScore(storeState),

    attacksScore: selectAttacksScore(storeState)
})

const mapDispatchToProps = {
    setAttacksDifferentiate,
    setAttacksHoneypotUsed,
    setAttacksProtocol,
    setAttacksProtocolUpdated,
    setAttacksQuarantineZone
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedAttacksFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onAttacksDifferentiateChange = this.onAttacksDifferentiateChange.bind(this)
        this.onAttacksHoneypotUsedChange = this.onAttacksHoneypotUsedChange.bind(this)
        this.onAttacksProtocolChange = this.onAttacksProtocolChange.bind(this)
        this.onAttacksProtocolUpdatedChange = this.onAttacksProtocolUpdatedChange.bind(this)
        this.onAttacksQuarantineZoneChange = this.onAttacksQuarantineZoneChange.bind(this)
    }

    onAttacksDifferentiateChange(event: ChangeEvent<HTMLInputElement>): void {
        const attacksDifferentiate = event.target.value as YesNoNotSure
        this.props.setAttacksDifferentiate(attacksDifferentiate)
    }

    onAttacksHoneypotUsedChange(event: ChangeEvent<HTMLInputElement>): void {
        const attacksHoneypotUsed = event.target.value as YesNoNotSure
        this.props.setAttacksHoneypotUsed(attacksHoneypotUsed)
    }

    onAttacksProtocolChange(event: ChangeEvent<HTMLInputElement>): void {
        const attacksProtocol = event.target.value as YesNoNotSure
        this.props.setAttacksProtocol(attacksProtocol)
    }

    onAttacksProtocolUpdatedChange(event: ChangeEvent<HTMLInputElement>): void {
        const attacksProtocolUpdated = Number(event.target.value)
        this.props.setAttacksProtocolUpdated(attacksProtocolUpdated)
    }

    onAttacksQuarantineZoneChange(event: ChangeEvent<HTMLInputElement>): void {
        const attacksQuarantineZone = event.target.value as YesNoNotSure
        this.props.setAttacksQuarantineZone(attacksQuarantineZone)
    }

    render() {
        return <>
            <h2>12. Case of Attack</h2>
            <p className="additional-information-h2">A strong resistance is important to reduce the damage in case of an
                attack</p>

            <h3>12.1. Protocol</h3>
            <p className="additional-information-h3">A protocol is a plan adapted to one's own infrastructure to
                structure the procedure in the event of an attack</p>

            <p>
                Is there a procedure/protocol in case of an attack?
            </p>

            <YesNoNotSureRadios name="attack-protocol"
                                selection={this.props.attacksProtocol}
                                onChange={this.onAttacksProtocolChange}/>

            <h3>12.2. Protocol Updates</h3>
            <p className="additional-information-h3">Due to changes in the attacks, it is equally important to adapt the
                protocol accordingly</p>

            <p>
                How often is the protocol updated?
            </p>

            <label htmlFor="attack-protocol-updated">Update frequency in months</label>
            <input id="attack-protocol-updated" className="ml-16"
                   type="number" min="0" defaultValue={this.props.attacksProtocolUpdated}
                   disabled={this.props.attacksProtocol !== YesNoNotSure.YES}
                   onChange={this.onAttacksProtocolUpdatedChange}/>

            <h3>12.3. Differentiate attacks</h3>
            <p className="additional-information-h3"> The differentiation of the various attacks demonstrates a good
                examination of the topic of cyber security</p>

            <p>
                Is there a distinction between different types of attacks?
            </p>

            <YesNoNotSureRadios name="attacks-differentiate"
                                selection={this.props.attacksDifferentiate}
                                disabled={this.props.attacksProtocol !== YesNoNotSure.YES}
                                onChange={this.onAttacksDifferentiateChange}/>

            <h3>12.4. Quarantine Zone</h3>
            <p className="additional-information-h3"> If a device is infected, it is important to disconnect it from
                your network and the Internet. A quarantine zone is advantageous here and limits the spread</p>

            <p>
                Is there a quarantine zone?
            </p>

            <YesNoNotSureRadios name="attacks-quarantine-zone"
                                selection={this.props.attacksQuarantineZone}
                                onChange={this.onAttacksQuarantineZoneChange}/>

            <h3>12.5. Honeypot</h3>
            <p className="additional-information-h3">A honeypot simulates an infrastructure and thereby intentionally
                lures hackers into a trap in order to analyze their approach and draw conclusions about one's own
                security</p>

            <p>
                Is a honeypot used to deceive attackers?
            </p>

            <YesNoNotSureRadios name="attacks-honeypot-used"
                                selection={this.props.attacksHoneypotUsed}
                                onChange={this.onAttacksHoneypotUsedChange}/>
        </>
    }
}

const AttacksFragment = connector(UnconnectedAttacksFragment)

export {AttacksFragment}
