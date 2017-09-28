import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Signup } from '../components'

// State
function mapStateToProps(state) {
  return {
    // todo: state.todo,
  }
}

// Action
const actions = {}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class SignupPage extends React.Component {
  render() {

    const forms = {
      username: {
        name: 'username',
        label: 'ชื่อผู้ใช้',
        rules: { required: 'value is require.' },
        placeholder: ''
      },
      password: {
        name: 'password',
        label: 'รหัสผ่าน',
        rules: { required: 'value is require.' },
        placeholder: ''
      },
      email: {
        name: 'email',
        label: 'E-mail',
        rules: { required: 'value is require.', email: 'รูปแบบ E-mail ไม่ถูกต้อง' },
        placeholder: ''
      }
    }
    return (
      <div className='wrap-login'>
        <div className='site'>
          <div className='header'> Register </div>
          <div className='form'>
            <form id='w0' action='/loan-fund/app/web/login' method='post'>
              <div id='login-component' className='component'>
                <Signup forms={forms} />
              </div>
            </form>
          </div>
          <div className='button-group'>
            <a href='#'>กลับ</a>
          </div>
        </div>
      </div>
    )
  }
}
