import React, {ChangeEvent} from 'react'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectSafetyCaptchasScore} from '../store/safety/select/safety-captchas'
import {selectSafetyLoginAttemptsScore} from '../store/safety/select/safety-login-attempts'
import {selectSafetyMfaScore} from '../store/safety/select/safety-mfa'
import {selectSafetyScore} from '../store/safety/select/safety'
import {setSafetyCaptchasUsed} from '../store/safety/safety-captchas-used'
import {setSafetyLockTime} from '../store/safety/safety-lock-time'
import {setSafetyLoginAttemptsLimited} from '../store/safety/safety-login-attempts-limited'
import {setSafetyMaxLoginAttempts} from '../store/safety/safety-max-login-attempts'
import {setSafetyMfaUsed} from '../store/safety/safety-mfa-used'

const mapStateToProps = (storeState: StoreState) => ({
    safetyCaptchasUsed: storeState.safetyCaptchasUsed,
    safetyLockTime: storeState.safetyLockTime,
    safetyLoginAttemptsLimited: storeState.safetyLoginAttemptsLimited,
    safetyMaxLoginAttempts: storeState.safetyMaxLoginAttempts,
    safetyMfaUsed: storeState.safetyMfaUsed,

    safetyCaptchasScore: selectSafetyCaptchasScore(storeState),
    safetyLoginAttemptsScore: selectSafetyLoginAttemptsScore(storeState),
    safetyMfaScore: selectSafetyMfaScore(storeState),

    safetyScore: selectSafetyScore(storeState)
})

const mapDispatchToProps = {
    setSafetyCaptchasUsed,
    setSafetyLockTime,
    setSafetyLoginAttemptsLimited,
    setSafetyMaxLoginAttempts,
    setSafetyMfaUsed
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedSafetyFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onSafetyCaptchasUsedChange = this.onSafetyCaptchasUsedChange.bind(this)
        this.onSafetyLockTimeChange = this.onSafetyLockTimeChange.bind(this)
        this.onSafetyLoginAttemptsLimitedChange = this.onSafetyLoginAttemptsLimitedChange.bind(this)
        this.onSafetyMaxLoginAttemptsChange = this.onSafetyMaxLoginAttemptsChange.bind(this)
        this.onSafetyMfaUsedChange = this.onSafetyMfaUsedChange.bind(this)
    }

    onSafetyCaptchasUsedChange(event: ChangeEvent<HTMLInputElement>): void {
        const safetyCaptchasUsed = event.target.value as YesNoNotSure
        this.props.setSafetyCaptchasUsed(safetyCaptchasUsed)
    }

    onSafetyLockTimeChange(event: ChangeEvent<HTMLInputElement>): void {
        const safetyLockTime = Number(event.target.value)
        this.props.setSafetyLockTime(safetyLockTime)
    }

    onSafetyLoginAttemptsLimitedChange(event: ChangeEvent<HTMLInputElement>): void {
        const safetyLoginAttemptsLimited = event.target.value as YesNoNotSure
        this.props.setSafetyLoginAttemptsLimited(safetyLoginAttemptsLimited)
    }

    onSafetyMaxLoginAttemptsChange(event: ChangeEvent<HTMLInputElement>): void {
        const safetyMaxLoginAttempts = Number(event.target.value)
        this.props.setSafetyMaxLoginAttempts(safetyMaxLoginAttempts)
    }

    onSafetyMfaUsedChange(event: ChangeEvent<HTMLInputElement>): void {
        const safetyMfaUsed = event.target.value as YesNoNotSure
        this.props.setSafetyMfaUsed(safetyMfaUsed)
    }

    render() {
        return <>
            <h2>10. Common Safety Methods</h2>
            <p className="additional-information-h2">The three methods help to prevent unauthorized access</p>

            <h3>10.1. Login Attempts</h3>
            <p className="additional-information-h3">Restriction prevents brute force attacks and botnets from easily
                trying a variety of possible passwords</p>

            <p>
                Is the number of login attempts limited?
            </p>

            <YesNoNotSureRadios name="login-attempts-limited"
                                selection={this.props.safetyLoginAttemptsLimited}
                                onChange={this.onSafetyLoginAttemptsLimitedChange}/>

            <p>
                What is the maximum number of login attempts?
            </p>

            <label htmlFor="max-login-attempts">Max login attempts</label>
            <input id="max-login-attempts" className="ml-16"
                   type="number" min="1" defaultValue={this.props.safetyMaxLoginAttempts}
                   disabled={this.props.safetyLoginAttemptsLimited !== YesNoNotSure.YES}
                   onChange={this.onSafetyMaxLoginAttemptsChange}/>

            <p>
                How long is the lock time?
            </p>

            <label htmlFor="lock-time">Lock time in minutes</label>
            <input id="lock-time" className="ml-16"
                   type="number" min="0" defaultValue={this.props.safetyLockTime}
                   disabled={this.props.safetyLoginAttemptsLimited !== YesNoNotSure.YES}
                   onChange={this.onSafetyLockTimeChange}/>

            <h3>10.2. Captchas</h3>
            <p className="additional-information-h3">Captchas make it harder for robots to gain unauthorized access</p>

            <p>
                Are captchas being used?
            </p>

            <YesNoNotSureRadios name="captchas-used"
                                selection={this.props.safetyCaptchasUsed}
                                onChange={this.onSafetyCaptchasUsedChange}/>

            <h3>10.3. MFA</h3>
            <p className="additional-information-h3">By using this, people who even have the password will be made
                logging into your account nearly impossible</p>
            <p>
                Is Multi-Factor-Authentication being used?
            </p>

            <YesNoNotSureRadios name="mfa-used"
                                selection={this.props.safetyMfaUsed}
                                onChange={this.onSafetyMfaUsedChange}/>
        </>
    }
}

const SafetyFragment = connector(UnconnectedSafetyFragment)

export {SafetyFragment}
