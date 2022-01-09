import React, {ChangeEvent} from 'react'

export enum YesNoNotSure {
    YES = 'YES',
    NO = 'NO',
    NOT_SURE = 'NOT_SURE'
}

interface Option {
    text: string
    value: YesNoNotSure
}

interface Props {
    name: string
    selection: YesNoNotSure
    disabled: boolean

    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export class YesNoNotSureRadios extends React.Component<Props> {

    public static defaultProps = {
        disabled: false
    }

    options: Option[] = [
        {text: 'Yes', value: YesNoNotSure.YES},
        {text: 'No', value: YesNoNotSure.NO},
        {text: 'Not Sure', value: YesNoNotSure.NOT_SURE}
    ]

    render() {
        return <table>
            <tbody>
            {this.options.map((option: Option) =>
                <tr key={option.value}>
                    <td>
                        <input id={`${this.props.name}-${option.value}`}
                               type="radio" name={this.props.name} value={option.value.valueOf()}
                               defaultChecked={option.value === this.props.selection}
                               disabled={this.props.disabled ? this.props.disabled : false}
                               onChange={this.props.onChange}/>
                    </td>
                    <td>
                        <label htmlFor={`${this.props.name}-${option.value}`}>{option.text}</label>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    }
}
