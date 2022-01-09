import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {
    selectInfrastructureAdjustmentsScore,
    setInfrastructureAdjustments
} from '../store/infrastructure/infrastructure-adjustments'
import {selectInfrastructureDepartmentScore} from '../store/infrastructure/select/infrastructure-department'
import {
    selectInfrastructurePenetrationScore,
    setInfrastructurePenetration
} from '../store/infrastructure/infrastructure-penetration'
import {selectInfrastructureScore} from '../store/infrastructure/select/infrastructure'
import {selectInfrastructureSearchScore, setInfrastructureSearch} from '../store/infrastructure/infrastructure-search'
import {setInfrastructureDepartmentAny} from '../store/infrastructure/infrastructure-department-any'
import {setInfrastructureDepartmentExists} from '../store/infrastructure/infrastructure-department-exists'
import {setInfrastructureDepartmentExternal} from '../store/infrastructure/infrastructure-department-external'

const mapStateToProps = (storeState: StoreState) => ({
    infrastructureAdjustments: storeState.infrastructureAdjustments,
    infrastructureDepartmentAny: storeState.infrastructureDepartmentAny,
    infrastructureDepartmentExists: storeState.infrastructureDepartmentExists,
    infrastructureDepartmentExternal: storeState.infrastructureDepartmentExternal,
    infrastructurePenetration: storeState.infrastructurePenetration,
    infrastructureSearch: storeState.infrastructureSearch,

    infrastructureAdjustmentsScore: selectInfrastructureAdjustmentsScore(storeState),
    infrastructureDepartmentScore: selectInfrastructureDepartmentScore(storeState),
    infrastructurePenetrationScore: selectInfrastructurePenetrationScore(storeState),
    infrastructureSearchScore: selectInfrastructureSearchScore(storeState),

    infrastructureScore: selectInfrastructureScore(storeState)
})

const mapDispatchToProps = {
    setInfrastructureAdjustments,
    setInfrastructureDepartmentAny,
    setInfrastructureDepartmentExists,
    setInfrastructureDepartmentExternal,
    setInfrastructurePenetration,
    setInfrastructureSearch
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedInfrastructureFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onInfrastructureAdjustmentsChange = this.onInfrastructureAdjustmentsChange.bind(this)
        this.onInfrastructureDepartmentAnyChange = this.onInfrastructureDepartmentAnyChange.bind(this)
        this.onInfrastructureDepartmentExistsChange = this.onInfrastructureDepartmentExistsChange.bind(this)
        this.onInfrastructureDepartmentExternalChange = this.onInfrastructureDepartmentExternalChange.bind(this)
        this.onInfrastructurePenetrationChange = this.onInfrastructurePenetrationChange.bind(this)
        this.onInfrastructureSearchChange = this.onInfrastructureSearchChange.bind(this)
    }

    onInfrastructureAdjustmentsChange(event: ChangeEvent<HTMLInputElement>): void {
        const infrastructureAdjustments = event.target.value as YesNoNotSure
        this.props.setInfrastructureAdjustments(infrastructureAdjustments)
    }

    onInfrastructureDepartmentAnyChange(event: ChangeEvent<HTMLInputElement>): void {
        const infrastructureDepartmentAny = event.target.value as YesNoNotSure
        this.props.setInfrastructureDepartmentAny(infrastructureDepartmentAny)
    }

    onInfrastructureDepartmentExistsChange(event: ChangeEvent<HTMLInputElement>): void {
        const infrastructureDepartmentExists = event.target.value as YesNoNotSure
        this.props.setInfrastructureDepartmentExists(infrastructureDepartmentExists)
    }

    onInfrastructureDepartmentExternalChange(event: ChangeEvent<HTMLInputElement>): void {
        const infrastructureDepartmentExternal = event.target.value as YesNoNotSure
        this.props.setInfrastructureDepartmentExternal(infrastructureDepartmentExternal)
    }

    onInfrastructurePenetrationChange(event: ChangeEvent<HTMLInputElement>): void {
        const infrastructurePenetration = event.target.value as YesNoNotSure
        this.props.setInfrastructurePenetration(infrastructurePenetration)
    }

    onInfrastructureSearchChange(event: ChangeEvent<HTMLInputElement>): void {
        const infrastructureSearch = event.target.value as YesNoNotSure
        this.props.setInfrastructureSearch(infrastructureSearch)
    }

    render() {
        return <>
            <h2>2. Security Infrastructure</h2>
            <p className="additional-information-h2">The foundation of security is a good IT infrastructure and is one
                of the three most important aspects of this metric.</p>
            <h3>2.1. Cyber Security Department</h3>
            <p className="additional-information-h3">Having a dedicated IT security supervisor is the equivalent of
                having your own department on this question</p>
            <p>
                Do you or your company have a dedicated cyber security department?
            </p>

            <YesNoNotSureRadios name="infrastructure-department-exists"
                                selection={this.props.infrastructureDepartmentExists}
                                onChange={this.onInfrastructureDepartmentExistsChange}/>

            <p>
                Do you use an external service provider to secure your business?
            </p>

            <YesNoNotSureRadios name="infrastructure-department-external"
                                selection={this.props.infrastructureDepartmentExternal}
                                disabled={this.props.infrastructureDepartmentExists === YesNoNotSure.YES}
                                onChange={this.onInfrastructureDepartmentExternalChange}/>

            <p>
                Has your system or infrastructure been secured against cyber attacks at all?
            </p>

            <YesNoNotSureRadios name="infrastructure-department-any"
                                selection={this.props.infrastructureDepartmentAny}
                                disabled={
                                    this.props.infrastructureDepartmentExists === YesNoNotSure.YES
                                    || this.props.infrastructureDepartmentExternal === YesNoNotSure.YES
                                }
                                onChange={this.onInfrastructureDepartmentAnyChange}/>

            <h3>2.2. Regular Adjustments</h3>
            <p className="additional-information-h3"> Meant are regular updates both in the infrastructure and that of
                the operating system</p>
            <p>
                Are regular changes and adjustments made to IT security?
            </p>

            <YesNoNotSureRadios name="infrastructure-adjustments"
                                selection={this.props.infrastructureAdjustments}
                                onChange={this.onInfrastructureAdjustmentsChange}/>

            <h3>2.3. Vulnerability Search</h3>
            <p className="additional-information-h3">The search for vulnerabilities illustrates potential targets of
                attackers and may have been performed by both internal and external experts</p>

            <p>
                Was there an effective search for vulnerabilities in the IT system?
            </p>

            <YesNoNotSureRadios name="infrastructure-search"
                                selection={this.props.infrastructureSearch}
                                onChange={this.onInfrastructureSearchChange}/>

            <h3>2.4. Penetration Tests</h3>
            <p className="additional-information-h3">Penetration tests are used to measure the resilience against
                attacks</p>
            <p>
                Have penetration tests been performed?
            </p>

            <YesNoNotSureRadios name="infrastructure-penetration"
                                selection={this.props.infrastructurePenetration}
                                onChange={this.onInfrastructurePenetrationChange}/>
        </>
    }
}

const InfrastructureFragment = connector(UnconnectedInfrastructureFragment)

export {InfrastructureFragment}
