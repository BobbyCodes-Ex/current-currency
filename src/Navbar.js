import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render () {
        return (
            <div>
              <nav className="navbar fixed-top navbar-light">
                <div className="container-fluid">
                <i className="fas fa-coins coin"></i>
                    <Link className="navbar-brand" to="/"><span>Current Currency</span></Link>
                    <Link className="navbar-text" to="/"><span>Exchange</span></Link>
                    <Link className="navbar-text" to="/chart"><span>Chart</span></Link>
                </div>
              </nav>
            </div>
        )
    }

}

export default Navbar