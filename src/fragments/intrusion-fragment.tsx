import React, {ChangeEvent} from 'react'
import {IdsIpsNone, setIntrusionIdsIps} from '../store/intrusion/intrusion-ids-ips'
import {Radios} from '../components/radios'
import {StoreState} from '../store'
import {connect, ConnectedProps} from 'react-redux'
import {selectIntrusionScore} from '../store/intrusion/select/intrusion'
import {setIntrusionIdsReactionTime} from '../store/intrusion/intrusion-ids-reaction-time'
import {setIntrusionInHouse} from '../store/intrusion/intrusion-in-house'
import { YesNoNotSure } from '../components/yes-no-not-sure-radios'

const mapStateToProps = (storeState: StoreState) => ({
    intrusionIdsIps: storeState.intrusionIdsIps,
    intrusionIdsReactionTime: storeState.intrusionIdsReactionTime,
    intrusionInHouse: storeState.intrusionInHouse,

    intrusionScore: selectIntrusionScore(storeState)
})

const mapDispatchToProps = {
    setIntrusionIdsIps,
    setIntrusionIdsReactionTime,
    setIntrusionInHouse
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedIntrusionFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onIntrusionIdsIpsChange = this.onIntrusionIdsIpsChange.bind(this)
        this.onIntrusionIdsReactionTimeChange = this.onIntrusionIdsReactionTimeChange.bind(this)
        this.onIntrusionInHouseChange = this.onIntrusionInHouseChange.bind(this)
    }

    onIntrusionIdsIpsChange(event: ChangeEvent<HTMLInputElement>): void {
        const intrusionIdsIps = event.target.value as IdsIpsNone
        this.props.setIntrusionIdsIps(intrusionIdsIps)
    }

    onIntrusionIdsReactionTimeChange(event: ChangeEvent<HTMLInputElement>): void {
        const intrusionIdsReactionTime = Number(event.target.value)
        this.props.setIntrusionIdsReactionTime(intrusionIdsReactionTime)
    }

    onIntrusionInHouseChange(event: ChangeEvent<HTMLInputElement>): void {
        const intrusionInHouse = event.target.value as YesNoNotSure
        this.props.setIntrusionInHouse(intrusionInHouse)
    }

    render() {
        return <>
            <h2>9. Intrusion Detection/Prevention</h2>
            <p className="additional-information-h2">Systems for real-time recognition help enormously in the regulation
                of damage</p>

            <p>
                Do you use an Intrusion Detection System or an Intrusion Prevention System?
            </p>

            <Radios name="intrusion-ids-ips-system"
                    options={[
                        {text: 'IDS', value: IdsIpsNone.IDS},
                        {text: 'IPS', value: IdsIpsNone.IPS},
                        {text: 'None', value: IdsIpsNone.NONE}
                    ]}
                    selection={this.props.intrusionIdsIps}
                    onChange={this.onIntrusionIdsIpsChange}/>

            <p>
                How long does it take to react to an intrusion detected by the IDS?
            </p>

            <label htmlFor="intrusion-ids-reaction-time">Time in minutes</label>
            <input id="intrusion-ids-reaction-time" className="ml-16"
                   type="number" min="0" defaultValue={this.props.intrusionIdsReactionTime}
                   disabled={this.props.intrusionIdsIps !== IdsIpsNone.IDS}
                   onChange={this.onIntrusionIdsReactionTimeChange}/>

            <p>
                Are intrusion systems developed or extended in-house or externally?
            </p>

            <Radios name="intrusion-in-house-development"
                    options={[
                        {text: 'Yes', value: YesNoNotSure.YES},
                        {text: 'No', value: YesNoNotSure.NO},
                        {text: 'Not Sure', value: YesNoNotSure.NOT_SURE}
                    ]}
                    selection={this.props.intrusionInHouse}
                    onChange={this.onIntrusionInHouseChange}/>
        </>
    }
}

const IntrusionFragment = connector(UnconnectedIntrusionFragment)

export {IntrusionFragment}
