import React, {ChangeEvent} from 'react'
import {selectPasswordsKnowingPeopleScore, setPasswordsKnowingPeople} from '../store/passwords/passwords-knowing-people'
import {Checkboxes} from '../components/checkboxes'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {
    selectPasswordsPersonalInformationScore,
    setPasswordsPersonalInformation
} from '../store/passwords/passwords-personal-information'
import {selectPasswordsPhotosTakenScore, setPasswordsPhotosTaken} from '../store/passwords/passwords-photos-taken'
import {selectPasswordsReuseScore, setPasswordsReuse} from '../store/passwords/passwords-reuse'
import {selectPasswordsScore} from '../store/passwords/select/passwords'
import {setPasswordsStorageManager} from '../store/passwords/passwords-storage-manager'
import {setPasswordsStorageFile} from '../store/passwords/passwords-storage-file'
import {setPasswordsStoragePhone} from '../store/passwords/passwords-storage-phone'
import {setPasswordsStorageOther} from '../store/passwords/passwords-storage-other'
import {selectPasswordsStorageScore} from '../store/passwords/select/passwords-storage'
import {selectPasswordsStrengthScore} from '../store/passwords/select/passwords-strength'
import {
    selectPasswordsUpdateFrequencyScore,
    setPasswordsUpdateFrequency
} from '../store/passwords/passwords-update-frequency'
import {setPasswordsStrengthContainsCapital} from '../store/passwords/passwords-strength-contains-capital'
import {setPasswordsStrengthContainsLower} from '../store/passwords/passwords-strength-contains-lower'
import {setPasswordsStrengthContainsNumber} from '../store/passwords/passwords-strength-contains-number'
import {setPasswordsStrengthContainsSpecial} from '../store/passwords/passwords-strength-contains-special'
import {setPasswordsStrengthLength} from '../store/passwords/passwords-strength-length'

const mapStateToProps = (storeState: StoreState) => ({
    passwordsKnowingPeople: storeState.passwordsKnowingPeople,
    passwordsPersonalInformation: storeState.passwordsPersonalInformation,
    passwordsPhotosTaken: storeState.passwordsPhotosTaken,
    passwordsStrengthContainsCapital: storeState.passwordsStrengthContainsCapital,
    passwordsStrengthContainsLower: storeState.passwordsStrengthContainsLower,
    passwordsStrengthContainsNumber: storeState.passwordsStrengthContainsNumber,
    passwordsStrengthContainsSpecial: storeState.passwordsStrengthContainsSpecial,
    passwordsStrengthLength: storeState.passwordsStrengthLength,
    passwordsReuse: storeState.passwordsReuse,
    passwordsStorageManager: storeState.passwordsStorageManager,
    passwordsStorageFile: storeState.passwordsStorageFile,
    passwordsStoragePhone: storeState.passwordsStoragePhone,
    passwordsStorageOther: storeState.passwordsStorageOther,
    passwordsUpdateFrequency: storeState.passwordsUpdateFrequency,

    passwordsKnowingPeopleScore: selectPasswordsKnowingPeopleScore(storeState),
    passwordsPersonalInformationScore: selectPasswordsPersonalInformationScore(storeState),
    passwordsPhotosTakenScore: selectPasswordsPhotosTakenScore(storeState),
    passwordsReuseScore: selectPasswordsReuseScore(storeState),
    passwordsStorageScore: selectPasswordsStorageScore(storeState),

    passwordsStrengthScore: selectPasswordsStrengthScore(storeState),
    passwordsUpdateFrequencyScore: selectPasswordsUpdateFrequencyScore(storeState),

    passwordsScore: selectPasswordsScore(storeState)
})

const mapDispatchToProps = {
    setPasswordsKnowingPeople,
    setPasswordsPersonalInformation,
    setPasswordsPhotosTaken,
    setPasswordsReuse,
    setPasswordsStorageManager,
    setPasswordsStorageFile,
    setPasswordsStoragePhone,
    setPasswordsStorageOther,
    setPasswordsStrengthContainsCapital,
    setPasswordsStrengthContainsLower,
    setPasswordsStrengthContainsNumber,
    setPasswordsStrengthContainsSpecial,
    setPasswordsStrengthLength,
    setPasswordsUpdateFrequency
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedPasswordsFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onPasswordsKnowingPeopleChange = this.onPasswordsKnowingPeopleChange.bind(this)
        this.onPasswordsPersonalInformationChange = this.onPasswordsPersonalInformationChange.bind(this)
        this.onPasswordsPhotosTakenChange = this.onPasswordsPhotosTakenChange.bind(this)
        this.onPasswordsReuseChange = this.onPasswordsReuseChange.bind(this)
        //this.onPasswordsStorageLocationChange = this.onPasswordsStorageLocationChange.bind(this)
        this.onPasswordsStorageManagerChange = this.onPasswordsStorageManagerChange.bind(this)
        this.onPasswordsStorageFileChange = this.onPasswordsStorageFileChange.bind(this)
        this.onPasswordsStoragePhoneChange = this.onPasswordsStoragePhoneChange.bind(this)
        this.onPasswordsStorageOtherChange = this.onPasswordsStorageOtherChange.bind(this)

        this.onPasswordsStrengthContainsCapitalChange = this.onPasswordsStrengthContainsCapitalChange.bind(this)
        this.onPasswordsStrengthContainsLowerChange = this.onPasswordsStrengthContainsLowerChange.bind(this)
        this.onPasswordsStrengthContainsNumberChange = this.onPasswordsStrengthContainsNumberChange.bind(this)
        this.onPasswordsStrengthContainsSpecialChange = this.onPasswordsStrengthContainsSpecialChange.bind(this)
        this.onPasswordsStrengthLengthChange = this.onPasswordsStrengthLengthChange.bind(this)
        this.onPasswordsUpdateFrequencyChange = this.onPasswordsUpdateFrequencyChange.bind(this)
    }

    onPasswordsKnowingPeopleChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsKnowingPeople = Number(event.target.value)
        this.props.setPasswordsKnowingPeople(passwordsKnowingPeople)
    }

    onPasswordsPersonalInformationChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsPersonalInformation = event.target.value as YesNoNotSure
        this.props.setPasswordsPersonalInformation(passwordsPersonalInformation)
    }

    onPasswordsPhotosTakenChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsPhotosTaken = event.target.value as YesNoNotSure
        this.props.setPasswordsPhotosTaken(passwordsPhotosTaken)
    }

    onPasswordsReuseChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsReuse = Number(event.target.value)
        this.props.setPasswordsReuse(passwordsReuse)
    }

    onPasswordsStorageManagerChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsStorageManager = event.target.checked
        this.props.setPasswordsStorageManager(passwordsStorageManager)
    }

    onPasswordsStorageFileChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsStorageFile = event.target.checked
        this.props.setPasswordsStorageFile(passwordsStorageFile)
    }

    onPasswordsStoragePhoneChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsStoragePhone = event.target.checked
        this.props.setPasswordsStoragePhone(passwordsStoragePhone)
    }

    onPasswordsStorageOtherChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsStorageOther = event.target.checked
        this.props.setPasswordsStorageOther(passwordsStorageOther)
    }

    onPasswordsStrengthContainsCapitalChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsStrengthContainsCapital = event.target.checked
        this.props.setPasswordsStrengthContainsCapital(passwordsStrengthContainsCapital)
    }

    onPasswordsStrengthContainsLowerChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsStrengthContainsLower = event.target.checked
        this.props.setPasswordsStrengthContainsLower(passwordsStrengthContainsLower)
    }

    onPasswordsStrengthContainsNumberChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsStrengthContainsNumber = event.target.checked
        this.props.setPasswordsStrengthContainsNumber(passwordsStrengthContainsNumber)
    }

    onPasswordsStrengthContainsSpecialChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsStrengthContainsSpecial = event.target.checked
        this.props.setPasswordsStrengthContainsSpecial(passwordsStrengthContainsSpecial)
    }

    onPasswordsStrengthLengthChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsStrengthLength = Number(event.target.value)
        this.props.setPasswordsStrengthLength(passwordsStrengthLength)
    }

    onPasswordsUpdateFrequencyChange(event: ChangeEvent<HTMLInputElement>): void {
        const passwordsUpdateFrequency = Number(event.target.value)
        this.props.setPasswordsUpdateFrequency(passwordsUpdateFrequency)
    }

    render() {
        const passwordsContainsOptions = [
            {
                text: 'Capital Letters',
                checked: this.props.passwordsStrengthContainsCapital,
                onChange: this.onPasswordsStrengthContainsCapitalChange
            },
            {
                text: 'Lower Letters',
                checked: this.props.passwordsStrengthContainsLower,
                onChange: this.onPasswordsStrengthContainsLowerChange
            },
            {
                text: 'Numbers',
                checked: this.props.passwordsStrengthContainsNumber,
                onChange: this.onPasswordsStrengthContainsNumberChange
            },
            {
                text: 'Special Characters',
                checked: this.props.passwordsStrengthContainsSpecial,
                onChange: this.onPasswordsStrengthContainsSpecialChange
            }
        ]

        const passwordsStorageOptions = [
            {
                text: 'Password Manager',
                checked: this.props.passwordsStorageManager,
                onChange: this.onPasswordsStorageManagerChange
            },
            {
                text: 'File',
                checked: this.props.passwordsStorageFile,
                onChange: this.onPasswordsStorageFileChange
            },
            {
                text: 'Phone',
                checked: this.props.passwordsStoragePhone,
                onChange: this.onPasswordsStoragePhoneChange
            },
            {
                text: 'Other',
                checked: this.props.passwordsStorageOther,
                onChange: this.onPasswordsStorageOtherChange
            }
        ]

        return <>
            <h2>5. Password</h2>
            <p className="additional-information-h2">A strong password is the basis for good security and the third most
                important element of this metric. </p>

            <h3>5.1. Password Strength</h3>
            <p className="additional-information-h3">Password strength is determined by the time it takes to crack your
                password. The more characters you use and the longer your password is, the stronger it is. </p>
            <label htmlFor="passwords-length">Minimum Password Length</label>
            <input id="passwords-length" className="ml-16"
                   type="number" min="0" defaultValue={this.props.passwordsStrengthLength}
                   onChange={this.onPasswordsStrengthLengthChange}/>

            <p>
                Which characters are required in passwords?
            </p>

            <Checkboxes name="passwords-contains"
                        options={passwordsContainsOptions}/>

            <h3>5.2. Password Reuse</h3>
            <p className="additional-information-h3">It is recommended to use a password only once</p>

            <p>
                What is the maximum number of accounts a password may be used for?
            </p>

            <label htmlFor="passwords-reuse">Maximum number of accounts</label>
            <input id="passwords-reuse" className="ml-16"
                   type="number" min="1" defaultValue={this.props.passwordsReuse}
                   onChange={this.onPasswordsReuseChange}/>

            <h3>5.3. Password Update Frequency</h3>
            <p className="additional-information-h3">The recommendation here is to change the password every three
                months to ensure optimal security</p>
            <p>
                How often do passwords have to be changed?
            </p>

            <label htmlFor="passwords-update-frequency">Frequency in months</label>
            <input id="passwords-update-frequency" className="ml-16"
                   type="number" min="0" defaultValue={this.props.passwordsUpdateFrequency}
                   onChange={this.onPasswordsUpdateFrequencyChange}/>

            <h3>5.4. Password Storage Location</h3>
            <p className="additional-information-h3">A password manager is the optimal way to store a password</p>

            <p>
                Where are passwords stored?
            </p>

            <Checkboxes name="passwords-storage"
                        options={passwordsStorageOptions}/>


            <h3>5.5. Personal Information</h3>
            <p className="additional-information-h3">Personal information such as the name of the pet should never be
                part of the password</p>

            <p>
                Does the password contain personal information?
            </p>

            <YesNoNotSureRadios name="passwords-personal-information"
                                selection={this.props.passwordsPersonalInformation}
                                onChange={this.onPasswordsPersonalInformationChange}/>

            <h3>5.6. Photos of Passwords</h3>
            <p className="additional-information-h3">It is recommended not to take photos of passwords</p>

            <p>
                Were photos taken of passwords?
            </p>

            <YesNoNotSureRadios name="passwords-photos-taken"
                                selection={this.props.passwordsPhotosTaken}
                                onChange={this.onPasswordsPhotosTakenChange}/>

            <h3>5.7. Knowing People</h3>
            <p className="additional-information-h3">The best password is one that you do not even know yourself and
                therefore it is recommended that no other people should know the password</p>
            <p>
                How many people know the passwords?
            </p>

            <label htmlFor="passwords-knowing-people">Number of people</label>
            <input id="passwords-knowing-people" className="ml-16"
                   type="number" min="1" defaultValue={this.props.passwordsKnowingPeople}
                   onChange={this.onPasswordsKnowingPeopleChange}/>
        </>

    }
}

const PasswordsFragment = connector(UnconnectedPasswordsFragment)

export {PasswordsFragment}
