import React from 'react'
import InputField from 'react-input-forms'
import UploadImage from './UploadImage'

export default class Profile extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  static defaultProps = {
    forms: {}
  }

  state = {
    error: {},
    name: '',
    lastname: '',
    email: '',
    phone: ''
  }

  componentWillMount() {
    const { forms } = this.props
    this.setState({
      name: forms.name.value,
      lastname: forms.lastname.value,
      email: forms.email.value,
      phone: forms.phone.value
    })
  }

  handleUpdateValue = (value, name, errorMessage) => {
    const error = this.state.error
    error[name] = errorMessage
    this.setState({ [name]: value, error })
  }

  render() {
    const { forms } = this.props
    const { name, lastname, email, phone, error } = this.state
    let disabledButton = false
    for (const key in error) {
      if (error[key] !== '') disabledButton = true
    }
    return (
      <div className='forms-profile-group'>
        <div className='image-profile'>
          <UploadImage name={forms.image.name} src={forms.image.src} />
        </div>
        <div className='form-list'>
          <div className='row'>
            <div className='D-6 M-12'>
              <InputField
                type='text'
                name={forms.name.name}
                label={forms.name.label}
                placeholder={forms.name.placeholder}
                rules={forms.name.rules}
                value={name}
                onChange={(value, name, errorMessage) => this.handleUpdateValue(value, 'name', errorMessage)}
              />
            </div>
            <div className='D-6 M-12'>
              <InputField
                type='text'
                name={forms.lastname.name}
                label={forms.lastname.label}
                placeholder={forms.lastname.placeholder}
                rules={forms.lastname.rules}
                value={lastname}
                onChange={(value, name, errorMessage) => this.handleUpdateValue(value, 'lastname', errorMessage)}
              />
            </div>
          </div>
          <div className='row'>
            <div className='D-6 M-12'>
              <InputField
                type='text'
                name={forms.phone.name}
                label={forms.phone.label}
                placeholder={forms.phone.placeholder}
                rules={forms.phone.rules}
                value={phone}
                onChange={(value, name, errorMessage) => this.handleUpdateValue(value, 'phone', errorMessage)}
              />
            </div>
            <div className='D-6 M-12'>
              <InputField
                type='text'
                name={forms.email.name}
                label={forms.email.label}
                placeholder={forms.email.placeholder}
                rules={forms.email.rules}
                value={email}
                onChange={(value, name, errorMessage) => this.handleUpdateValue(value, 'email', errorMessage)}
              />
            </div>
          </div>
        </div>
        <div className='field-group _right'>
          <button disabled={disabledButton} className={`button-outline gray ${disabledButton ? 'disabled' : ''}`}>บันทึก</button>
        </div>
      </div>
    )
  }
}
