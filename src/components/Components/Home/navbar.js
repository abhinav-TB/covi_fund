import React from 'react' 
import './navbar.css'

export default function Navbar() {
    return (
<div className="nav-main">
  <nav className="navbar navbar-light navbar-expand-md sticky-top navigation-clean-button" style={{height: 80, backgroundColor: '#37434d', color: 'white' ,fontSize:'15px'}}>
    <div className="container-fluid" ><a className="navbar-brand" href="#" style={{color: '#ffffff'}}><i className="fa fa-globe" />&nbsp;covi_fund</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item"><a className="nav-link active" style={{color: '#ffffff'}} href="/"><i className="fa fa-home" />&nbsp;HOME</a></li>
          <li className="nav-item"><a className="nav-link active" style={{color: '#ffffff'}} href="/"><i className="fa fa-wpexplorer" />&nbsp;ABOUT US</a></li>
          <li className="nav-item"><a className="nav-link active" style={{color: '#ffffff'}} href="/forum"><i className="fa fa-star-o" />&nbsp;FORUM</a></li>
          <li className="nav-item"><a className="nav-link active" style={{color: '#ffffff'}} href="/profile"><i className="fa fa-star-o" />&nbsp;PROFILE</a></li>
          <li className="nav-item"><a className="nav-link active" style={{color: '#ffffff'}} href="/"><i className="fa fa-user-circle-o" />&nbsp;</a></li>
          <li className="nav-item"><a className="nav-link active" style={{color: '#ffffff'}} href="/add"><i className="fa fa-sign-in" />&nbsp;Add Individual Posts</a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>

    )
}
