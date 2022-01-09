import {attacksDifferentiate} from './attacks/attacks-differentiate'
import {attacksHoneypotUsed} from './attacks/attacks-honeypot-used'
import {attacksProtocolUpdated} from './attacks/attacks-protocol-updated'
import {attacksProtocol} from './attacks/attacks-protocol'
import {attacksQuarantineZone} from './attacks/attacks-quarantine-zone'
import {awarenessDevice} from './awareness/awareness-device'
import {awarenessEmployees} from './awareness/awareness-employees'
import {awarenessOnboarding} from './awareness/awareness-onboarding'
import {awarenessProtocol} from './awareness/awareness-protocol'
import {awarenessTraining} from './awareness/awareness-training'
import {backupDataCluebt} from './backup/backup-data-cluebt'
import {backupDataCommunications} from './backup/backup-data-communications'
import {backupDataCreditCard} from './backup/backup-data-credit-card'
import {backupDataFiles} from './backup/backup-data-files'
import {backupDataInvoicing} from './backup/backup-data-invoicing'
import {backupDataMusic} from './backup/backup-data-music'
import {backupDataPersonnel} from './backup/backup-data-personnel'
import {backupDataProgramFiles} from './backup/backup-data-program-files'
import {backupDataProjectManagement} from './backup/backup-data-project-management'
import {backupDataTemporary} from './backup/backup-data-temporary'
import {backupDataWindowsMac} from './backup/backup-data-windows-mac'
import {backupEncrypted} from './backup/backup-encrypted'
import {backupFrequency} from './backup/backup-frequency'
import {backupPeopleWithAccess} from './backup/backup-people-with-access'
import {backupSeparated} from './backup/backup-separated'
import {backupServerUsed} from './backup/backup-server-used'
import {backupStorageTime} from './backup/backup-storage-time'
import {combineReducers, createStore} from 'redux'
import {companyLocation} from './company/company-location'
import {companySize} from './company/company-size'
import {hardwareAccessFullCount} from './hardware/hardware-access-full-count'
import {hardwareAccessPhysicalCount} from './hardware/hardware-access-physical-count'
import {hardwareDriveCar} from './hardware/hardware-drive-car'
import {hardwareHomeSecurityStorage} from './hardware/hardware-home-security-storage'
import {hardwareHomeSecuritySystemAlarm} from './hardware/hardware-home-security-system-alarm'
import {hardwareHomeSecuritySystemCamera} from './hardware/hardware-home-security-system-camera'
import {hardwareHomeSecuritySystemDog} from './hardware/hardware-home-security-system-dog'
import {hardwareHomeSecuritySystemMotion} from './hardware/hardware-home-security-system-motion'
import {hardwareHomeSecuritySystemOther} from './hardware/hardware-home-security-system-other'
import {hardwareHomeSecurityVacation} from './hardware/hardware-home-security-vacation'
import {hardwareHome} from './hardware/hardware-home'
import {hardwareInformationRemoteLock} from './hardware/hardware-information-remote-lock'
import {hardwareInformationReviewLock} from './hardware/hardware-information-review-lock'
import {hardwareInformationScreenLock} from './hardware/hardware-information-screen-lock'
import {hardwareNetworkWifiCount} from './hardware/hardware-network-wifi-count'
import {hardwareNetworkWifiMultiple} from './hardware/hardware-network-wifi-multiple'
import {hardwareOfficeSecurityMeasureAccess} from './hardware/hardware-office-security-measure-access'
import {hardwareOfficeSecurityMeasureAlarm} from './hardware/hardware-office-security-measure-alarm'
import {hardwareOfficeSecurityMeasureCamera} from './hardware/hardware-office-security-measure-camera'
import {hardwareOfficeSecurityMeasureMotion} from './hardware/hardware-office-security-measure-motion'
import {hardwareOfficeSecurityMeasureOther} from './hardware/hardware-office-security-measure-other'
import {hardwareOfficeSecurityStorage} from './hardware/hardware-office-security-storage'
import {hardwareParkCar} from './hardware/hardware-park-car'
import {hardwarePublicTransport} from './hardware/hardware-public-transport'
import {hardwareTrainChanges} from './hardware/hardware-train-changes'
import {hardwareWalk} from './hardware/hardware-walk'
import {historyCurrentPunishment} from './history/history-current-punishment'
import {historyCurrentReviews} from './history/history-current-reviews'
import {historyPastChanges} from './history/history-past-changes'
import {historyPastVictim} from './history/history-past-victim'
import {industry} from './industry/industry'
import {infrastructureAdjustments} from './infrastructure/infrastructure-adjustments'
import {infrastructureDepartmentAny} from './infrastructure/infrastructure-department-any'
import {infrastructureDepartmentExists} from './infrastructure/infrastructure-department-exists'
import {infrastructureDepartmentExternal} from './infrastructure/infrastructure-department-external'
import {infrastructurePenetration} from './infrastructure/infrastructure-penetration'
import {infrastructureSearch} from './infrastructure/infrastructure-search'
import {insuranceExists} from './insurance/insurance-exists'
import {insurancePlanned} from './insurance/insurance-planned'
import {interfacesCd} from './interfaces/interfaces-cd'
import {interfacesSd} from './interfaces/interfaces-sd'
import {interfacesUsb} from './interfaces/interfaces-usb'
import {intrusionIdsIps} from './intrusion/intrusion-ids-ips'
import {intrusionIdsReactionTime} from './intrusion/intrusion-ids-reaction-time'
import {intrusionInHouse} from './intrusion/intrusion-in-house'
import {networkDisconnect} from './network/network-disconnect'
import {networkGuest} from './network/network-guest'
import {networkPrivateDevices} from './network/network-private-devices'
import {networkPublicInternal} from './network/network-public-internal'
import {networkPublic} from './network/network-public'
import {networkVpn} from './network/network-vpn'
import {offlineOperation } from './offline/offline-operation'
import {passwordsKnowingPeople} from './passwords/passwords-knowing-people'
import {passwordsPersonalInformation} from './passwords/passwords-personal-information'
import {passwordsPhotosTaken} from './passwords/passwords-photos-taken'
import {passwordsReuse} from './passwords/passwords-reuse'
import {passwordsStorageManager} from './passwords/passwords-storage-manager'
import {passwordsStorageFile} from './passwords/passwords-storage-file'
import {passwordsStoragePhone} from './passwords/passwords-storage-phone'
import {passwordsStorageOther} from './passwords/passwords-storage-other'
import {passwordsStrengthContainsCapital} from './passwords/passwords-strength-contains-capital'
import {passwordsStrengthContainsLower} from './passwords/passwords-strength-contains-lower'
import {passwordsStrengthContainsNumber} from './passwords/passwords-strength-contains-number'
import {passwordsStrengthContainsSpecial} from './passwords/passwords-strength-contains-special'
import {passwordsStrengthLength} from './passwords/passwords-strength-length'
import {passwordsUpdateFrequency} from './passwords/passwords-update-frequency'
import {protectionAntivirusMandatory} from './protection/protection-antivirus-mandatory'
import {protectionAntivirusUpdateType} from './protection/protection-antivirus-update-type'
import {protectionAntivirusUpdatedRegularly} from './protection/protection-antivirus-updated-regularly'
import {protectionFirewallOnComputer} from './protection/protection-firewall-on-computer'
import {protectionFirewallOnEnvironment} from './protection/protection-firewall-on-environment'
import {protectionFirewallOnServer} from './protection/protection-firewall-on-server'
import {protectionFirewallType} from './protection/protection-firewall-type'
import {protectionFirewallUpdatedRegularly} from './protection/protection-firewall-updated-regularly'
import {protectionFirewallUsed} from './protection/protection-firewall-used'
import {rightsManagementUsed} from './rights/rights-managment-used'
import {safetyCaptchasUsed} from './safety/safety-captchas-used'
import {safetyLockTime} from './safety/safety-lock-time'
import {safetyLoginAttemptsLimited} from './safety/safety-login-attempts-limited'
import {safetyMaxLoginAttempts} from './safety/safety-max-login-attempts'
import {safetyMfaUsed} from './safety/safety-mfa-used'
import {socialIncrease} from './social/social-increase'
import {socialNews} from './social/social-news'
import {socialPolicy} from './social/social-policy'
import {socialRepresented} from './social/social-represented'
import {socialUsage} from './social/social-usage'
import {testingPenetration} from './testing/testing-penetration'
import {testingSearch} from './testing/testing-search'
import {testingSimulation} from './testing/testing-simulation'

const combinedReducers = combineReducers({
    attacksDifferentiate,
    attacksHoneypotUsed,
    attacksProtocol,
    attacksProtocolUpdated,
    attacksQuarantineZone,

    awarenessDevice,
    awarenessEmployees,
    awarenessOnboarding,
    awarenessProtocol,
    awarenessTraining,

    backupDataCluebt,
    backupDataCommunications,
    backupDataCreditCard,
    backupDataFiles,
    backupDataInvoicing,
    backupDataMusic,
    backupDataPersonnel,
    backupDataProgramFiles,
    backupDataProjectManagement,
    backupDataTemporary,
    backupDataWindowsMac,
    backupEncrypted,
    backupFrequency,
    backupPeopleWithAccess,
    backupSeparated,
    backupServerUsed,
    backupStorageTime,

    companyLocation,
    companySize,

    hardwareAccessFullCount,
    hardwareAccessPhysicalCount,
    hardwareDriveCar,
    hardwareHome,
    hardwareHomeSecurityStorage,
    hardwareHomeSecuritySystemAlarm,
    hardwareHomeSecuritySystemCamera,
    hardwareHomeSecuritySystemOther,
    hardwareHomeSecuritySystemDog,
    hardwareHomeSecuritySystemMotion,
    hardwareHomeSecurityVacation,
    hardwareInformationRemoteLock,
    hardwareInformationReviewLock,
    hardwareInformationScreenLock,
    hardwareNetworkWifiCount,
    hardwareNetworkWifiMultiple,
    hardwareOfficeSecurityMeasureAccess,
    hardwareOfficeSecurityMeasureAlarm,
    hardwareOfficeSecurityMeasureCamera,
    hardwareOfficeSecurityMeasureMotion,
    hardwareOfficeSecurityMeasureOther,
    hardwareOfficeSecurityStorage,
    hardwareParkCar,
    hardwarePublicTransport,
    hardwareTrainChanges,
    hardwareWalk,

    historyCurrentPunishment,
    historyCurrentReviews,
    historyPastChanges,
    historyPastVictim,

    industry,

    infrastructureAdjustments,
    infrastructureDepartmentAny,
    infrastructureDepartmentExists,
    infrastructureDepartmentExternal,
    infrastructurePenetration,
    infrastructureSearch,

    insuranceExists,
    insurancePlanned,

    interfacesCd,
    interfacesSd,
    interfacesUsb,

    intrusionIdsIps,
    intrusionIdsReactionTime,
    intrusionInHouse,

    networkDisconnect,
    networkGuest,
    networkPrivateDevices,
    networkPublic,
    networkPublicInternal,
    networkVpn,

    offlineOperation,

    passwordsKnowingPeople,
    passwordsPersonalInformation,
    passwordsPhotosTaken,
    passwordsStrengthContainsCapital,
    passwordsStrengthContainsLower,
    passwordsStrengthContainsNumber,
    passwordsStrengthContainsSpecial,
    passwordsStrengthLength,
    passwordsReuse,
    passwordsStorageManager,
    passwordsStorageFile,
    passwordsStoragePhone,
    passwordsStorageOther,
    passwordsUpdateFrequency,

    protectionAntivirusMandatory,
    protectionAntivirusUpdateType,
    protectionAntivirusUpdatedRegularly,
    protectionFirewallOnComputer,
    protectionFirewallOnEnvironment,
    protectionFirewallOnServer,
    protectionFirewallType,
    protectionFirewallUpdatedRegularly,
    protectionFirewallUsed,

    rightsManagementUsed,

    safetyCaptchasUsed,
    safetyLockTime,
    safetyLoginAttemptsLimited,
    safetyMaxLoginAttempts,
    safetyMfaUsed,

    socialPolicy,
    socialUsage,
    socialRepresented,
    socialIncrease,
    socialNews,

    testingPenetration,
    testingSearch,
    testingSimulation
})

export type StoreState = ReturnType<typeof combinedReducers>

const store = createStore(combinedReducers)

export {store}
