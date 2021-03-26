import React from 'react';
import logo from './assets/img/logos.png';
import img from './assets/img/save2.PNG';
import img1 from './assets/img/save3.PNG';
import img2 from './assets/img/adver3.png';
import './media.css';
import Navbar from './nav'
import Footer from './footer';
const Market =() => {
    return(
      <div>
<Navbar />
      <div class="jumbotron jumbotron-fluid" background-color="red">
      <div class="container-fluid"><br></br>
      <div class="row">
        <div class="col-sm-5">
        <h2 class="jumbo-heading">Partner with BAE</h2>
        <p class="jumbo-content">Partner with BAEON, Retain Your Customers and add to your profits</p>
        <button type="button" class="btn btn-outline-secondary">CONTACT SALES</button>
        </div>

        <div class="col-sm-7" id="jumbo-image"><img src={logo} id='img1' alt="Logo" ></img></div>
      </div>
      </div>
    </div>
      <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>What are you looking for ? Here we go !</h2>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" >
            <div class="icon-box" style={{width:"320px"}}>
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img} alt="Logo" width="130px" height="130px"/></a>
              <h3>Monetize</h3>
              <p class="text-center">add to your profits</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img2} alt="Logo" width="200px" height="130px"/></a>
              <h3>Hyperlocal rewards</h3>
              <p class="text-center">reward customers hyper-locally</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img1} alt="Logo" width="130px" height="130px"/></a>
              <h3>Articulate</h3>
              <p class="text-center">make people talk about you and thereby enhance your presence</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <Footer/>
    </div>


    );
}

export default Market;