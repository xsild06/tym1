import React, { Component } from 'react';
 import { Link } from 'react-router';
 import LogoImg from '../../img/logo.jpg';

export class TopNavigation extends Component {
  render() {
    return (
      //<!-- Navigation -->
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            {/*  <!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
              <ul className="nav navbar-header">
                <li>
                    <Link to="/" ><img src={LogoImg} alt="logo" /></Link>
                  </li>
                  <li>
                    <div id="custom-search-input">
                      <div className="input-group col-md-12">
                        <input type="text" className="search-query form-control" placeholder="Search" />
                          <span className="input-group-btn">
                            <button className="btn btn-danger" type="button">
                              <span className="glyphicon glyphicon-search"></span>
                            </button>
                          </span>
                      </div>
                    </div>
                </li>
               </ul>
              </div>
              {/* Collect the nav links, forms, and other content for toggling -->*/}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li>
                        <Link to="/napoveda">Nápověda</Link>
                      </li>
                      <li>
                          <Link to="/registrace">Registrace</Link>
                      </li>
                      <li>
                          <Link to="/login">Přihlášení</Link>
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
