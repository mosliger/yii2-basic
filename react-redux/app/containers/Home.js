import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/action'
import { Login } from '../components'

// State
function mapStateToProps(state) {
  return {
    // todo: state.todo,
  }
}

// Action
const actions = {
  login: Actions.login,
  logOut: Actions.logOut,
  signup: Actions.signup
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  handleLogin = () => {
    this.props.actions.login()
  }

  handleLogOut = () => {
    this.props.actions.logOut()
  }

  handleSignup = () => {
    this.props.actions.signup()
  }

  render() {
    return (
      <div className='container'>
        <h2>Login</h2>
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
        <hr />
      </div>
    )
  }
}
