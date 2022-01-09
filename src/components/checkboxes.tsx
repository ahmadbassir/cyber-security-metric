import React, {ChangeEvent} from 'react'

interface Option {
    text: string
    checked?: boolean

    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

interface Props {
    name: string
    options: Option[]
    disabled?: boolean
}

export class Checkboxes extends React.Component<Props> {

    render() {
        return <table>
            <tbody>
            {this.props.options.map((option: Option, index: number) =>
                <tr key={index}>
                    <td>
                        <input id={`${this.props.name}-${index}`}
                               type="checkbox"
                               defaultChecked={option.checked ? option.checked : false}
                               disabled={this.props.disabled ? this.props.disabled : false}
                               onChange={option.onChange}/>
                    </td>
                    <td>
                        <label htmlFor={`${this.props.name}-${index}`}>{option.text}</label>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    }
}
