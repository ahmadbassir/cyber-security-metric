import React, {ChangeEvent} from 'react'
import {Industry, selectIndustryScore, setIndustry} from '../store/industry/industry'
import {Radios} from '../components/radios'
import {StoreState} from '../store'
import {connect, ConnectedProps} from 'react-redux'

const mapStateToProps = (storeState: StoreState) => ({
    industry: storeState.industry,

    industryScore: selectIndustryScore(storeState)
})

const mapDispatchToProps = {
    setIndustry
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedIndustryFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onIndustryChange = this.onIndustryChange.bind(this)
    }

    onIndustryChange(event: ChangeEvent<HTMLInputElement>): void {
        const industry = event.target.value as Industry
        this.props.setIndustry(industry)
    }

    render() {
        const options = [
            {
                text: 'Agriculture, forestry and fishing',
                value: Industry.AGRICULTURE
            },
            {
                text: 'Mining and Quarrying',
                value: Industry.MINING
            },
            {
                text: 'Manufacturing industry',
                value: Industry.MANUFACTURING
            },
            {
                text: 'Energy supply',
                value: Industry.ENERGY
            },
            {
                text: 'Water supply, sewage and waste disposal and elimination of environmental pollution',
                value: Industry.WATER_SUPPLY
            },
            {
                text: 'Construction',
                value: Industry.CONSTRUCTION
            },
            {
                text: 'Trade; maintenance/repair of motor vehicles',
                value: Industry.TRADE
            },
            {
                text: 'Transport and storage',
                value: Industry.TRANSPORT
            },
            {
                text: 'Hospitality',
                value: Industry.HOSPITALITY
            },
            {
                text: 'Information and communication',
                value: Industry.INFORMATION
            },
            {
                text: 'Financial and insurance services',
                value: Industry.FINANCE
            },
            {
                text: 'Real estate and housing',
                value: Industry.REAL_ESTATE
            },
            {
                text: 'Professional, scientific and technical services',
                value: Industry.PROFESSIONAL
            },
            {
                text: 'Other economic services',
                value: Industry.OTHER_ECONOMIC
            },
            {
                text: 'Public administration, defense, social security',
                value: Industry.PUBLIC_ADMINISTRATION
            },
            {
                text: 'Education and teaching',
                value: Industry.EDUCATION
            },
            {
                text: 'Health and social services',
                value: Industry.HEALTH
            },
            {
                text: 'Art, entertainment and recreation',
                value: Industry.ART
            },
            {
                text: 'Provision of other services',
                value: Industry.OTHER_SERVICES
            },
            {
                text: 'Private households with domestic staff; manufacture of warn and services provided by private households for their own use without special emphasis on the heavy industry',
                value: Industry.PRIVATE_HOUSEHOLDS
            },
            {
                text: 'Extraterritorial organizations and entities',
                value: Industry.EXTRATERRITORIAL_ORGANIZATIONS
            }
        ]

        return <>
            <h3 className="welcome-text"> Welcome to Cyber Security Metrics which helps you to better assess your cyber
                security and the risk of
                becoming a victim of an attack! Please go through the questions carefully and try to answer all of them.
                If some points are unclear, there is always the option to click on 'not sure'. However, for a more
                accurate result, it is recommended to answer as much as possible with 'yes' or 'no'. </h3>
            <h2>1. Industry</h2>
            <p className="additional-information-h2">The following companies are listed according to the 2008 edition of
                the classification of economic activities by the Federal Statistical Office in Germany.</p>
            <Radios name="industry"
                    options={options}
                    selection={this.props.industry}
                    onChange={this.onIndustryChange}/>
        </>
    }
}

const IndustryFragment = connector(UnconnectedIndustryFragment)

export {IndustryFragment}
