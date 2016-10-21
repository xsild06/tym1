import React, { Component } from 'react';
import { Link } from 'react-router';

export class HomePage extends Component {
  render() {
    return (
      //<!-- Page Content -->
      <div className="container">

        {/*  <!-- Jumbotron Header --> */}
          <div className="jumbotron hero-spacer">
              <h1>A Warm Welcome!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
              <p><a className="btn btn-primary btn-large">Call to action!</a>
              </p>
          </div>

        <hr />

        {/*  <!-- Title -->*/}
          <div className="row">
              <div className="col-lg-12">
                  <h3>Latest Features</h3>
              </div>
          </div>
        {/*  <!-- /.row --> */}

      {/*    <!-- Page Features -->*/}
           <div className="row text-center">

               <div className="col-md-3 col-sm-6 hero-feature">
                  <div className="thumbnail">
                      <img src="http://placehold.it/800x500" alt="" />
                      <div className="caption">
                          <h3>Feature Label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <p>
                              <a href="#" className="btn btn-primary">Buy Now!</a> <a href="#" className="btn btn-default">More Info</a>
                          </p>
                      </div>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 hero-feature">
                  <div className="thumbnail">
                      <img src="http://placehold.it/800x500" alt="" />
                      <div className="caption">
                          <h3>Feature Label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <p>
                              <a href="#" className="btn btn-primary">Buy Now!</a> <a href="#" className="btn btn-default">More Info</a>
                          </p>
                      </div>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 hero-feature">
                  <div className="thumbnail">
                      <img src="http://placehold.it/800x500" alt="" />
                      <div className="caption">
                          <h3>Feature Label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <p>
                              <a href="#" className="btn btn-primary">Buy Now!</a> <a href="#" className="btn btn-default">More Info</a>
                          </p>
                      </div>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 hero-feature">
                 <div className="thumbnail">
                      <img src="http://placehold.it/800x500" alt="" />
                      <div className="caption">
                       <h3>Feature Label</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <p>
                              <a href="#" className="btn btn-primary">Buy Now!</a> <a href="#" className="btn btn-default">More Info</a>
                          </p>
                      </div>
                  </div>
              </div>

          </div>
      {/*  <!-- /.row --> */}


          <hr />
      </div>
    );
  }
}
