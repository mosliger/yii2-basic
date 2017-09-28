import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Profile } from '../components'

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
export default class ProfilePage extends React.Component {
  render() {
    const forms = {
      image: {
        name: 'imput-file',
        src: ''
      },
      name: {
        name: 'username',
        label: 'ชื่อ',
        rules: { required: 'value is require.' },
        placeholder: '',
        value: ''
      },
      lastname: {
        name: 'lastname',
        label: 'สกุล',
        rules: { required: 'value is require.' },
        placeholder: '',
        value: ''
      },
      phone: {
        name: 'phone',
        label: 'เบอร์โทรศัพท์',
        rules: { },
        placeholder: '',
        value: ''
      },
      email: {
        name: 'email',
        label: 'E-mail',
        rules: { required: 'value is require.', email: 'รูปแบบ E-mail ไม่ถูกต้อง' },
        placeholder: '',
        value: ''
      }
    }
    return (
      <div className='container'>
        <Profile forms={forms} />
      </div>
    )
  }
}
