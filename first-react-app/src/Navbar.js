import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render () {
        return (
            <div>
              <nav className="navbar fixed-top navbar-light">
                <div className="container-fluid">
                <i className="fas fa-coins coin"></i>
                    <a className="navbar-brand" href="#"><span>Current Currency</span></a>
                    <a className="navbar-text" href="#"><span>Exchange</span></a>
                    <a className="navbar-text" href="#"><span>Chart</span></a>
                </div>
              </nav>
            </div>
        )
    }

}

export default Navbar