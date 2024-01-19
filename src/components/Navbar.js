import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) { //props are read-only and can be any objects
  return (
    <nav className="navbar navbar-expand-lg navbar bg-body-tertiary" >
    {/* data-bs-theme={props.mode} */}
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.about}</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <div className={`dropdown ${props.mode==='light'?'invisible':'visible'}`}>
          <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dark Mode Theme
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item active" >Default</button></li>
            <li><button className="dropdown-item" >Red</button></li>
            <li><button className="dropdown-item" >Cyan</button></li>
            <li><button className="dropdown-item" >Teal</button></li>
          </ul>
        </div>
        <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title: 'Set Title here',
    about: 'About'
}