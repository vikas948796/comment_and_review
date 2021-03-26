import React from 'react';
import logo from './assets/img/logos.png';
import logo1 from './assets/img/adver1.PNG';
import logo2 from './assets/img/adver2.PNG';
import logo3 from './assets/img/adver3.png';
import logo4 from './assets/img/adver4.png';
import logo5 from './assets/img/adver5.png';
import './advertiser.css';
import Navbar from './nav'
import Footer from './footer';

const Advertiser =() => {
    return(
      <div>
<Navbar />
<div class="jumbotron jumbotron-fluid" background-color="red">
      <div class="container-fluid"><br></br>
      <div class="row">
        <div class="col-sm-5">
        <h2 class="jumbo-heading" style={{textAlign:"left",marginLeft:"160px"}}>Improve your business through the most robust ad-medium</h2>
        <button type="button" class="btn btn-outline-secondary">GET STARTED</button>
        </div>

        <div class="col-sm-7" id="jumbo-image"><img src={logo} id='img1' alt="Logo" ></img></div>
      </div>
      </div>
    </div>

<div class="py-5 bg-light site-section how-it-works" id="howitworks-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-7 text-center">
            <h2 class="section-title mb-3"style={{color:'#29398E'}}>What are you looking for ? Here we go !</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 text-center">
            <div class="pr-5">
              <span class="custom-icon text-primary"></span>
              <a href=""><img src={logo1} alt="Logo" width="130px" height="130px"/></a>
              <h3 class="text-dark">Save Money</h3>
              <p>Save on the overall customer acquisition and retention cost.</p>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <div class="pr-5">
              <span class="custom-icon text-primary"></span>
              <a href=""><img src={logo2} alt="Logo" width="130px" height="130px"/></a>
              <h3 class="text-dark">Conversion</h3>
              <p>Invest on high potential conversions</p>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <div class="pr-5">
              <span class="custom-icon text-primary"></span>
              <a href=""><img src={logo3} alt="Logo" width="130px" height="130px"/></a>
              <h3 class="text-dark">Make Investment.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div class="row"  style={{marginLeft:"230px"}}>
        <div class="col-md-4 text-center">
            <div class="pr-5">
              <span class="custom-icon text-primary"></span>
              <a href=""><img src={logo4} alt="Logo" width="130px" height="130px"/></a>
              <h3 class="text-dark">Hyperlocal Reach</h3>
              <p>Acquire new customers from every nook and corner</p>
            </div>
          </div>

          <div class="col-md-4 text-center" style={{marginLeft:"70px"}}>
            <div class="pr-5">
              <span class="custom-icon text-primary"></span>
              <a href=""><img src={logo5} alt="Logo" width="130px" height="130px"/></a>
              <h3 class="text-dark">Reach</h3>
              <p>Reach out to your customers in the nook and corner</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <Footer/>
</div>

    );
}

export default Advertiser;