import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {connect, ConnectedProps} from 'react-redux'
import {selectOfflineScore} from '../store/offline/select/offline'
import {setOfflineOperation} from '../store/offline/offline-operation'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'

const mapStateToProps = (storeState: StoreState) => ({
    offlineOperation: storeState.offlineOperation,

    offlineScore: selectOfflineScore(storeState)
})

const mapDispatchToProps = {
    setOfflineOperation
}


const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedOfflineFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onOfflineOperationChange = this.onOfflineOperationChange.bind(this)

    }

    onOfflineOperationChange(event: ChangeEvent<HTMLInputElement>): void {
        const offlineOperation = event.target.value as YesNoNotSure
        this.props.setOfflineOperation(offlineOperation)
    }

    render() {
        return <>
            <h2>19. Offline</h2>
            <p className="additional-information-h2">The possibility of temporary shutdown of the plant reduces the
                damage in case of attack</p>

            <p>
                Is it possible to temporarily put the service out of operation?
            </p>

            <YesNoNotSureRadios name="offline-operation"
                                selection={this.props.offlineOperation}
                                onChange={this.onOfflineOperationChange}/>
        </>
    }
}

const OfflineFragment = connector(UnconnectedOfflineFragment)

export {OfflineFragment}
