import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')} style={{height:'30px',width:'30px'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>props.toggleMode('danger')} style={{height:'30px',width:'30px'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')} style={{height:'30px',width:'30px'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>props.toggleMode('warning')} style={{height:'30px',width:'30px'}}></div>
          <div className="bg-dark rounded mx-2" onClick={()=>props.toggleMode('dark')} style={{height:'30px',width:'30px'}}></div>
          <div className="bg-light rounded mx-2" onClick={()=>props.toggleMode('light')} style={{height:'30px',width:'30px'}}></div>
        </div>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
        {/* <div className="form-check form-switch">
          <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div> */}
      </div>
    </nav>
  )
}


// Navbar.propTypes={
//     title:PropTypes.string,
// }

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Nice"
}