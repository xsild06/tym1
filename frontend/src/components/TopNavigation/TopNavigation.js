import React, { Component } from 'react';
 import { Link } from 'react-router';

export class TopNavigation extends Component {
  render() {
    return (
      //<!-- Navigation -->
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            {/*  <!-- Brand and toggle get grouped for better mobile display -->
            <div className="navbar-header">
                  <Link to="/" className="navbar-brand">Home</Link>
              </div> */}
              {/* Collect the nav links, forms, and other content for toggling -->*/}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                  <li>
                      <Link to="/">Hom</Link>
                  </li>
                      <li>
                          <Link to="/products">Products</Link>
                      </li>
                      <li>
                          <Link to="/contact">Contact</Link>
                      </li>
                  </ul>
              </div>
            {/*  <!-- /.navbar-collapse --> */}
          </div>
          {/*<!-- /.container -->*/}
      </nav>
    );
  }
}
