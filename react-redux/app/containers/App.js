
import React, { Component } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div className='scrollbar'>
        <Helmet title='React boilerplate' />
        <header className='main-header'>
          <div className='logo'>
            <Link activeClassName='active' onlyActiveOnIndex to='/'>Home</Link>
          </div>
          <div className='menu-bar'>
            <input type='checkbox' className='button-icon-mobile' />
            <i className='icon' />
            <nav>
              <ul>
                <li><Link to='login' activeClassName="active">Login</Link></li>
                <li><Link to='signup' activeClassName="active">Signup</Link></li>
                <li><Link to='about' activeClassName="active">About</Link></li>
                <li><Link to='profile' activeClassName="active">Profile</Link></li>
                <li><Link to='style-guide' activeClassName="active">Style Guide</Link></li>
              </ul>
            </nav>
          </div>
          
        </header>
        <div className='wrap'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
