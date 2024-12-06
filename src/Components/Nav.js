import images from '../images/logo.png'
import { Link } from 'react-router-dom';

function Nav() {
    return(
      
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <img src={images} width={50} height={50} alt=""></img>
    <a className="navbar-brand" href="#"></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Components/Gallery.js">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Components/About.js">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"aria-current="page" href="Menu.js">menu</a>
        </li>
        <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="Order.js">Order</a>
              </li> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Review.js">Customer Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Map.js">Our destination</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Team.js">Our team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Footer.js">Footer</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
       
    );
}


export  default Nav;