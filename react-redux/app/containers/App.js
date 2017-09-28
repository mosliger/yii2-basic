
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
          <nav>
            <ul>
              <li>
                <a href='#' className='icon-profile'>
                  <img src='https://wwwf.imperial.ac.uk/blog/student-blogs/files/2017/01/mala-profile-400-150x150.png' alt='' />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className='wrap'>
          <div className='menu-list'>
            <ul>
              <li><a href='#'>Menu 1</a></li>
              <li><a href='#'>Menu 2</a></li>
              <li className='dropdown'>
                <a href='#'>Dropdown ></a>
                <ul id='dropdown-list' className='dropdown-list'>
                  <li><a href='#'>item 1</a></li>
                  <li><a href='#'>item 2</a></li>
                  <li><a href='#'>item 3</a></li>
                  <li><a href='#'>item 4</a></li>
                  <li><a href='#'>item 5</a></li>
                </ul>
              </li>
              <li><a href='#'>Menu 4</a></li>
            </ul>
          </div>
          <div className='content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default App
