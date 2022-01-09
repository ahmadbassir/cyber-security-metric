import React, {ChangeEvent} from 'react'
import {CompanyLocation, selectCompanyLocationScore, setCompanyLocation} from '../store/company/company-location'
import {Radios} from '../components/radios'
import {StoreState} from '../store'
import {connect, ConnectedProps} from 'react-redux'
import {selectCompanyScore} from '../store/company/select/company'
import {selectCompanySizeScore, setCompanySize} from '../store/company/company-size'

const mapStateToProps = (storeState: StoreState) => ({
    companyLocation: storeState.companyLocation,
    companySize: storeState.companySize,

    companyLocationScore: selectCompanyLocationScore(storeState),
    companySizeScore: selectCompanySizeScore(storeState),

    companyScore: selectCompanyScore(storeState)
})

const mapDispatchToProps = {
    setCompanyLocation,
    setCompanySize
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedCompanyFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onCompanyLocationChange = this.onCompanyLocationChange.bind(this)
        this.onCompanySizeChange = this.onCompanySizeChange.bind(this)
    }

    onCompanyLocationChange(event: ChangeEvent<HTMLInputElement>): void {
        const companyLocation = event.target.value as CompanyLocation
        this.props.setCompanyLocation(companyLocation)
    }

    onCompanySizeChange(event: ChangeEvent<HTMLInputElement>): void {
        const companySize = Number(event.target.value)
        this.props.setCompanySize(companySize)
    }

    render() {
        return <>
            <h2>3. Company Information</h2>
            <p className="additional-information-h2">The number of employees and the location provide information about
                the security of a company with regard to cyber attacks</p>

            <h3>3.1 Company Size</h3>

            <label htmlFor="company-size">Number of employees</label>
            <input id="company-size" className="ml-16"
                   type="number" min="0" defaultValue={this.props.companySize}
                   onChange={this.onCompanySizeChange}/>

            <h3>3.2 Company Location</h3>

            <Radios name="storage-location"
                    options={[
                        {text: 'Australia', value: CompanyLocation.AUSTRALIA},
                        {text: 'Belgium', value: CompanyLocation.BELGIUM},
                        {text: 'Canada', value: CompanyLocation.CANADA},
                        {text: 'France', value: CompanyLocation.FRANCE},
                        {text: 'Germany', value: CompanyLocation.GERMANY},
                        {text: 'Ireland', value: CompanyLocation.IRELAND},
                        {text: 'Italy', value: CompanyLocation.ITALY},
                        {text: 'Japan', value: CompanyLocation.JAPAN},
                        {text: 'Netherlands', value: CompanyLocation.NETHERLANDS},
                        {text: 'Saudi Arabia', value: CompanyLocation.SAUDI_ARABIA},
                        {text: 'Singapore', value: CompanyLocation.SINGAPORE},
                        {text: 'Spain', value: CompanyLocation.SPAIN},
                        {text: 'Sweden', value: CompanyLocation.SWEDEN},
                        {text: 'UAE', value: CompanyLocation.UAE},
                        {text: 'UK', value: CompanyLocation.UK},
                        {text: 'USA', value: CompanyLocation.USA},
                        {text: 'Other', value: CompanyLocation.OTHER},
                    ]}
                    selection={this.props.companyLocation}
                    onChange={this.onCompanyLocationChange}/>
        </>
    }
}

const CompanyFragment = connector(UnconnectedCompanyFragment)

export {CompanyFragment}
