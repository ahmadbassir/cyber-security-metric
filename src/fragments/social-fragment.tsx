import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {connect, ConnectedProps} from 'react-redux'
import {selectSocialScore} from '../store/social/select/social'
import {setSocialPolicy} from '../store/social/social-policy'
import {setSocialUsage} from '../store/social/social-usage'
import {setSocialRepresented} from '../store/social/social-represented'
import {setSocialIncrease} from '../store/social/social-increase'
import {setSocialNews} from '../store/social/social-news'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'

const mapStateToProps = (storeState: StoreState) => ({
    socialPolicy: storeState.socialPolicy,
    socialUsage: storeState.socialUsage,
    socialRepresented: storeState.socialRepresented,
    socialIncrease: storeState.socialIncrease,
    socialNews: storeState.socialNews,

    socialScore: selectSocialScore(storeState)
})

const mapDispatchToProps = {
    setSocialPolicy,
    setSocialUsage,
    setSocialRepresented,
    setSocialIncrease,
    setSocialNews
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedSocialFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onSocialPolicyChange = this.onSocialPolicyChange.bind(this)
        this.onSocialUsageChange = this.onSocialUsageChange.bind(this)
        this.onSocialRepresentedChange = this.onSocialRepresentedChange.bind(this)
        this.onSocialIncreaseChange = this.onSocialIncreaseChange.bind(this)
        this.onSocialNewsChange = this.onSocialNewsChange.bind(this)
    }

    onSocialPolicyChange(event: ChangeEvent<HTMLInputElement>): void {
        const socialPolicy = event.target.value as YesNoNotSure
        this.props.setSocialPolicy(socialPolicy)
    }

    onSocialUsageChange(event: ChangeEvent<HTMLInputElement>): void {
        const socialUsage = event.target.value as YesNoNotSure
        this.props.setSocialUsage(socialUsage)
    }

    onSocialRepresentedChange(event: ChangeEvent<HTMLInputElement>): void {
        const socialRepresented = event.target.value as YesNoNotSure
        this.props.setSocialRepresented(socialRepresented)
    }

    onSocialIncreaseChange(event: ChangeEvent<HTMLInputElement>): void {
        const socialIncrease = event.target.value as YesNoNotSure
        this.props.setSocialIncrease(socialIncrease)
    }

    onSocialNewsChange(event: ChangeEvent<HTMLInputElement>): void {
        const socialNews = event.target.value as YesNoNotSure
        this.props.setSocialNews(socialNews)
    }

    render() {
        return <>
            <h2>18. Social Media({this.props.socialScore.toFixed(2)})</h2>
            <p className="additional-information-h2">The presence and information disclosure should be chosen wisely by
                everyone on social media as criminals gather information to carry out customized attacks</p>

            <p>
                Are policies in place regarding social media?
            </p>

            <YesNoNotSureRadios name="social-policy"
                                selection={this.props.socialPolicy}
                                onChange={this.onSocialPolicyChange}/>

            <p>
                Are employees educated on how to use social media?
            </p>

            <YesNoNotSureRadios name="social-usage"
                                selection={this.props.socialUsage}
                                onChange={this.onSocialUsageChange}/>

            <p>
                Is your own work area or activity represented on social media?
            </p>

            <YesNoNotSureRadios name="social-represented"
                                selection={this.props.socialRepresented}
                                onChange={this.onSocialRepresentedChange}/>

            <p>
                Is there an increase on social media platforms?
            </p>

            <YesNoNotSureRadios name="social-increase"
                                selection={this.props.socialIncrease}
                                onChange={this.onSocialIncreaseChange}/>

            <p>
                Is the company currently in the newspapers, news or headlines?
            </p>

            <YesNoNotSureRadios name="social-news"
                                selection={this.props.socialNews}
                                onChange={this.onSocialNewsChange}/>


        </>
    }
}

const SocialFragment = connector(UnconnectedSocialFragment)

export {SocialFragment}
