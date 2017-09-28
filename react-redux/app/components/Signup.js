import React from 'react'
import InputField from 'react-input-forms'

export default class Signup extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string
  };

  static defaultProps = {
    forms: {
      username: {
        name: '',
        label: '',
        rules: {},
        placeholder: ''
      },
      password: {
        name: '',
        label: '',
        rules: {},
        placeholder: ''
      },
      email: {
        name: '',
        label: '',
        rules: {},
        placeholder: ''
      }
    }
  }

  state = {
    username: '',
    password: '',
    email: '',
    error: {}
  }

  handleUpdateValue = (value, name, errorMessage) => {
    const error = this.state.error
    error[name] = errorMessage
    this.setState({ [name]: value, error })
  }

  render() {
    const { username, password, email, error } = this.state
    const { forms } = this.props
    let disabledButton = false
    for (const key in error) {
      if (error[key] !== '') disabledButton = true
    }

    return (
      <div className='form'>
        <InputField
          type='text'
          value={username}
          name={forms.username.name}
          placeholder={forms.username.placeholder}
          label={forms.username.label}
          rules={forms.username.rules}
          onChange={(value, name, errorMessage) => this.handleUpdateValue(value, 'username', errorMessage)}
        />
        <InputField
          type='text'
          value={email}
          name={forms.email.name}
          rules={forms.email.rules}
          placeholder={forms.email.placeholder}
          label={forms.email.label}
          onChange={(value, name, errorMessage) => this.handleUpdateValue(value, 'email', errorMessage)}
        />
        <InputField
          type='password'
          value={password}
          name={forms.password.name}
          rules={forms.password.rules}
          placeholder={forms.password.placeholder}
          label={forms.password.label}
          onChange={(value, name, errorMessage) => this.handleUpdateValue(value, 'password', errorMessage)}
        />
        <div className='field-group _right'>
          <button disabled={disabledButton} className={`button-outline gray ${disabledButton ? 'disabled' : ''}`}>สมัครสมาชิก</button>
        </div>
      </div>
    )
  }
}
