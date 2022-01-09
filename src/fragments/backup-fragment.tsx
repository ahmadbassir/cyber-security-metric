import React, {ChangeEvent} from 'react'
import {Checkboxes} from '../components/checkboxes'
import {StoreState} from '../store'
import {YesNoNotSure, YesNoNotSureRadios} from '../components/yes-no-not-sure-radios'
import {connect, ConnectedProps} from 'react-redux'
import {selectBackupScore} from '../store/backup/select/backup'
import {setBackupDataCluebt} from '../store/backup/backup-data-cluebt'
import {setBackupDataCommunications} from '../store/backup/backup-data-communications'
import {setBackupDataCreditCard} from '../store/backup/backup-data-credit-card'
import {setBackupDataFiles} from '../store/backup/backup-data-files'
import {setBackupDataInvoicing} from '../store/backup/backup-data-invoicing'
import {setBackupDataMusic} from '../store/backup/backup-data-music'
import {setBackupDataPersonnel} from '../store/backup/backup-data-personnel'
import {setBackupDataProgramFiles} from '../store/backup/backup-data-program-files'
import {setBackupDataProjectManagement} from '../store/backup/backup-data-project-management'
import {setBackupDataTemporary} from '../store/backup/backup-data-temporary'
import {setBackupDataWindowsMac} from '../store/backup/backup-data-windows-mac'
import {setBackupEncrypted} from '../store/backup/backup-encrypted'
import {setBackupFrequency} from '../store/backup/backup-frequency'
import {setBackupPeopleWithAccess} from '../store/backup/backup-people-with-access'
import {setBackupSeparated} from '../store/backup/backup-separated'
import {setBackupServerUsed} from '../store/backup/backup-server-used'
import {setBackupStorageTime} from '../store/backup/backup-storage-time'

const mapStateToProps = (storeState: StoreState) => ({
    backupDataCluebt: storeState.backupDataCluebt,
    backupDataCommunications: storeState.backupDataCommunications,
    backupDataCreditCard: storeState.backupDataCreditCard,
    backupDataFiles: storeState.backupDataFiles,
    backupDataInvoicing: storeState.backupDataInvoicing,
    backupDataMusic: storeState.backupDataMusic,
    backupDataPersonnel: storeState.backupDataPersonnel,
    backupDataProgramFiles: storeState.backupDataProgramFiles,
    backupDataProjectManagement: storeState.backupDataProjectManagement,
    backupDataTemporary: storeState.backupDataTemporary,
    backupDataWindowsMac: storeState.backupDataWindowsMac,
    backupEncrypted: storeState.backupEncrypted,
    backupFrequency: storeState.backupFrequency,
    backupPeopleWithAccess: storeState.backupPeopleWithAccess,
    backupSeparated: storeState.backupSeparated,
    backupServerUsed: storeState.backupServerUsed,
    backupStorageTime: storeState.backupStorageTime,

    backupScore: selectBackupScore(storeState)
})

const mapDispatchToProps = {
    setBackupDataCluebt,
    setBackupDataCommunications,
    setBackupDataCreditCard,
    setBackupDataFiles,
    setBackupDataInvoicing,
    setBackupDataMusic,
    setBackupDataPersonnel,
    setBackupDataProgramFiles,
    setBackupDataProjectManagement,
    setBackupDataTemporary,
    setBackupDataWindowsMac,
    setBackupEncrypted,
    setBackupFrequency,
    setBackupPeopleWithAccess,
    setBackupSeparated,
    setBackupServerUsed,
    setBackupStorageTime
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedBackupFragment extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.onBackupDataCluebtChange = this.onBackupDataCluebtChange.bind(this)
        this.onBackupDataCommunicationsChange = this.onBackupDataCommunicationsChange.bind(this)
        this.onBackupDataCreditCardChange = this.onBackupDataCreditCardChange.bind(this)
        this.onBackupDataFilesChange = this.onBackupDataFilesChange.bind(this)
        this.onBackupDataInvoicingChange = this.onBackupDataInvoicingChange.bind(this)
        this.onBackupDataMusicChange = this.onBackupDataMusicChange.bind(this)
        this.onBackupDataPersonnelChange = this.onBackupDataPersonnelChange.bind(this)
        this.onBackupDataProgramFilesChange = this.onBackupDataProgramFilesChange.bind(this)
        this.onBackupDataProjectManagementChange = this.onBackupDataProjectManagementChange.bind(this)
        this.onBackupDataTemporaryChange = this.onBackupDataTemporaryChange.bind(this)
        this.onBackupDataWindowsMacChange = this.onBackupDataWindowsMacChange.bind(this)
        this.onBackupEncryptedChange = this.onBackupEncryptedChange.bind(this)
        this.onBackupFrequencyChange = this.onBackupFrequencyChange.bind(this)
        this.onBackupPeopleWithAccessChange = this.onBackupPeopleWithAccessChange.bind(this)
        this.onBackupSeparatedChange = this.onBackupSeparatedChange.bind(this)
        this.onBackupServerUsedChange = this.onBackupServerUsedChange.bind(this)
        this.onBackupStorageTimeChange = this.onBackupStorageTimeChange.bind(this)
    }

    onBackupDataCluebtChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataCluebts = event.target.checked
        this.props.setBackupDataCluebt(dataCluebts)
    }

    onBackupDataCommunicationsChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataCommunications = event.target.checked
        this.props.setBackupDataCommunications(dataCommunications)
    }

    onBackupDataCreditCardChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataCreditCard = event.target.checked
        this.props.setBackupDataCreditCard(dataCreditCard)
    }

    onBackupDataFilesChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataFiles = event.target.checked
        this.props.setBackupDataFiles(dataFiles)
    }

    onBackupDataInvoicingChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataInvoicing = event.target.checked
        this.props.setBackupDataInvoicing(dataInvoicing)
    }

    onBackupDataMusicChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataMusic = event.target.checked
        this.props.setBackupDataMusic(dataMusic)
    }

    onBackupDataPersonnelChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataPersonnel = event.target.checked
        this.props.setBackupDataPersonnel(dataPersonnel)
    }

    onBackupDataProgramFilesChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataProgramFiles = event.target.checked
        this.props.setBackupDataProgramFiles(dataProgramFiles)
    }

    onBackupDataProjectManagementChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataProjectManagement = event.target.checked
        this.props.setBackupDataProjectManagement(dataProjectManagement)
    }

    onBackupDataTemporaryChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataTemporary = event.target.checked
        this.props.setBackupDataTemporary(dataTemporary)
    }

    onBackupDataWindowsMacChange(event: ChangeEvent<HTMLInputElement>): void {
        const dataWindowsMac = event.target.checked
        this.props.setBackupDataWindowsMac(dataWindowsMac)
    }

    onBackupEncryptedChange(event: ChangeEvent<HTMLInputElement>): void {
        const encrypted = event.target.value as YesNoNotSure
        this.props.setBackupEncrypted(encrypted)
    }

    onBackupFrequencyChange(event: ChangeEvent<HTMLInputElement>): void {
        const frequency = Number(event.target.value)
        this.props.setBackupFrequency(frequency)
    }

    onBackupPeopleWithAccessChange(event: ChangeEvent<HTMLInputElement>): void {
        const peopleWithAccess = Number(event.target.value)
        this.props.setBackupPeopleWithAccess(peopleWithAccess)
    }

    onBackupSeparatedChange(event: ChangeEvent<HTMLInputElement>): void {
        const Separated = event.target.value as YesNoNotSure
        this.props.setBackupSeparated(Separated)
    }

    onBackupServerUsedChange(event: ChangeEvent<HTMLInputElement>): void {
        const serverUsed = event.target.value as YesNoNotSure
        this.props.setBackupServerUsed(serverUsed)
    }

    onBackupStorageTimeChange(event: ChangeEvent<HTMLInputElement>): void {
        const storageTime = Number(event.target.value)
        this.props.setBackupStorageTime(storageTime)
    }

    render() {
        const backupDataOptions = [
            {
                text: 'Credit card Transactions / Receipts',
                checked: this.props.backupDataCreditCard,
                onChange: this.onBackupDataCreditCardChange
            },
            {
                text: 'Updated Cluebt Information Files',
                checked: this.props.backupDataCluebt,
                onChange: this.onBackupDataCluebtChange
            },
            {
                text: 'Invoicing, Billing, Receiveables and Payables',
                checked: this.props.backupDataInvoicing,
                onChange: this.onBackupDataInvoicingChange
            },
            {
                text: 'Personnel Files and Payroll',
                checked: this.props.backupDataPersonnel,
                onChange: this.onBackupDataPersonnelChange
            },
            {
                text: 'Communications',
                checked: this.props.backupDataCommunications,
                onChange: this.onBackupDataCommunicationsChange
            },
            {
                text: 'Project Management',
                checked: this.props.backupDataProjectManagement,
                onChange: this.onBackupDataProjectManagementChange
            },
            {
                text: 'Music, Pictures, Documents',
                checked: this.props.backupDataMusic,
                onChange: this.onBackupDataMusicChange
            },
            {
                text: 'Temporary Files',
                checked: this.props.backupDataTemporary,
                onChange: this.onBackupDataTemporaryChange
            },
            {
                text: 'Windows and Mac Files',
                checked: this.props.backupDataWindowsMac,
                onChange: this.onBackupDataWindowsMacChange
            },
            {
                text: 'Program Files',
                checked: this.props.backupDataProgramFiles,
                onChange: this.onBackupDataProgramFilesChange
            }
        ]

        return <>
            <h2>8. Backup Server</h2>
            <p className="additional-information-h2">It should be important for every company to have their own data
                backed up in case of an emergency</p>

            <p>
                Does your company have a backup server?
            </p>

            <YesNoNotSureRadios name="backup-server-used"
                                selection={this.props.backupServerUsed}
                                onChange={this.onBackupServerUsedChange}/>

            <p>
                How regularly are backups performed?
            </p>

            <label htmlFor="backup-frequency">Backup frequency in days</label>
            <input id="backup-frequency" className="ml-16"
                   type="number" min="0" defaultValue={this.props.backupFrequency}
                   disabled={this.props.backupServerUsed !== YesNoNotSure.YES}
                   onChange={this.onBackupFrequencyChange}/>

            <p>
                How long are backups accessible?
            </p>

            <label htmlFor="backup-frequency">Storage time in days</label>
            <input id="backup-storage-time" className="ml-16"
                   type="number" min="0" defaultValue={this.props.backupStorageTime}
                   disabled={this.props.backupServerUsed !== YesNoNotSure.YES}
                   onChange={this.onBackupStorageTimeChange}/>

            <p>
                Which data is backed up?
            </p>

            <Checkboxes name="backup-data"
                        options={backupDataOptions}
                        disabled={this.props.backupServerUsed !== YesNoNotSure.YES}/>

            <p>
                Is the backup data encrypted?
            </p>

            <YesNoNotSureRadios name="backup-encrypted"
                                selection={this.props.backupEncrypted}
                                disabled={this.props.backupServerUsed !== YesNoNotSure.YES}
                                onChange={this.onBackupEncryptedChange}/>

            <p>
                Is the backup stored physically separated?
            </p>

            <YesNoNotSureRadios name="backup-separated"
                                selection={this.props.backupSeparated}
                                disabled={this.props.backupServerUsed !== YesNoNotSure.YES}
                                onChange={this.onBackupSeparatedChange}/>

            <p>
                How many people have access to the backup server?
            </p>

            <label htmlFor="backup-people-with-access">Number of people</label>
            <input id="backup-people-with-access" className="ml-16"
                   type="number" min="1" defaultValue={this.props.backupPeopleWithAccess}
                   disabled={this.props.backupServerUsed !== YesNoNotSure.YES}
                   onChange={this.onBackupPeopleWithAccessChange}/>
        </>
    }
}

const BackupFragment = connector(UnconnectedBackupFragment)

export {BackupFragment}
