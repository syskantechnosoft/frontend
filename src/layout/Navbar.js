import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/customers/new' className='nav-link'>
                New Customer
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/products/new' className='nav-link'>
                New Product
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/invoices/new' className='nav-link'>
                New Invoice
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/dashboard' className='nav-link'>
                Dashboard
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/report' className='nav-link'>
                Report
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
