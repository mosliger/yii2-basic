import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
export default class AboutPage extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>About</div>
      </div>
    )
  }
}
