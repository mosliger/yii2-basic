import React, { PropTypes } from 'react'
import InputField from 'react-input-forms'

export default class Login extends React.Component {
  static propTypes = {
    // errorMessage: PropTypes.string,
    // forms: PropTypes.
  };

  static defaultProps = {
    errorMessage: '',
    forms: {
      username: {
        name: '',
        label: '',
        placeholder: ''
      },
      password: {
        name: '',
        label: '',
        placeholder: ''
      }
    }
  }

  state = {
    username: '',
    password: ''
  }

  handleUpdateValue = (value, name) => {
    this.setState({ [name]: value })
  }

  render() {
    const { username, password } = this.state
    const { forms } = this.props
    let disabledButton = false
    if (username === '' || password === '') {
      disabledButton = true
    }
    return (
      <div className='form'>
        <InputField
          type='text'
          value={username}
          name={forms.username.name}
          placeholder={forms.username.placeholder}
          label={forms.username.label}
          onChange={(value) => this.handleUpdateValue(value, 'username')}
        />
        <InputField
          type='password'
          value={password}
          name={forms.password.name}
          placeholder={forms.password.placeholder}
          label={forms.password.label}
          onChange={(value) => this.handleUpdateValue(value, 'password')}
        />
        <div className='field-group _right'>
          <button disabled={disabledButton} className={`button-outline gray ${disabledButton ? 'disabled' : ''}`}>เข้าสู่ระบบ</button>
        </div>
      </div>
    )
  }
}
