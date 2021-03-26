import React from 'react';
import './App.css';
import Footer from './footer';
import Navbar from './nav';


const About = () => {
    return(
        <div> <Navbar />
        <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Near is the Largest Source of Intelligence on People and Places
Founded in 2012, Near is headquartered in Singapore
with offices in San Francisco, New York, London, Bangalore, Tokyo and Sydney.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image" style={{backgroundColor:"#29398E"}}>
                    <img className="rounded-circle img-fluid "  alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Blog</h4>
                      <h4 className="subheading"></h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Take a look at our corporate blog, data stories and tech blog for the latest industry trends.</p>
                    <button class="btn btn-primary" style={{marginTop: "10px" ,backgroundColor:"#29398E"}}>Explore</button>
                      </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image" style={{backgroundColor:"#29398E"}}>
                    <img className="rounded-circle img-fluid" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Culture Code</h4>
                      <h4 className="subheading"></h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Explore the Near culture
and meet the team.</p>
<button class="btn btn-primary" style={{marginTop: "10px",backgroundColor:"#29398E"}}>Explore</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image" style={{backgroundColor:"#29398E"}}>
                    <img className="rounded-circle img-fluid"  alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Newsroom</h4>
                      <h4 className="subheading"></h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                      Stay up-to-date with our latest news, stories, and much more..
                      </p>
                      <button class="btn btn-primary" style={{marginTop: "10px",backgroundColor:"#29398E"}}>Explore</button>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image"style={{backgroundColor:"#29398E"}}>
                    <img className="rounded-circle img-fluid"  alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Career</h4>
                      <h4 className="subheading"></h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Interested in joining the Near team? Check our open job positions to apply!</p>
                      <button class="btn btn-primary" style={{marginTop: "10px", backgroundColor:"#29398E"}}>Explore</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image" style={{backgroundColor:"#29398E"}}>
                    <img className="rounded-circle img-fluid"  alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Contact Us</h4>
                      <h4 className="subheading"></h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                      Have any queries?
Reach out to us now.
                      </p>
                      <button class="btn btn-primary" style={{marginTop: "10px" , backgroundColor:"#29398E"}}>Explore</button>
                    </div>
                  </div>
                </li>
                
                <li className="timeline-inverted">
                  <div className="timeline-image" style={{backgroundColor:"#29398E"}}>
                    <h4>Be Part
                      <br/>Of Our
                      <br/>Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    );
}

export default About;