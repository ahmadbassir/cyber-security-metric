import React, {ChangeEvent} from 'react'

interface Option {
    text: string
    value: string
}

interface Props {
    name: string
    options: Option[]
    selection: string,
    disabled?: boolean

    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export class Radios extends React.Component<Props> {

    render() {
        return <table>
            <tbody>
            {this.props.options.map((option: Option) =>
                <tr key={option.value}>
                    <td>
                        <input id={`${this.props.name}-${option.value}`}
                               type="radio" name={this.props.name} defaultValue={option.value}
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
