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
export default class Home extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Congratulations!</h1>
          <p className="lead">You have successfully created your Yii-powered application.</p>
          <p><a className="button" href="http://www.yiiframework.com">Get started with Yii</a></p>
        </div>
        <div className="body-content">
          <div className="row">
            <div className="D-4 M-12">
              <h2>Heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.</p>

              <p><a className="button" href="http://www.yiiframework.com/doc/">Yii Documentation &raquo;</a></p>
            </div>
            <div className="D-4 M-12">
              <h2>Heading</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.</p>

              <p><a className="button" href="http://www.yiiframework.com/forum/">Yii Forum &raquo;</a></p>
            </div>
            <div className="D-4 M-12">
              <h2>Heading</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.</p>

              <p><a className="button" href="http://www.yiiframework.com/extensions/">Yii Extensions &raquo;</a></p>
            </div>
          </div>

        </div>
    </div>
    )
  }
}
