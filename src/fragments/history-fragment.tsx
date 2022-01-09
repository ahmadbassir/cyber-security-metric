import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectHistoryCurrentScore} from '../store/history/select/history-current'
import {selectHistoryPastScore} from '../store/history/select/history-past'
import {selectHistoryScore} from '../store/history/select/history'
import {setHistoryCurrentPunishment} from '../store/history/history-current-punishment'
import {setHistoryCurrentReviews} from '../store/history/history-current-reviews'
import {setHistoryPastChanges} from '../store/history/history-past-changes'
import {setHistoryPastVictim} from '../store/history/history-past-victim'

const mapStateToProps = (storeState: StoreState) => ({
    historyCurrentPunishment: storeState.historyCurrentPunishment,
    historyCurrentReviews: storeState.historyCurrentReviews,
    historyPastChanges: storeState.historyPastChanges,
    historyPastVictim: storeState.historyPastVictim,

    historyCurrentScore: selectHistoryCurrentScore(storeState),
    historyPastScore: selectHistoryPastScore(storeState),

    historyScore: selectHistoryScore(storeState)
})

const mapDispatchToProps = {
    setHistoryCurrentPunishment,
    setHistoryCurrentReviews,
    setHistoryPastChanges,
    setHistoryPastVictim
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedHistoryFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onHistoryCurrentPunishmentChange = this.onHistoryCurrentPunishmentChange.bind(this)
        this.onHistoryCurrentReviewsChange = this.onHistoryCurrentReviewsChange.bind(this)
        this.onHistoryPastChangesChange = this.onHistoryPastChangesChange.bind(this)
        this.onHistoryPastVictimChange = this.onHistoryPastVictimChange.bind(this)
    }

    onHistoryCurrentPunishmentChange(event: ChangeEvent<HTMLInputElement>): void {
        const historyCurrentPunishment = event.target.value as YesNoNotSure
        this.props.setHistoryCurrentPunishment(historyCurrentPunishment)
    }

    onHistoryCurrentReviewsChange(event: ChangeEvent<HTMLInputElement>): void {
        const historyCurrentReviews = event.target.value as YesNoNotSure
        this.props.setHistoryCurrentReviews(historyCurrentReviews)
    }

    onHistoryPastChangesChange(event: ChangeEvent<HTMLInputElement>): void {
        const historyPastChanges = event.target.value as YesNoNotSure
        this.props.setHistoryPastChanges(historyPastChanges)
    }

    onHistoryPastVictimChange(event: ChangeEvent<HTMLInputElement>): void {
        const historyPastVictim = event.target.value as YesNoNotSure
        this.props.setHistoryPastVictim(historyPastVictim)
    }

    render() {
        return <>
            <h2>16. History</h2>
            <p className="additional-information-h2">Companies that have already fallen victim to attacks have a greater
                awareness of those</p>

            <h3>16.1. Past Attacks</h3>

            <p>
                Has the company already been victim of attacks?
            </p>

            <YesNoNotSureRadios name="history-past-victim"
                                selection={this.props.historyPastVictim}
                                onChange={this.onHistoryPastVictimChange}/>

            <p>
                Were changes made to the IT security after a successful attack?
            </p>

            <YesNoNotSureRadios name="history-past-changes"
                                selection={this.props.historyPastChanges}
                                onChange={this.onHistoryPastChangesChange}/>

            <h3>16.2. Handle New Attacks</h3>

            <p>
                Is compliance with the guidelines reviewed on a regular basis?
            </p>

            <YesNoNotSureRadios name="history-current-reviews"
                                selection={this.props.historyCurrentReviews}
                                onChange={this.onHistoryCurrentReviewsChange}/>

            <p>
                Will violations of this be punished accordingly?
            </p>

            <YesNoNotSureRadios name="history-current-punishment"
                                selection={this.props.historyCurrentPunishment}
                                onChange={this.onHistoryCurrentPunishmentChange}/>
        </>
    }
}

const HistoryFragment = connector(UnconnectedHistoryFragment)

export {HistoryFragment}
