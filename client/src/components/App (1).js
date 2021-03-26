import logo from './assets/image/logo.jpg';
import logo1 from './main-logo.jpeg';
import img from './assets/image/ad1.png';
import img1 from './assets/image/gift.jpg';
import img2 from './assets/image/ad3.png';
import './media.css';
import 'bootstrap/dist/css/bootstrap.min.css';


console.log(logo);

function App() {
  return (
    <div className="App">

    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <span class="logo mr-auto"><img src={logo1} alt="Logo" width="80px" height="40px"/></span>
     
      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li class="drop-down"><a href="">About us</a>
            <ul>
              <li><a href="#">About BAE</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="">Solution</a>
            <ul>
              <li><a href="#">For Beaon Media Partners</a></li>
              <li><a href="#">For Advertisers</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="">Product</a>
            <ul>
              <li><a href="#">Stay tuned!</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="#about" class="get-started-btn scrollto">Get Started</a>
            <ul>
              <li><a href="#">Sign up</a></li>
              <li><a href="#">Sign in</a></li>
            </ul>
      </li>
        </ul>
      </nav>
    </div>
  </header>
        <div class="jumbotron jumbotron-fluid" background-color="red">
        <div class="container-fluid"><br></br>
        <div class="row">
          <div class="col-sm-5">
          <h2 class="jumbo-heading">Partner with BAE</h2>
          <p class="jumbo-content">Partner with us and monetize through an unexplored medium of your's</p>
          <button type="button" class="btn btn-outline-secondary">CONTACT SALES</button>
          </div>

          <div class="col-sm-7" id="jumbo-image"><img src={logo} alt="Logo" width="412px" height="412px"/></div>
        </div>
        </div>
      </div>

      <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>What are you looking for ? Here we go !</h2>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img} alt="Logo" width="130px" height="130px"/></a>
              <h3>MONETIZE</h3>
              <p class="text-center">Make additional money on every transaction of yours</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img1} alt="Logo" width="130px" height="130px"/></a>
              <h3>GIFT</h3>
              <p class="text-center"> Gift your customers for transacting with you</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img2} alt="Logo" width="130px" height="130px"/></a>
              <h3>STICKINESS</h3>
              <p class="text-center">Enhance customer stickiness on your platform</p>
            </div>
          </div>
        </div>

      </div>
    </section>
        </div>

  );
}

export default App;
