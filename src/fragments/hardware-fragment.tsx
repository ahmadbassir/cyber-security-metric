import React, {ChangeEvent} from 'react'
import {Checkboxes} from '../components/checkboxes'
import {
    HardwareHomeSecurityStorage,
    setHardwareHomeSecurityStorage
} from '../store/hardware/hardware-home-security-storage'
import {
    HardwareOfficeSecurityStorage,
    setHardwareOfficeSecurityStorage
} from '../store/hardware/hardware-office-security-storage'
import {HardwareParkCar, setHardwareParkCar} from '../store/hardware/hardware-park-car'
import {Radios} from '../components/radios'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectHardwareAccessScore} from '../store/hardware/select/hardware-access'
import {selectHardwareDeviceScore} from '../store/hardware/select/hardware-device'
import {selectHardwareHomeSecurityScore} from '../store/hardware/select/hardware-home-security'
import {selectHardwareInformationScore} from '../store/hardware/select/hardware-information'
import {selectHardwareNetworkScore} from '../store/hardware/select/hardware-network'
import {selectHardwareOfficeSecurityScore} from '../store/hardware/select/hardware-office-security'
import {selectHardwareScore} from '../store/hardware/select/hardware'
import {selectHardwareTransportScore} from '../store/hardware/select/hardware-transport'
import {setHardwareAccessFullCount} from '../store/hardware/hardware-access-full-count'
import {setHardwareAccessPhysicalCount} from '../store/hardware/hardware-access-physical-count'
import {setHardwareDriveCar} from '../store/hardware/hardware-drive-car'
import {setHardwareHomeSecuritySystemAlarm} from '../store/hardware/hardware-home-security-system-alarm'
import {setHardwareHomeSecuritySystemCamera} from '../store/hardware/hardware-home-security-system-camera'
import {setHardwareHomeSecuritySystemDog} from '../store/hardware/hardware-home-security-system-dog'
import {setHardwareHomeSecuritySystemMotion} from '../store/hardware/hardware-home-security-system-motion'
import {setHardwareHomeSecuritySystemOther} from '../store/hardware/hardware-home-security-system-other'
import {setHardwareHomeSecurityVacation} from '../store/hardware/hardware-home-security-vacation'
import {setHardwareHome} from '../store/hardware/hardware-home'
import {setHardwareInformationRemoteLock} from '../store/hardware/hardware-information-remote-lock'
import {setHardwareInformationReviewLock} from '../store/hardware/hardware-information-review-lock'
import {setHardwareInformationScreenLock} from '../store/hardware/hardware-information-screen-lock'
import {setHardwareNetworkWifiCount} from '../store/hardware/hardware-network-wifi-count'
import {setHardwareNetworkWifiMultiple} from '../store/hardware/hardware-network-wifi-multiple'
import {setHardwareOfficeSecurityMeasureAccess} from '../store/hardware/hardware-office-security-measure-access'
import {setHardwareOfficeSecurityMeasureAlarm} from '../store/hardware/hardware-office-security-measure-alarm'
import {setHardwareOfficeSecurityMeasureCamera} from '../store/hardware/hardware-office-security-measure-camera'
import {setHardwareOfficeSecurityMeasureMotion} from '../store/hardware/hardware-office-security-measure-motion'
import {setHardwareOfficeSecurityMeasureOther} from '../store/hardware/hardware-office-security-measure-other'
import {setHardwarePublicTransport} from '../store/hardware/hardware-public-transport'
import {setHardwareTrainChanges} from '../store/hardware/hardware-train-changes'
import {setHardwareWalk} from '../store/hardware/hardware-walk'

const mapStateToProps = (storeState: StoreState) => ({
    hardwareAccessFullCount: storeState.hardwareAccessFullCount,
    hardwareAccessPhysicalCount: storeState.hardwareAccessPhysicalCount,
    hardwareDriveCar: storeState.hardwareDriveCar,
    hardwareHome: storeState.hardwareHome,
    hardwareHomeSecurityStorage: storeState.hardwareHomeSecurityStorage,
    hardwareHomeSecuritySystemAlarm: storeState.hardwareHomeSecuritySystemAlarm,
    hardwareHomeSecuritySystemCamera: storeState.hardwareHomeSecuritySystemCamera,
    hardwareHomeSecuritySystemDog: storeState.hardwareHomeSecuritySystemDog,
    hardwareHomeSecuritySystemMotion: storeState.hardwareHomeSecuritySystemMotion,
    hardwareHomeSecuritySystemOther: storeState.hardwareHomeSecuritySystemOther,
    hardwareHomeSecurityVacation: storeState.hardwareHomeSecurityVacation,
    hardwareInformationRemoteLock: storeState.hardwareInformationRemoteLock,
    hardwareInformationReviewLock: storeState.hardwareInformationReviewLock,
    hardwareInformationScreenLock: storeState.hardwareInformationScreenLock,
    hardwareNetworkWifiCount: storeState.hardwareNetworkWifiCount,
    hardwareNetworkWifiMultiple: storeState.hardwareNetworkWifiMultiple,
    hardwareOfficeSecurityMeasureAccess: storeState.hardwareOfficeSecurityMeasureAccess,
    hardwareOfficeSecurityMeasureAlarm: storeState.hardwareOfficeSecurityMeasureAlarm,
    hardwareOfficeSecurityMeasureCamera: storeState.hardwareOfficeSecurityMeasureCamera,
    hardwareOfficeSecurityMeasureMotion: storeState.hardwareOfficeSecurityMeasureMotion,
    hardwareOfficeSecurityMeasureOther: storeState.hardwareOfficeSecurityMeasureOther,
    hardwareOfficeSecurityStorage: storeState.hardwareOfficeSecurityStorage,
    hardwareParkCar: storeState.hardwareParkCar,
    hardwarePublicTransport: storeState.hardwarePublicTransport,
    hardwareTrainChanges: storeState.hardwareTrainChanges,
    hardwareWalk: storeState.hardwareWalk,

    hardwareHomeSecurityScore: selectHardwareHomeSecurityScore(storeState),
    hardwareTransportScore: selectHardwareTransportScore(storeState),

    hardwareAccessScore: selectHardwareAccessScore(storeState),
    hardwareDevicesScore: selectHardwareDeviceScore(storeState),
    hardwareInformationScore: selectHardwareInformationScore(storeState),
    hardwareNetworkScore: selectHardwareNetworkScore(storeState),
    hardwareOfficeSecurityScore: selectHardwareOfficeSecurityScore(storeState),

    hardwareScore: selectHardwareScore(storeState)
})

const mapDispatchToProps = {
    setHardwareAccessFullCount,
    setHardwareAccessPhysicalCount,
    setHardwareDriveCar,
    setHardwareHome,
    setHardwareHomeSecurityStorage,
    setHardwareHomeSecuritySystemAlarm,
    setHardwareHomeSecuritySystemCamera,
    setHardwareHomeSecuritySystemDog,
    setHardwareHomeSecuritySystemMotion,
    setHardwareHomeSecuritySystemOther,
    setHardwareHomeSecurityVacation,
    setHardwareInformationRemoteLock,
    setHardwareInformationReviewLock,
    setHardwareInformationScreenLock,
    setHardwareNetworkWifiCount,
    setHardwareNetworkWifiMultiple,
    setHardwareOfficeSecurityMeasureAccess,
    setHardwareOfficeSecurityMeasureAlarm,
    setHardwareOfficeSecurityMeasureCamera,
    setHardwareOfficeSecurityMeasureMotion,
    setHardwareOfficeSecurityMeasureOther,
    setHardwareOfficeSecurityStorage,
    setHardwareParkCar,
    setHardwarePublicTransport,
    setHardwareTrainChanges,
    setHardwareWalk,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedHardwareFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onHardwareAccessFullCountChange = this.onHardwareAccessFullCountChange.bind(this)
        this.onHardwareAccessPhysicalCountChange = this.onHardwareAccessPhysicalCountChange.bind(this)
        this.onHardwareDriveCarChange = this.onHardwareDriveCarChange.bind(this)
        this.onHardwareHomeChange = this.onHardwareHomeChange.bind(this)
        this.onHardwareHomeSecurityStorageChange = this.onHardwareHomeSecurityStorageChange.bind(this)
        this.onHardwareHomeSecuritySystemAlarmChange = this.onHardwareHomeSecuritySystemAlarmChange.bind(this)
        this.onHardwareHomeSecuritySystemCameraChange = this.onHardwareHomeSecuritySystemCameraChange.bind(this)
        this.onHardwareHomeSecuritySystemDogChange = this.onHardwareHomeSecuritySystemDogChange.bind(this)
        this.onHardwareHomeSecuritySystemMotionChange = this.onHardwareHomeSecuritySystemMotionChange.bind(this)
        this.onHardwareHomeSecuritySystemOtherChange = this.onHardwareHomeSecuritySystemOtherChange.bind(this)
        this.onHardwareHomeSecurityVacationChange = this.onHardwareHomeSecurityVacationChange.bind(this)
        this.onHardwareInformationRemoteLockChange = this.onHardwareInformationRemoteLockChange.bind(this)
        this.onHardwareInformationReviewLockChange = this.onHardwareInformationReviewLockChange.bind(this)
        this.onHardwareInformationScreenLockChange = this.onHardwareInformationScreenLockChange.bind(this)
        this.onHardwareNetworkWifiCountChange = this.onHardwareNetworkWifiCountChange.bind(this)
        this.onHardwareNetworkWifiMultipleChange = this.onHardwareNetworkWifiMultipleChange.bind(this)
        this.onHardwareOfficeSecurityMeasureAccessChange = this.onHardwareOfficeSecurityMeasureAccessChange.bind(this)
        this.onHardwareOfficeSecurityMeasureAlarmChange = this.onHardwareOfficeSecurityMeasureAlarmChange.bind(this)
        this.onHardwareOfficeSecurityMeasureCameraChange = this.onHardwareOfficeSecurityMeasureCameraChange.bind(this)
        this.onHardwareOfficeSecurityMeasureMotionChange = this.onHardwareOfficeSecurityMeasureMotionChange.bind(this)
        this.onHardwareOfficeSecurityMeasureOtherChange = this.onHardwareOfficeSecurityMeasureOtherChange.bind(this)
        this.onHardwareOfficeSecurityStorageChange = this.onHardwareOfficeSecurityStorageChange.bind(this)
        this.onHardwareParkCarChange = this.onHardwareParkCarChange.bind(this)
        this.onHardwarePublicTransportChange = this.onHardwarePublicTransportChange.bind(this)
        this.onHardwareTrainChangesChange = this.onHardwareTrainChangesChange.bind(this)
        this.onHardwareWalkChange = this.onHardwareWalkChange.bind(this)
    }

    onHardwareAccessFullCountChange(event: ChangeEvent<HTMLInputElement>): void {
        const accessFullCount = Number(event.target.value)
        this.props.setHardwareAccessFullCount(accessFullCount)
    }

    onHardwareAccessPhysicalCountChange(event: ChangeEvent<HTMLInputElement>): void {
        const accessPhysicalCount = Number(event.target.value)
        this.props.setHardwareAccessPhysicalCount(accessPhysicalCount)
    }

    onHardwareDriveCarChange(event: ChangeEvent<HTMLInputElement>): void {
        const driveCar = event.target.value as YesNoNotSure
        this.props.setHardwareDriveCar(driveCar)
    }

    onHardwareHomeChange(event: ChangeEvent<HTMLInputElement>): void {
        const home = event.target.value as YesNoNotSure
        this.props.setHardwareHome(home)
    }

    onHardwareHomeSecurityStorageChange(event: ChangeEvent<HTMLInputElement>): void {
        const homeSecurityStorage = event.target.value as HardwareHomeSecurityStorage
        this.props.setHardwareHomeSecurityStorage(homeSecurityStorage)
    }

    onHardwareHomeSecuritySystemAlarmChange(event: ChangeEvent<HTMLInputElement>): void {
        const homeSecuritySystemAlarm = event.target.checked
        this.props.setHardwareHomeSecuritySystemAlarm(homeSecuritySystemAlarm)
    }

    onHardwareHomeSecuritySystemCameraChange(event: ChangeEvent<HTMLInputElement>): void {
        const homeSecuritySystemCamera = event.target.checked
        this.props.setHardwareHomeSecuritySystemCamera(homeSecuritySystemCamera)
    }

    onHardwareHomeSecuritySystemDogChange(event: ChangeEvent<HTMLInputElement>): void {
        const homeSecuritySystemDog = event.target.checked
        this.props.setHardwareHomeSecuritySystemDog(homeSecuritySystemDog)
    }

    onHardwareHomeSecuritySystemMotionChange(event: ChangeEvent<HTMLInputElement>): void {
        const homeSecuritySystemMotion = event.target.checked
        this.props.setHardwareHomeSecuritySystemMotion(homeSecuritySystemMotion)
    }

    onHardwareHomeSecuritySystemOtherChange(event: ChangeEvent<HTMLInputElement>): void {
        const homeSecuritySystemOther = event.target.checked
        this.props.setHardwareHomeSecuritySystemOther(homeSecuritySystemOther)
    }

    onHardwareHomeSecurityVacationChange(event: ChangeEvent<HTMLInputElement>): void {
        const homeSecurityVacation = event.target.value as YesNoNotSure
        this.props.setHardwareHomeSecurityVacation(homeSecurityVacation)
    }

    onHardwareInformationRemoteLockChange(event: ChangeEvent<HTMLInputElement>): void {
        const informationRemoteLock = event.target.value as YesNoNotSure
        this.props.setHardwareInformationRemoteLock(informationRemoteLock)
    }

    onHardwareInformationReviewLockChange(event: ChangeEvent<HTMLInputElement>): void {
        const informationReviewLock = event.target.value as YesNoNotSure
        this.props.setHardwareInformationReviewLock(informationReviewLock)
    }

    onHardwareInformationScreenLockChange(event: ChangeEvent<HTMLInputElement>): void {
        const informationScreenLock = event.target.value as YesNoNotSure
        this.props.setHardwareInformationScreenLock(informationScreenLock)
    }

    onHardwareNetworkWifiCountChange(event: ChangeEvent<HTMLInputElement>): void {
        const networkWifiCount = Number(event.target.value)
        this.props.setHardwareNetworkWifiCount(networkWifiCount)
    }

    onHardwareNetworkWifiMultipleChange(event: ChangeEvent<HTMLInputElement>): void {
        const networkWifiMultiple = event.target.value as YesNoNotSure
        this.props.setHardwareNetworkWifiMultiple(networkWifiMultiple)
    }

    onHardwareOfficeSecurityMeasureAccessChange(event: ChangeEvent<HTMLInputElement>): void {
        const officeSecurityMeasureAccess = event.target.checked
        this.props.setHardwareOfficeSecurityMeasureAccess(officeSecurityMeasureAccess)
    }

    onHardwareOfficeSecurityMeasureAlarmChange(event: ChangeEvent<HTMLInputElement>): void {
        const officeSecurityMeasureAlarm = event.target.checked
        this.props.setHardwareOfficeSecurityMeasureAlarm(officeSecurityMeasureAlarm)
    }

    onHardwareOfficeSecurityMeasureCameraChange(event: ChangeEvent<HTMLInputElement>): void {
        const officeSecurityMeasureCamera = event.target.checked
        this.props.setHardwareOfficeSecurityMeasureCamera(officeSecurityMeasureCamera)
    }

    onHardwareOfficeSecurityMeasureMotionChange(event: ChangeEvent<HTMLInputElement>): void {
        const officeSecurityMeasureMotion = event.target.checked
        this.props.setHardwareOfficeSecurityMeasureMotion(officeSecurityMeasureMotion)
    }

    onHardwareOfficeSecurityMeasureOtherChange(event: ChangeEvent<HTMLInputElement>): void {
        const officeSecurityMeasureOther = event.target.checked
        this.props.setHardwareOfficeSecurityMeasureOther(officeSecurityMeasureOther)
    }

    onHardwareOfficeSecurityStorageChange(event: ChangeEvent<HTMLInputElement>): void {
        const officeSecurityStorage = event.target.value as HardwareOfficeSecurityStorage
        this.props.setHardwareOfficeSecurityStorage(officeSecurityStorage)
    }

    onHardwareParkCarChange(event: ChangeEvent<HTMLInputElement>): void {
        const parkCar = event.target.value as HardwareParkCar
        this.props.setHardwareParkCar(parkCar)
    }

    onHardwarePublicTransportChange(event: ChangeEvent<HTMLInputElement>): void {
        const publicTransport = event.target.value as YesNoNotSure
        this.props.setHardwarePublicTransport(publicTransport)
    }

    onHardwareTrainChangesChange(event: ChangeEvent<HTMLInputElement>): void {
        const trainChanges = Number(event.target.value)
        this.props.setHardwareTrainChanges(trainChanges)
    }

    onHardwareWalkChange(event: ChangeEvent<HTMLInputElement>): void {
        const walk = event.target.value as YesNoNotSure
        this.props.setHardwareWalk(walk)
    }

    render() {
        const hardwareHomeSecuritySystemOptions = [
            {
                text: 'Alarm',
                checked: this.props.hardwareHomeSecuritySystemAlarm,
                onChange: this.onHardwareHomeSecuritySystemAlarmChange
            },
            {
                text: 'Camera',
                checked: this.props.hardwareHomeSecuritySystemCamera,
                onChange: this.onHardwareHomeSecuritySystemCameraChange
            },
            {
                text: 'Dog',
                checked: this.props.hardwareHomeSecuritySystemDog,
                onChange: this.onHardwareHomeSecuritySystemDogChange
            },
            {
                text: 'Motion',
                checked: this.props.hardwareHomeSecuritySystemMotion,
                onChange: this.onHardwareHomeSecuritySystemMotionChange
            },
            {
                text: 'Other',
                checked: this.props.hardwareHomeSecuritySystemOther,
                onChange: this.onHardwareHomeSecuritySystemOtherChange
            }
        ]

        const hardwareOfficeSecurityMeasureOptions = [
            {
                text: 'Access',
                checked: this.props.hardwareOfficeSecurityMeasureAccess,
                onChange: this.onHardwareOfficeSecurityMeasureAccessChange
            },
            {
                text: 'Alarm',
                checked: this.props.hardwareOfficeSecurityMeasureAlarm,
                onChange: this.onHardwareOfficeSecurityMeasureAlarmChange
            },
            {
                text: 'Camera',
                checked: this.props.hardwareOfficeSecurityMeasureCamera,
                onChange: this.onHardwareOfficeSecurityMeasureCameraChange
            },
            {
                text: 'Motion',
                checked: this.props.hardwareOfficeSecurityMeasureMotion,
                onChange: this.onHardwareOfficeSecurityMeasureMotionChange
            },
            {
                text: 'Other',
                checked: this.props.hardwareOfficeSecurityMeasureOther,
                onChange: this.onHardwareOfficeSecurityMeasureOtherChange
            }
        ]

        return <>
            <h2>15. Hardware</h2>
            <p className="additional-information-h2">Hardware refers to company devices such as computers, laptops, cell
                phones, tablets, etc.</p>

            <h3>15.1. Device</h3>
            <p className="additional-information-h3">Devices that are taken home are at greater risk than devices that
                remain in the company</p>

            <p>
                Will the device (laptop, phone, etc.) be taken home?
            </p>

            <YesNoNotSureRadios name="hardware-home"
                                selection={this.props.hardwareHome}
                                onChange={this.onHardwareHomeChange}/>

            <h4>15.1.1. Transportation</h4>
            <p className="additional-information-h3">The way home is an important aspect because, depending on the
                species, various dangers can occur on it</p>


            <p>
                Is public transportation used to get home?
            </p>

            <YesNoNotSureRadios name="hardware-public-transport"
                                selection={this.props.hardwarePublicTransport}
                                disabled={this.props.hardwareHome !== YesNoNotSure.YES}
                                onChange={this.onHardwarePublicTransportChange}/>

            <p>
                On average, how often does the employee have to change trains?
            </p>

            <label htmlFor="hardware-train-changes">Number of train changes</label>
            <input id="hardware-train-changes" className="ml-16"
                   type="number" min="0" defaultValue={this.props.hardwareTrainChanges}
                   disabled={this.props.hardwareHome !== YesNoNotSure.YES}
                   onChange={this.onHardwareTrainChangesChange}/>

            <p>
                Does the employee drive home by car?
            </p>

            <YesNoNotSureRadios name="hardware-drive-car"
                                selection={this.props.hardwareDriveCar}
                                disabled={this.props.hardwareHome !== YesNoNotSure.YES}
                                onChange={this.onHardwareDriveCarChange}/>

            <p>
                How is the car parked?
            </p>

            <Radios name="hardware-park-car"
                    options={[
                        {text: 'Own Garage', value: HardwareParkCar.OWN_GARAGE},
                        {text: 'Own Property', value: HardwareParkCar.OWN_PROPERTY},
                        {text: 'Public Garage', value: HardwareParkCar.PUBLIC_GARAGE},
                        {text: 'Public Road', value: HardwareParkCar.PUBLIC_ROAD}
                    ]}
                    selection={this.props.hardwareParkCar}
                    disabled={this.props.hardwareHome !== YesNoNotSure.YES}
                    onChange={this.onHardwareParkCarChange}/>

            <p>
                Does the employee walk home?
            </p>

            <YesNoNotSureRadios name="hardware-walk"
                                selection={this.props.hardwareWalk}
                                disabled={this.props.hardwareHome !== YesNoNotSure.YES}
                                onChange={this.onHardwareWalkChange}/>

            <h4>15.1.2. Home Security</h4>
            <p className="additional-information-h3">Since the device is at home, the protection there is important for
                a risk assessment</p>

            <p>
                How is the device stored at home?
            </p>

            <Radios name="hardware-home-security-storage"
                    options={[
                        {text: 'Locked Room', value: HardwareHomeSecurityStorage.LOCKED_ROOM},
                        {text: 'Unlocked', value: HardwareHomeSecurityStorage.UNLOCKED}
                    ]}
                    selection={this.props.hardwareHomeSecurityStorage}
                    disabled={this.props.hardwareHome !== YesNoNotSure.YES}
                    onChange={this.onHardwareHomeSecurityStorageChange}/>

            <p>
                Are any of the following security systems used at home?
            </p>

            <Checkboxes name="hardware-home-security-system"
                        disabled={this.props.hardwareHome !== YesNoNotSure.YES}
                        options={hardwareHomeSecuritySystemOptions}/>

            <p>
                Is it publicly visible when employees are on vacation, for example
                through social media?
            </p>

            <YesNoNotSureRadios name="hardware-home-security-vacation"
                                selection={this.props.hardwareHomeSecurityVacation}
                                disabled={this.props.hardwareHome !== YesNoNotSure.YES}
                                onChange={this.onHardwareHomeSecurityVacationChange}/>

            <h3>15.2. Office Security</h3>
            <p className="additional-information-h3">The better a company is secured against unauthorized access, the
                better it can focus on digital threats</p>


            <p>
                What security measures has your company implemented?
            </p>

            <Checkboxes name="hardware-office-security-measure"
                        options={hardwareOfficeSecurityMeasureOptions}/>

            <p>
                How is the hardware stored?
            </p>

            <Radios name="hardware-office-security-storage"
                    options={[
                        {text: 'Safe', value: HardwareOfficeSecurityStorage.SAFE},
                        {text: 'Lockable Cabinet', value: HardwareOfficeSecurityStorage.LOCKED},
                        {text: 'Unlockable Cabinet', value: HardwareOfficeSecurityStorage.UNLOCKED},
                        {text: 'Desk', value: HardwareOfficeSecurityStorage.DESK},
                        {text: 'Other', value: HardwareOfficeSecurityStorage.OTHER}
                    ]}
                    selection={this.props.hardwareOfficeSecurityStorage}
                    onChange={this.onHardwareOfficeSecurityStorageChange}/>

            <h3>15.3. Network</h3>
            <p className="additional-information-h3"> The higher the number of networks to which a device is connected,
                the greater the risk of becoming a victim of an attack</p>

            <p>
                Is the device connected to different WiFi networks?
            </p>

            <YesNoNotSureRadios name="hardware-network-wifi-multiple"
                                selection={this.props.hardwareNetworkWifiMultiple}
                                onChange={this.onHardwareNetworkWifiMultipleChange}/>

            <p>
                How many networks is the device connected to?
            </p>

            <label htmlFor="hardware-network-wifi-count">Number of networks</label>
            <input id="hardware-network-wifi-count" className="ml-16"
                   type="number" min="2" defaultValue={this.props.hardwareNetworkWifiCount}
                   onChange={this.onHardwareNetworkWifiCountChange}/>

            <h3>15.4. Access</h3>
            <p className="additional-information-h3">The access to a device should be kept both physically and
                completely in a very small scale</p>

            <p>
                How many people have physical access to the device (for example,
                family members or colleagues)?
            </p>

            <label htmlFor="hardware-access-physical-count">Number of people</label>
            <input id="hardware-access-physical-count" className="ml-16"
                   type="number" min="1" defaultValue={this.props.hardwareAccessPhysicalCount}
                   onChange={this.onHardwareAccessPhysicalCountChange}/>

            <p>
                How many people have full access to the device, i.e. know the password?
            </p>

            <label htmlFor="hardware-access-full-count">Number of people</label>
            <input id="hardware-access-full-count" className="ml-16"
                   type="number" min="1" defaultValue={this.props.hardwareAccessFullCount}
                   onChange={this.onHardwareAccessFullCountChange}/>

            <h3>15.5. Information</h3>
            <p className="additional-information-h3"> It is recommended to be able to locate or lock devices remotely
                and to always lock the device when leaving it</p>

            <p>
                Can the device be located/locked remotely?
            </p>

            <YesNoNotSureRadios name="hardware-information-remote-lock"
                                selection={this.props.hardwareInformationRemoteLock}
                                onChange={this.onHardwareInformationRemoteLockChange}/>

            <p>
                Is the screen locked when leaving the workplace (for example, when going
                to the toilet or the lunch break)?
            </p>

            <YesNoNotSureRadios name="hardware-information-screen-lock"
                                selection={this.props.hardwareInformationScreenLock}
                                onChange={this.onHardwareInformationScreenLockChange}/>

            <p>
                Will locking the screen be reviewed and sanctioned if necessary?
            </p>

            <YesNoNotSureRadios name="hardware-information-review-lock"
                                selection={this.props.hardwareInformationReviewLock}
                                disabled={this.props.hardwareInformationScreenLock !== YesNoNotSure.YES}
                                onChange={this.onHardwareInformationReviewLockChange}/>
        </>
    }
}

const HardwareFragment = connector(UnconnectedHardwareFragment)

export {HardwareFragment}
