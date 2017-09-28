import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Login } from '../components'

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
export default class LoginPage extends React.Component {
  render() {
    return (
      <div className='wrap-login'>
        <div className='site'>
          <div className='header'> Welcome </div>
          <div className='form'>
            <form id='w0' action='/loan-fund/app/web/login' method='post'>
              <div id='login-component' className='component'>
                <Login forms={{
                  username: {
                    name: 'LoginForm[username]',
                    label: 'ชื่อผู้ใช้',
                    placeholder: 'ชื่อผู้ใช้'
                  },
                  password: {
                    name: 'LoginForm[password]',
                    label: 'รหัสผ่าน',
                    placeholder: 'รหัสผ่าน'
                  }
                }} />
              </div>
            </form>
          </div>
          <div className='button-group'>
            <a href='#'>สมัครสมาชิก</a>
          </div>
        </div>
      </div>
    )
  }
}
