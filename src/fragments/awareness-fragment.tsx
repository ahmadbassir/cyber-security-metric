import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectAwarenessScore} from '../store/awareness/select/awareness'
import {setAwarenessDevice} from '../store/awareness/awareness-device'
import {setAwarenessEmployees} from '../store/awareness/awareness-employees'
import {setAwarenessOnboarding} from '../store/awareness/awareness-onboarding'
import {setAwarenessProtocol} from '../store/awareness/awareness-protocol'
import {setAwarenessTraining} from '../store/awareness/awareness-training'

const mapStateToProps = (storeState: StoreState) => ({
    awarenessDevice: storeState.awarenessDevice,
    awarenessEmployees: storeState.awarenessEmployees,
    awarenessOnboarding: storeState.awarenessOnboarding,
    awarenessProtocol: storeState.awarenessProtocol,
    awarenessTraining: storeState.awarenessTraining,

    awarenessScore: selectAwarenessScore(storeState)
})

const mapDispatchToProps = {
    setAwarenessDevice,
    setAwarenessEmployees,
    setAwarenessOnboarding,
    setAwarenessProtocol,
    setAwarenessTraining
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedAwarenessFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onAwarenessDeviceChange = this.onAwarenessDeviceChange.bind(this)
        this.onAwarenessEmployeesChange = this.onAwarenessEmployeesChange.bind(this)
        this.onAwarenessOnboardingChange = this.onAwarenessOnboardingChange.bind(this)
        this.onAwarenessProtocolChange = this.onAwarenessProtocolChange.bind(this)
        this.onAwarenessTrainingChange = this.onAwarenessTrainingChange.bind(this)
    }

    onAwarenessDeviceChange(event: ChangeEvent<HTMLInputElement>): void {
        const awarenessDevice = event.target.value as YesNoNotSure
        this.props.setAwarenessDevice(awarenessDevice)
    }

    onAwarenessEmployeesChange(event: ChangeEvent<HTMLInputElement>): void {
        const awarenessEmployees = event.target.value as YesNoNotSure
        this.props.setAwarenessEmployees(awarenessEmployees)
    }

    onAwarenessOnboardingChange(event: ChangeEvent<HTMLInputElement>): void {
        const awarenessOnboarding = event.target.value as YesNoNotSure
        this.props.setAwarenessOnboarding(awarenessOnboarding)
    }

    onAwarenessProtocolChange(event: ChangeEvent<HTMLInputElement>): void {
        const awarenessProtocol = event.target.value as YesNoNotSure
        this.props.setAwarenessProtocol(awarenessProtocol)
    }

    onAwarenessTrainingChange(event: ChangeEvent<HTMLInputElement>): void {
        const awarenessTraining = event.target.value as YesNoNotSure
        this.props.setAwarenessTraining(awarenessTraining)
    }

    render() {
        return <>
            <h2>17. Awareness</h2>
            <p className="additional-information-h2">The biggest vulnerability in a system is the human itself and
                therefore awareness against attacks is an important aspect</p>

            <p>
                Has basic awareness been created among employees regarding cyber attacks?
            </p>

            <YesNoNotSureRadios name="awareness-employees"
                                selection={this.props.awarenessEmployees}
                                onChange={this.onAwarenessEmployeesChange}/>

            <p>
                Are new employees educated on threats during onboarding?
            </p>

            <YesNoNotSureRadios name="awareness-onboarding"
                                selection={this.props.awarenessOnboarding}
                                onChange={this.onAwarenessOnboardingChange}/>

            <p>
                Has everyone been made aware of how to use the devices?
            </p>

            <YesNoNotSureRadios name="awareness-device"
                                selection={this.props.awarenessDevice}
                                onChange={this.onAwarenessDeviceChange}/>

            <p>
                Are the employees briefed on the incident protocol?
            </p>

            <YesNoNotSureRadios name="awareness-protocol"
                                selection={this.props.awarenessProtocol}
                                onChange={this.onAwarenessProtocolChange}/>

            <p>
                Are there regular training sessions/seminars on cyber attack innovations?
            </p>

            <YesNoNotSureRadios name="awareness-training"
                                selection={this.props.awarenessTraining}
                                onChange={this.onAwarenessTrainingChange}/>
        </>
    }
}

const AwarenessFragment = connector(UnconnectedAwarenessFragment)

export {AwarenessFragment}
