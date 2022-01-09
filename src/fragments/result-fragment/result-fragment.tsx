import './result-fragment.css'
import React from 'react'
import { StoreState } from '../../store'
import { connect, ConnectedProps } from 'react-redux'
import { selectDenialOfServiceScore } from '../../store/result/select/denial-of-service'
import { selectMalwareRansomwareScore } from '../../store/result/select/malware-ransomware'
import { selectMasqueradeScore } from '../../store/result/select/masquerade'
import { selectPhishingScore } from '../../store/result/select/phishing'
import { selectTestScore } from '../../store/result/select/test'
import resultsExplanation from '../../assets/results.png'
import { selectScore } from '../../store/select'


const mapStateToProps = (storeState: StoreState) => ({
    denialOfServiceScore: selectDenialOfServiceScore(storeState),
    malwareRansomwareScore: selectMalwareRansomwareScore(storeState),
    masqueradeScore: selectMasqueradeScore(storeState),
    phishingScore: selectPhishingScore(storeState),
    testScore: selectTestScore(storeState),

    totalScore: selectScore(storeState)
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class UnconnectedResultFragment extends React.Component<Props> {

    getColor(score: number): string {
        if (score < 2) {
            return 'class-f'
        } else if (score < 4) {
            return 'class-e'
        } else if (score < 5.5) {
            return 'class-d'
        } else if (score < 7) {
            return 'class-c'
        } else if (score < 8.5) {
            return 'class-b'
        } else {
            return 'class-a'
        }
    }
    getColorResult(score: number): string {
        if (score < 2) {
            return '#ff3804'
        } else if (score < 4) {
            return '#ff8e3b'
        } else if (score < 5.5) {
            return '#ffd154'
        } else if (score < 7) {
            return '#ffef43'
        } else if (score < 8.5) {
            return '#c0d581'
        } else {
            return '#81c784;'
        }
    }
    getFinalResult(score: number): string {
        if (score < 2) {
            return 'F'
        } else if (score < 2.7) {
            return 'E-'
        } else if (score < 3.3) {
            return 'E'
        } else if (score < 4) {
            return 'E+'
        } else if (score < 4.5) {
            return 'D-'
        } else if (score < 5) {
            return 'D'
        } else if (score < 5.5) {
            return 'D+'
        } else if (score < 6) {
            return 'C-'
        } else if (score < 6.5) {
            return 'C'
        } else if (score < 7) {
            return 'C+'
        } else if (score < 7.5) {
            return 'B-'
        } else if (score < 8) {
            return 'B'
        } else if (score < 8.5) {
            return 'B+'
        } else if (score < 9) {
            return 'A-'
        } else if (score < 9.5) {
            return 'A'
        } else {
            return 'A+'
        }
    }
    render() {
        return (
            <>
                <h2 className="welcome-text">This page shows the result of the general safety in your company. You can
                    get the score from the following figure and see if you are doing well or not so well. The table
                    below also shows a general classification of attack types according to ENISA and has specialized in
                    six, whose value and color representation is shown. Based on the values, you can see how high the
                    risk of becoming a victim of these attacks is. </h2>

                <p className="total-score">
                   Your Score: <br/> <span style={{color:this.getColorResult(this.props.totalScore)}}> {this.props.totalScore.toFixed(2)} ({this.getFinalResult(this.props.totalScore)})</span>
                </p>


                
                <table className="tg">
                    <tbody>
                        <tr>
                            <th className="tg-031e">Meaning</th>
                            <th className="tg-031e">Rating</th>
                            <th className="tg-031e">Range of Points</th>
                        </tr>
                        <tr>
                            <td className="tg-9ndz" rowSpan={3}><br /><br />Very Good</td>
                            <td className="tg-9ndz">A+</td>
                            <td className="tg-9ndz">[9.5, 10]</td>
                        </tr>
                        <tr>
                            <td className="tg-9ndz">A</td>
                            <td className="tg-9ndz">[9, 9.5)</td>
                        </tr>
                        <tr>
                            <td className="tg-9ndz">A-</td>
                            <td className="tg-9ndz">[8.5, 9)</td>
                        </tr>
                        <tr>
                            <td className="tg-7hev" rowSpan={3}><br /><br /><br />Good</td>
                            <td className="tg-7hev">B+</td>
                            <td className="tg-7hev">[8, 8.5)</td>
                        </tr>
                        <tr>
                            <td className="tg-7hev">B</td>
                            <td className="tg-7hev">[7.5, 8)</td>
                        </tr>
                        <tr>
                            <td className="tg-7hev">B-</td>
                            <td className="tg-7hev">[7, 7.5)</td>
                        </tr>
                        <tr>
                            <td className="tg-1g1c" rowSpan={3}><br /><br />Satisfying</td>
                            <td className="tg-1g1c">C+</td>
                            <td className="tg-1g1c">[6.5, 7)</td>
                        </tr>
                        <tr>
                            <td className="tg-1g1c">C</td>
                            <td className="tg-1g1c">[6, 6.5)</td>
                        </tr>
                        <tr>
                            <td className="tg-1g1c">C-</td>
                            <td className="tg-1g1c">[5.5, 6)</td>
                        </tr>
                        <tr>
                            <td className="tg-7i5g" rowSpan={3}><br /><br />Sufficient</td>
                            <td className="tg-7i5g">D+</td>
                            <td className="tg-7i5g">[5,&nbsp; 5.5)</td>
                        </tr>
                        <tr>
                            <td className="tg-7i5g">D</td>
                            <td className="tg-7i5g">[4.5, 5)</td>
                        </tr>
                        <tr>
                            <td className="tg-7i5g">D-</td>
                            <td className="tg-7i5g">[4, 4.5)</td>
                        </tr>
                        <tr>
                            <td className="tg-i5gs" rowSpan={3}><br /><br />Deficient</td>
                            <td className="tg-i5gs">E+</td>
                            <td className="tg-i5gs">[3.3, 4)</td>
                        </tr>
                        <tr>
                            <td className="tg-i5gs">E</td>
                            <td className="tg-i5gs">[2.7, 3.3)</td>
                        </tr>
                        <tr>
                            <td className="tg-i5gs">E-</td>
                            <td className="tg-i5gs">[2, 2.7)</td>
                        </tr>
                        <tr>
                            <td className="tg-gfq1">Insufficient</td>
                            <td className="tg-gfq1">F</td>
                            <td className="tg-gfq1">[0, 2)</td>
                        </tr>
                    </tbody>
                </table>














                <table className="result-table">
                    <thead>
                        <tr>
                            <th>CLASSIFICATION<br />(1ST COLUMN)</th>
                            <th>SCORE</th>
                            <th>INCIDENT EXAMPLES<br />(2ND COLUMN)</th>
                            <th>DESCRIPTION / EXAMPLES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="result-category">
                            <td rowSpan={3}>Abusive Content</td>
                            <td rowSpan={3} />
                            <td>Spam</td>
                            <td>
                                Or 'Unsolicited Bulk Email', this means that the recipient has not granted verifiable
                                permission
                                for the message to be sent and that the message is sent as part of a larger collection of
                                messages, all having a functionally comparable content. This IOC refers to resources which
                                make
                                up spam infrastructure, for example, harvesters like address verification, URLs in spam
                                emails,
                                etc.
                            </td>
                        </tr>
                        <tr>
                            <td>Harmful Speech</td>
                            <td>
                                Bullying, harassment or discrimination of somebody, e.g., cyber stalking, racism or threats
                                against one or more individuals.
                            </td>
                        </tr>
                        <tr>
                            <td>(Child) Sexual Exploitation/Sexual/Violent Content</td>
                            <td>Child Sexual Exploitation (CSE), sexual content, glorification of violence, etc.</td>
                        </tr>
                        <tr className={`result-category ${this.getColor(this.props.malwareRansomwareScore)}`}>
                            <td rowSpan={4}>Malicious Code</td>
                            <td rowSpan={4}>{this.props.malwareRansomwareScore.toFixed(2)}</td>
                            <td>Infected System</td>
                            <td>
                                System infected with malware, e.g., a PC, smartphone or server infected with a rootkit. Most
                                often this refers to a connection to a sinkholed command and control server.
                            </td>
                        </tr>
                        <tr className={this.getColor(this.props.malwareRansomwareScore)}>
                            <td>C2 Server</td>
                            <td>Command and control server contacted by malware on infected systems.</td>
                        </tr>
                        <tr className={this.getColor(this.props.malwareRansomwareScore)}>
                            <td>Malware Distribution</td>
                            <td>
                                URI used for malware distribution, e.g., a download URL included in fake invoice malware
                                spam or
                                exploit kits (on websites).
                            </td>
                        </tr>
                        <tr className={this.getColor(this.props.malwareRansomwareScore)}>
                            <td>Malware Configuration</td>
                            <td>URI hosting a malware configuration file, e.g., web injects for a banking trojan.</td>
                        </tr>
                        <tr className="result-category">
                            <td rowSpan={3}>Information Gathering</td>
                            <td rowSpan={3} />
                            <td>Scanning</td>
                            <td>
                                Attacks that send requests to a system to discover weaknesses. This also includes testing
                                processes to gather information on hosts, services and accounts. This includes fingerd, DNS
                                querying, ICMP, SMTP (EXPN, RCPT, etc) port scanning.
                            </td>
                        </tr>
                        <tr>
                            <td>Sniffing</td>
                            <td>Observing and recording of network traffic (i.e. wiretapping).</td>
                        </tr>
                        <tr>
                            <td>Social Engineering</td>
                            <td>
                                Gathering information from a human being in a non-technical way (e.g., using lies, tricks,
                                bribes, or threats).
                            </td>
                        </tr>
                        <tr className="result-category">
                            <td rowSpan={3}>Intrusion Attempts</td>
                            <td rowSpan={3} />
                            <td>Exploitation of Known Vulnerabilities</td>
                            <td>
                                An attempt to compromise a system or to disrupt any service by exploiting vulnerabilities
                                with a
                                standardised identifier such as CVE name (e.g., using a buffer overflow, backdoor, cross
                                site
                                scripting)
                            </td>
                        </tr>
                        <tr>
                            <td>Login Attempts</td>
                            <td>
                                Multiple brute-force login attempts (including guessing or cracking of passwords). This IOC
                                refers to a resource, which has been observed to perform brute-force attacks over a given
                                application protocol.
                            </td>
                        </tr>
                        <tr>
                            <td>New Attack Signature</td>
                            <td>An attack using an unknown exploit.</td>
                        </tr>
                        <tr className="result-category">
                            <td rowSpan={5}>Intrusions</td>
                            <td rowSpan={5} />
                            <td>Privileged Account Compromise</td>
                            <td>Compromise of a system where the attacker has gained administrative privileges.</td>
                        </tr>
                        <tr>
                            <td>Unprivileged Account Compromise</td>
                            <td>Compromise of a system using an unprivileged (user/service) account.</td>
                        </tr>
                        <tr>
                            <td>Application Compromise</td>
                            <td>
                                Compromise of an application by exploiting (un)known software vulnerabilities, e.g., SQL
                                injection.
                            </td>
                        </tr>
                        <tr>
                            <td>System Compromise</td>
                            <td>
                                Compromise of a system, e.g., unauthorised logins or commands. This includes attempts to
                                compromise honeypot systems.
                            </td>
                        </tr>
                        <tr>
                            <td>Burglary</td>
                            <td>Physical intrusion, e.g., into a corporate building or data centre.</td>
                        </tr>
                        <tr className={`result-category ${this.getColor(this.props.denialOfServiceScore)}`}>
                            <td rowSpan={5}>Availability</td>
                            <td rowSpan={2}>{this.props.denialOfServiceScore.toFixed(2)}</td>
                            <td>Denial of Service</td>
                            <td>
                                Denial of Service attack, e.g., sending specially crafted requests to a web application
                                which
                                causes the application to crash or slow down.
                            </td>
                        </tr>
                        <tr className={this.getColor(this.props.denialOfServiceScore)}>
                            <td>Distributed Denial of Service</td>
                            <td>
                                Distributed Denial of Service attack, e.g., SYN flood or UDP-based reflection/amplification
                                attacks.
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={3} />
                            <td>Misconfiguration</td>
                            <td>
                                Software misconfiguration resulting in service availability issues, e.g., DNS server with
                                outdated DNSSEC Root Zone KSK.
                            </td>
                        </tr>
                        <tr>
                            <td>Sabotage</td>
                            <td>Physical sabotage, e.g., cutting wires or malicious arson.</td>
                        </tr>
                        <tr>
                            <td>Outage</td>
                            <td>An outage caused, for example, by air conditioning failure or natural disaster.</td>
                        </tr>
                        <tr className="result-category">
                            <td rowSpan={4}>Information Content Security</td>
                            <td rowSpan={1} />
                            <td>Unauthorised Access to Information</td>
                            <td>
                                Unauthorised access to information, e.g., by abusing stolen login credentials for a system
                                or
                                application, intercepting traffic or gaining access to physical documents.
                            </td>
                        </tr>
                        <tr className={this.getColor(this.props.malwareRansomwareScore)}>
                            <td rowSpan={1}>{this.props.malwareRansomwareScore.toFixed(2)}</td>
                            <td>Unauthorised Modification of Information</td>
                            <td>
                                Unauthorised modification of information, e.g., by an attacker abusing stolen login
                                credentials
                                for a system or application, or ransomware encrypting data. Also includes defacements.
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={2} />
                            <td>Data Loss</td>
                            <td>Loss of data caused by, for example, hard disk failure or physical theft.</td>
                        </tr>
                        <tr>
                            <td>Leak of Confidential Information</td>
                            <td>Leaked confidential information, e.g., credentials or personal data.</td>
                        </tr>
                        <tr className="result-category">
                            <td rowSpan={4}>Fraud</td>
                            <td rowSpan={2} />
                            <td>Unauthorised Use of Resources</td>
                            <td>
                                Using resources for unauthorised purposes including profit-making ventures, e.g., the use of
                                email to participate in illegal profit chain letters or pyramid schemes.
                            </td>
                        </tr>
                        <tr>
                            <td>Copyright</td>
                            <td>
                                Offering or installing copies of unlicensed commercial software or other copyright protected
                                materials (also known as Warez).
                            </td>
                        </tr>
                        <tr className={this.getColor(this.props.masqueradeScore)}>
                            <td rowSpan={1}>{this.props.masqueradeScore.toFixed(2)}</td>
                            <td>Masquerade</td>
                            <td>
                                Type of attack in which one entity illegitimately impersonates the identity of another in
                                order
                                to benefit from it.
                            </td>
                        </tr>
                        <tr className={this.getColor(this.props.phishingScore)}>
                            <td rowSpan={1}>{this.props.phishingScore.toFixed(2)}</td>
                            <td>Phishing</td>
                            <td>
                                Masquerading as another entity in order to persuade the user to reveal private credentials.
                                This
                                IOC most often refers to a URL, which is used to phish user credentials.
                            </td>
                        </tr>
                        <tr className="result-category">
                            <td rowSpan={5}>Vulnerable</td>
                            <td rowSpan={5} />
                            <td>Weak Cryptography</td>
                            <td>
                                Publicly accessible services offering weak cryptography, e.g., web servers susceptible to
                                POODLE/FREAK attacks.
                            </td>
                        </tr>
                        <tr>
                            <td>DDoS Amplifier</td>
                            <td>
                                Publicly accessible services that can be abused for conducting DDoS reflection/amplification
                                attacks, e.g., DNS open-resolvers or NTP servers with monlist enabled.
                            </td>
                        </tr>
                        <tr>
                            <td>Potentially Unwanted Accessible Services</td>
                            <td>Potentially unwanted publicly accessible services, e.g., Telnet, RDP or VNC.</td>
                        </tr>
                        <tr>
                            <td>Information disclosure</td>
                            <td>
                                Publicly accessible services potentially disclosing sensitive information, e.g., SNMP or
                                Redis.
                            </td>
                        </tr>
                        <tr>
                            <td>Vulnerable System</td>
                            <td>
                                A system which is vulnerable to certain attacks, e.g., misconfigured client proxy settings
                                (such
                                as WPAD), outdated operating system version, or cross-site scripting vulnerabilities.
                            </td>
                        </tr>
                        <tr className="result-category">
                            <td rowSpan={2}>Other</td>
                            <td rowSpan={2} />
                            <td>Uncategorised</td>
                            <td>
                                All incidents which don't fit in one of the given categories should be put into this class
                                or
                                the incident is not categorised.
                            </td>
                        </tr>
                        <tr>
                            <td>Undetermined</td>
                            <td>The categorisation of the incident is unknown/undetermined.</td>
                        </tr>
                        <tr className={`result-category ${this.getColor(this.props.testScore)}`}>
                            <td rowSpan={1}>Test</td>
                            <td rowSpan={1}>{this.props.testScore.toFixed(2)}</td>
                            <td>Test</td>
                            <td>Meant for testing.</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

const ResultFragment = connector(UnconnectedResultFragment)

export { ResultFragment }
