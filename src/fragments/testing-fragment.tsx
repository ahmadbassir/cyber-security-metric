import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectTestingPenetrationScore} from '../store/testing/select/testing-penetration'
import {selectTestingScore} from '../store/testing/select/testing'
import {selectTestingSearchScore} from '../store/testing/select/testing-search'
import {selectTestingSimulationScore} from '../store/testing/select/testing-simulation'
import {setTestingPenetration} from '../store/testing/testing-penetration'
import {setTestingSearch} from '../store/testing/testing-search'
import {setTestingSimulation} from '../store/testing/testing-simulation'

const mapStateToProps = (storeState: StoreState) => ({
    testingPenetration: storeState.testingPenetration,
    testingSearch: storeState.testingSearch,
    testingSimulation: storeState.testingSimulation,

    testingPenetrationScore: selectTestingPenetrationScore(storeState),
    testingSearchScore: selectTestingSearchScore(storeState),
    testingSimulationScore: selectTestingSimulationScore(storeState),

    testingScore: selectTestingScore(storeState)
})

const mapDispatchToProps = {
    setTestingPenetration,
    setTestingSearch,
    setTestingSimulation
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedTestingFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onTestingPenetrationChange = this.onTestingPenetrationChange.bind(this)
        this.onTestingSearchChange = this.onTestingSearchChange.bind(this)
        this.onTestingSimulationChange = this.onTestingSimulationChange.bind(this)
    }

    onTestingPenetrationChange(event: ChangeEvent<HTMLInputElement>): void {
        const testingPenetration = event.target.value as YesNoNotSure
        this.props.setTestingPenetration(testingPenetration)
    }

    onTestingSearchChange(event: ChangeEvent<HTMLInputElement>): void {
        const testingSearch = event.target.value as YesNoNotSure
        this.props.setTestingSearch(testingSearch)
    }

    onTestingSimulationChange(event: ChangeEvent<HTMLInputElement>): void {
        const testingSimulation = event.target.value as YesNoNotSure
        this.props.setTestingSimulation(testingSimulation)
    }

    render() {
        return <>
            <h2>14. Testing</h2>
            <p className="additional-information-h2">A tested infrastructure offers fewer targets to the attacker and
                can thus respond better to attacks</p>

            <h3>14.1. Penetration Tests</h3>
            <p className="additional-information-h3">Penetration tests are used to measure the resilience against
                attacks</p>

            <p>
                Has your own IT system been tested, for example by penetration tests?
            </p>

            <YesNoNotSureRadios name="testing-penetration"
                                selection={this.props.testingPenetration}
                                onChange={this.onTestingPenetrationChange}/>

            <h3>14.2. Attack Simulation</h3>
            <p className="additional-information-h3">Simulation helps to act quickly in the event of an emergency and
                thus reduce damage</p>

            <p>
                Have simulations of an attack been carried out?
            </p>

            <YesNoNotSureRadios name="testing-simulation"
                                selection={this.props.testingSimulation}
                                onChange={this.onTestingSimulationChange}/>

            <h3>14.3. Vulnerability Search</h3>
            <p className="additional-information-h3">The search for vulnerabilities illustrates potential targets of
                attackers and may have been performed by both internal and external experts</p>
            <p>
                Has an effective search for vulnerabilities been carried out?
            </p>

            <YesNoNotSureRadios name="testing-search"
                                selection={this.props.testingSearch}
                                onChange={this.onTestingSearchChange}/>
        </>
    }
}

const TestingFragment = connector(UnconnectedTestingFragment)

export {TestingFragment}
