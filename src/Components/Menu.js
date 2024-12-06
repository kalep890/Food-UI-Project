import images from '../images/buger.jpg'
import images1 from '../images/pasta.jpg'
import images2 from '../images/lasagna.webp'
import images3 from '../images/sandwich.jpg'
import images4 from '../images/Spanchi.jpg'
import images5 from '../images/ice_cream.jpg'
import images6 from '../images/juse.jpg'
import images7 from '../images/chocolate.jpg'


function Menu() {
    return(
        <>
    <div className="container-fluid mt-md-5">
      <h1 className="text-center mt-md-5 mt-5">Our <span className="text-warning">Menu</span> </h1>
      <div className="row mt-5">
        <div className="col-sm-3 py-3 py-sm-0">
          <div className="card image-zoom shadow p-3 bg-body-tertiary rounded mb-5 ">
           <div className="image-zoom-wrapper">
            <img src={images} className="img-fluid"  alt=""></img>
            <div className="card-body">
              <h5 className="card-title text-warning text-center">Burger</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet <br/> adipisicing elit. Ab non aliquid
                <br/>exercitationem.</p>
              <h6 className="text-center">$20.00</h6>
              <div className="menu-icons">
                <div>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-half icons"></i>
                </div>
              <a href="#" className="btn btn-dark mt-2">Order Now</a>
             </div>
            </div>
          </div>
           </div>

        </div>
        <div className="col-sm-3 py-3 py-sm-0">
          <div className="card image-zoom shadow p-3 bg-body-tertiary rounded mb-5">
           <div className="image-zoom-wrapper">
            <img src={images1} className="img-fluid" alt=""></img>
            <div className="card-body">
              <h5 className="card-title text-warning text-center">Pasta</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet <br/> adipisicing elit. Ab non aliquid
                <br/>exercitationem.</p>
                <h6 className="text-center">$20.00</h6>
                <div className="menu-icons">
                  
                  <div>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-half icons"></i>
                  </div>
              <a href="#" className="btn btn-dark mt-2">Order Now</a>
            </div>
          </div>
           </div>
</div>
        </div>


        <div className="col-sm-3 py-3 py-sm-0">
          <div className="card image-zoom shadow p-3 bg-body-tertiary rounded mb-5">
           <div className="image-zoom-wrapper">
            {/* <img height="200px" width="100px" src="/images/lasagna.webp" className="card-img-top" alt="..."/> */}
            <img src={images2} className="img-fluid" alt=""></img>
            <div className="card-body">
              <h5 className="card-title text-warning text-center">lasagna</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet <br/> adipisicing elit. Ab non aliquid
                <br/>exercitationem.</p>
                <h6 className="text-center">$20.00</h6>
                <div className="menu-icons">
                  <div>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-half icons"></i>
                  </div>
              <a href="#" className="btn btn-dark mt-2">Order Now</a>
            </div>
          </div>
          </div>
           </div>
        </div>

        <div className="col-sm-3 py-3 py-sm-0">
          <div className="card image-zoom shadow p-3 bg-body-tertiary rounded mb-5">
            <div className="image-zoom-wrapper">
              {/* <img height="200px" width="50px" src="/images/chocolate_Drink.jpg" className="card-img-top" alt="..."/> */}
              <img src={images3} className="img-fluid"  alt=""></img>
            <div className="card-body">
              <h5 className="card-title text-warning text-center">sandwich</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet <br/> adipisicing elit. Ab non aliquid
                <br/>exercitationem.</p>
              <h6 className="text-center">$20.00</h6>
              <div className="menu-icons">
              
                <div>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-half icons"></i>
                </div>
              <a href="#" className="btn btn-dark mt-2">Order Now</a>
            </div>
          </div>
        </div>
            </div>
      </div>
      </div>
      </div>


      <div className="container-fluid mt-md-5">
      <div className="row">
        <div className="col-sm-3 py-3 py-sm-0">
          <div className="card image-zoom shadow p-3 bg-body-tertiary rounded mb-5 ">
           <div className="image-zoom-wrapper">
            {/* <img height="200px" width="100px" src="/images/buger.jpg" className="card-img-top" alt="..."/> */}
            <img src={images4} className="img-fluid"  alt=""></img>
            <div className="card-body">
              <h5 className="card-title text-warning text-center">Spanchi</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet <br/> adipisicing elit. Ab non aliquid
                <br/>exercitationem.</p>
              <h6 className="text-center">$20.00</h6>
              <div className="menu-icons">
                <div>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-half icons"></i>
                </div>
              <a href="#" className="btn btn-dark mt-2">Order Now</a>
             </div>
            </div>
          </div>
           </div>

        </div>
        <div className="col-sm-3 py-3 py-sm-0">
          <div className="card image-zoom shadow p-3 bg-body-tertiary rounded mb-5">
           <div className="image-zoom-wrapper">
            <img src={images5} className="img-fluid" alt=""></img>
            <div className="card-body">
              <h5 className="card-title text-warning text-center">ice_cream</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet <br/> adipisicing elit. Ab non aliquid
                <br/>exercitationem.</p>
                <h6 className="text-center">$20.00</h6>
                <div className="menu-icons">
                  
                  <div>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-half icons"></i>
                  </div>
              <a href="#" className="btn btn-dark mt-2">Order Now</a>
            </div>
          </div>
           </div>
</div>
        </div>


        <div className="col-sm-3 py-3 py-sm-0">
          <div className="card image-zoom shadow p-3 bg-body-tertiary rounded mb-5">
           <div className="image-zoom-wrapper">
            <img src={images6} className="img-fluid" alt=""></img>
            <div className="card-body">
              <h5 className="card-title text-warning text-center">Drink</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet <br/> adipisicing elit. Ab non aliquid
                <br/>exercitationem.</p>
                <h6 className="text-center">$20.00</h6>
                <div className="menu-icons">
                  <div>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-fill icons"></i>
                      <i className="bi bi-star-half icons"></i>
                  </div>
              <a href="#" className="btn btn-dark mt-2">Order Now</a>
            </div>
          </div>
          </div>
           </div>
        </div>

        <div className="col-sm-3 py-3 py-sm-0">
          <div className="card image-zoom shadow p-3 bg-body-tertiary rounded mb-5">
            <div className="image-zoom-wrapper">
              <img src={images7} className="img-fluid"  alt=""></img>
            <div className="card-body">
              <h5 className="card-title text-warning text-center">chocolate</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet <br/> adipisicing elit. Ab non aliquid
                <br/>exercitationem.</p>
              <h6 className="text-center">$20.00</h6>
              <div className="menu-icons">
              
                <div>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-fill icons"></i>
                    <i className="bi bi-star-half icons"></i>
                </div>
              <a href="#" className="btn btn-dark mt-2">Order Now</a>
            </div>
          </div>
        </div>
            </div>
      </div>
      </div>
      </div>

      
          
</>
    );
}

export default Menu;