import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectInsuranceScore} from '../store/insurance/select/insurance'
import {setInsuranceExists} from '../store/insurance/insurance-exists'
import {setInsurancePlanned} from '../store/insurance/insurance-planned'

const mapStateToProps = (storeState: StoreState) => ({
    insuranceExists: storeState.insuranceExists,
    insurancePlanned: storeState.insurancePlanned,

    insuranceScoreExists: storeState.insuranceExists,

    insuranceScore: selectInsuranceScore(storeState)
})

const mapDispatchToProps = {
    setInsuranceExists,
    setInsurancePlanned
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedInsuranceFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onInsuranceExistsChange = this.onInsuranceExistsChange.bind(this)
        this.onInsurancePlannedChange = this.onInsurancePlannedChange.bind(this)
    }

    onInsuranceExistsChange(event: ChangeEvent<HTMLInputElement>): void {
        const insuranceExists = event.target.value as YesNoNotSure
        this.props.setInsuranceExists(insuranceExists)
    }

    onInsurancePlannedChange(event: ChangeEvent<HTMLInputElement>): void {
        const insurancePlanned = event.target.value as YesNoNotSure
        this.props.setInsurancePlanned(insurancePlanned)
    }

    render() {
        return <>
            <h2>13. Cyber Insurance</h2>
            <p className="additional-information-h2">An insurance company is representative for a good basis of security
                in the area of IT infrastructure</p>

            <p>
                Is the company insured against cyber attacks?
            </p>

            <YesNoNotSureRadios name="insurance-exists"
                                selection={this.props.insuranceExists}
                                onChange={this.onInsuranceExistsChange}/>

            <p>
                Is cyber security insurance planned in a timely manner?
            </p>

            <YesNoNotSureRadios name="insurance-planned"
                                selection={this.props.insurancePlanned}
                                disabled={this.props.insuranceScoreExists === YesNoNotSure.YES}
                                onChange={this.onInsurancePlannedChange}/>
        </>
    }
}

const InsuranceFragment = connector(UnconnectedInsuranceFragment)

export {InsuranceFragment}
