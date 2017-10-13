import React, { PropTypes } from 'react'
import InputField from 'react-input-forms'

export default class Login extends React.Component {
  static propTypes = {
    errorMessage: PropTypes.string,
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
    focus: true,
    username: '',
    password: ''
  }

  handleBlurUsername = () => {
    this.setState({ focus: false });
  }

  handleUpdateValue = (value, name) => {
    this.setState({ [name]: value })
  }

  render() {
    const { username, password, focus } = this.state
    const { forms, errorMessage } = this.props
    let disabledButton = false
    if (username === '' || password === '') {
      disabledButton = true
    }
    return (
      <div className='form'>
        <InputField
          type='text'
          focus={focus}
          value={username}
          name={forms.username.name}
          placeholder={forms.username.placeholder}
          label={forms.username.label}
          onBlur={() => this.handleBlurUsername()}
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
        <div className={`login-error ${errorMessage !== '' ? 'show' : ''}`}>{errorMessage}</div>
        <div className='field-group _right'>
          <button disabled={disabledButton} className={`button green ${disabledButton ? 'disabled' : ''}`}>เข้าสู่ระบบ</button>
        </div>
      </div>
    )
  }
}
