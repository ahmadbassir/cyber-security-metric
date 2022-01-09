import './App.css'
import React from 'react'
import {AttacksFragment} from './fragments/attacks-fragment'
import {AwarenessFragment} from './fragments/awareness-fragment'
import {BackupFragment} from './fragments/backup-fragment'
import {Button, Step, StepLabel, Stepper} from '@mui/material'
import {CompanyFragment} from './fragments/company-fragment'
import {HardwareFragment} from './fragments/hardware-fragment'
import {HistoryFragment} from './fragments/history-fragment'
import {IndustryFragment} from './fragments/industry-fragment'
import {InfrastructureFragment} from './fragments/infrastructure-fragment'
import {InsuranceFragment} from './fragments/insurance-fragment'
import {InterfacesFragment} from './fragments/interfaces-fragment'
import {IntrusionFragment} from './fragments/intrusion-fragment'
import {NetworkFragment} from './fragments/network-fragment'
import {OfflineFragment} from './fragments/offline-fragment'
import {PasswordsFragment} from './fragments/passwords-fragment'
import {ProtectionFragment} from './fragments/protection-fragment'
import {ResultFragment} from './fragments/result-fragment/result-fragment'
import {RightsFragment} from './fragments/rights-fragment'
import {SafetyFragment} from './fragments/safety-fragment'
import {SocialFragment} from './fragments/social-fragment'
import {StoreState} from './store'
import {TestingFragment} from './fragments/testing-fragment'
import {connect, ConnectedProps} from 'react-redux'
import {selectScore} from './store/select'

interface StepItem {
    label: string
}

function mapStateToProps(storeState: StoreState) {
    return {
        score: selectScore(storeState)
    }
}

const connector = connect(mapStateToProps)

type Props = ConnectedProps<typeof connector>

interface State {
    activeFragment: number
}

class UnconnectedApp extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            activeFragment: 0
        }
    }

    /// Render

    render() {
        const steps: StepItem[] = [
            {label: 'Industry'},
            {label: 'Security Infrastructure'},
            {label: 'Company Information'},
            {label: 'WiFi / VPN'},
            {label: 'Passwords'},
            {label: 'Protection Standards'},
            {label: 'Rights Administration'},
            {label: 'Backup Server'},
            {label: 'Intrusion Detection/Prevention'},
            {label: 'Common Safety Methods'},
            {label: 'Computer Interfaces'},
            {label: 'Case of Attack'},
            {label: 'Cyber Insurance'},
            {label: 'Testing'},
            {label: 'Hardware'},
            {label: 'History'},
            {label: 'Awareness'},
            {label: 'Social Media'},
            {label: 'Offline'}
        ]

        return (
            <div className="grid">
                <h1 className="grid-top">Cyber Security Metric ({this.props.score.toFixed(2)})</h1>

                {
                    this.state.activeFragment < steps.length ?
                        <>
                            <div className="grid-left">
                                {
                                    [
                                        <IndustryFragment/>,
                                        <InfrastructureFragment/>,
                                        <CompanyFragment/>,
                                        <NetworkFragment/>,
                                        <PasswordsFragment/>,
                                        <ProtectionFragment/>,
                                        <RightsFragment/>,
                                        <BackupFragment/>,
                                        <IntrusionFragment/>,
                                        <SafetyFragment/>,
                                        <InterfacesFragment/>,
                                        <AttacksFragment/>,
                                        <InsuranceFragment/>,
                                        <TestingFragment/>,
                                        <HardwareFragment/>,
                                        <HistoryFragment/>,
                                        <AwarenessFragment/>,
                                        <SocialFragment/>,
                                        <OfflineFragment/>
                                    ][this.state.activeFragment]
                                }
                            </div>

                            <div className="grid-right">
                                <Stepper orientation="vertical"
                                         nonLinear={true}
                                         connector={null}
                                         activeStep={this.state.activeFragment}>

                                    {steps.map((step: StepItem, index: number) =>
                                        <Step key={step.label}
                                              sx={{cursor: 'pointer'}}
                                              onClick={() => this.setState({activeFragment: index})}>
                                            <StepLabel>
                                                {step.label}
                                            </StepLabel>
                                        </Step>
                                    )}
                                </Stepper>

                                <Button disabled={this.state.activeFragment === 0}
                                        onClick={() => this.setState({activeFragment: this.state.activeFragment - 1})}
                                        sx={{mt: 3, ml: 3}}>

                                    Back
                                </Button>

                                <Button variant="contained"
                                        onClick={() => this.setState({activeFragment: this.state.activeFragment + 1})}
                                        sx={{mt: 3, ml: 3}}>

                                    Continue
                                </Button>
                            </div>
                        </>

                        :
                        <div className="grid-left-right">
                            <ResultFragment/>

                            <Button variant="contained"
                                    onClick={() => this.setState({activeFragment: this.state.activeFragment - 1})}
                                    style={{display: 'block', margin: 'auto', marginTop: 32}}>

                                Back to survey
                            </Button>
                        </div>
                }
            </div>
        )
    }
}

const App = connector(UnconnectedApp)

export {App}
