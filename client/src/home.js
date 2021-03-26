import React from 'react';
import Footer from './footer';
import Navbar from './nav';
import './home.css';
import img1 from './assets/img/save.PNG';
import img2 from './assets/img/save2.PNG';
import img3 from './assets/img/save3.PNG';



const Home  = () =>{
    
    return(
    <div> <Navbar />  
        <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>
            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
           <div style={{position:'relative'}}> <a id="btn1" className="btn btn-primary  text-uppercase js-scroll-trigger" style={{backgroundColor:'#29398E'}} href="#services">Tell Me More</a>
            <a id="btn2"  className="btn btn-primary  text-uppercase js-scroll-trigger" style={{marginLeft:'4px',backgroundColor:'#29398E'}} href="#services">Tell Me More</a></div>
          </div>
        </div>
      </header>
      <center> <p  id="x2">Market and Let Market
Leverage your revenue by marketing and by being a marketing medium
</p></center>
            <div class="section-title">
          <h2 id="x3">why baeon?</h2>
          
          <p id="pa">
          Every day, companies and organizations gain competitive advantage and value by 
          thinking digitally. Often, these companies need a partner to help them reach their full potential. We act as a strategic partner for enterprises, nonprofits and organizations that wish to harness the power and scale of technology to achieve business objectives.

We focus on the brands, technologies, and practices that drive world-class brand experience,
 through integrated business and software solutions.<br/><br/>
 <center><button type="button" class="btn btn-outline-warning" style={{backgroundColor:'#29398E'}} id="1b">LEARN MORE</button></center>
          </p>
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
              <a href=""><img src={img3} alt="Logo" width="130px" height="130px"/></a>
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

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="1000">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img1} alt="Logo" width="130px" height="130px"/></a>
              <h3>Articulate</h3>
              <p class="text-center">make people talk about you!</p>
            </div>
          </div>
        </div>

      </div>
    </section>

 
  <div class="container-fluid">     
    <div class="row">
    <div style={{height:'250px',padding:'30px',color:'white',textAlign:'justify'}} id="ca" class="col-sm-6">
      <h6>Every day, companies and organizations gain competitive advantage and value by 
          thinking digitally. Often, these companies need a partner to help them reach their full potential.</h6>
    </div>
      <div style={{height:'250px',padding:'30px',backgroundColor:"rgb(114,191,70)",textAlign:'justify',color:'white'}} class="col-sm-6">
      <h6>Every day, companies and organizations gain competitive advantage and value by 
          thinking digitally. Often, these companies need a partner to help them reach their full potential. </h6>
      </div>
    </div>
  </div>

      <Footer />
      </div>
    );
}


export default Home;