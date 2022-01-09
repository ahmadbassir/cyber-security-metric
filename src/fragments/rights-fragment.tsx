import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectRightsManagementUsedScore, setRightsManagementUsed} from '../store/rights/rights-managment-used'

const mapStateToProps = (storeState: StoreState) => ({
    rightsManagementUsed: storeState.rightsManagementUsed,

    rightsScore: selectRightsManagementUsedScore(storeState)
})

const mapDispatchToProps = {
    setRightsManagementUsed
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedRightsFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onRightsManagementUsedChange = this.onRightsManagementUsedChange.bind(this)
    }

    onRightsManagementUsedChange(event: ChangeEvent<HTMLInputElement>): void {
        const rightsManagementUsed = event.target.value as YesNoNotSure
        this.props.setRightsManagementUsed(rightsManagementUsed)
    }

    render() {
        return <>
            <h2>7. Rights Administration</h2>
            <p className="additional-information-h2">The larger the company, the more important it is to restrict user
                rights</p>

            <p>
                Are user rights appropriately restricted?
            </p>

            <YesNoNotSureRadios name="rights-management-used"
                                selection={this.props.rightsManagementUsed}
                                onChange={this.onRightsManagementUsedChange}/>
        </>
    }
}

const RightsFragment = connector(UnconnectedRightsFragment)

export {RightsFragment}
