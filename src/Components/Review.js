import images from '../images/review_1.png'
import images1 from '../images/review_2.png'
import images2 from '../images/review_3.png'
import images3 from '../images/review_4.png'


function Review(){
    return(
        <>
         <div className="container mt-5">
    <h1 className="text-center mt-5">Customer <span className="text-warning">Review</span></h1>
    <div className="row">
      <div className="col-md-3 mt-5">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="card-body">
            <div className="d flex align-item-center">
            <img src={images} class="img-fluid" className="rounded-circle me-2" width="150" alt=""></img>
            </div>
            <div className="menu-icons">
              <div>
              <h5 className="card-title mt-2">Jhon Deo</h5>
              <i className="bi bi-star-fill icons"></i>
              <i className="bi bi-star-fill icons"></i>
              <i className="bi bi-star-fill icons"></i>
              <i className="bi bi-star-fill icons"></i>
              <i className="bi bi-star-half icons"></i>
            </div>
          </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur minima beatae sequi
              iste esse quam commodi nostrum modi cupiditate. Quisquam nam aliquid adipisci repellat veniam itaque
              temporibus vitae iure? Lorem ipsum dolor</p>

          </div>
        </div>
      </div>
      <div className="col-md-3 mt-5">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="card-body">
            <div className=" d flex align-item-center ">
              <img src={images1} class="img-fluid" className="rounded-circle me-2" width="150" alt=""></img>
            </div>

            <div className="menu-icons">
              <div>
              <h5 className="card-title mt-2">Jhon Deo</h5>
              <i className="bi bi-star-fill icons"></i>
              <i className="bi bi-star-fill icons"></i>
              <i className="bi bi-star-fill icons"></i>
              <i className="bi bi-star-fill icons"></i>
              <i className="bi bi-star-half icons"></i>
            </div>
          </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content. Lorem ipsum dolor sit amjhghvhj kjkjh ghgyf excepturi. Inventore, consequatur fuga ad, fugiat
              quis sed eaque, vero impedit exercitationem cumque aliquam facere quaerat repellendus officiis laboriosam
              consectetur progress </p>

          </div>
        </div>
      </div>

      <div class="col-md-3 mt-5">
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="card-body">
            <div class="d flex align-items-center">
              <img src={images2} class="img-fluid" className="rounded-circle me-2" width="150" alt=""></img>
            </div>
            
            <div class="menu-icons">
              <div>
              <h5 class="card-title mt-2">Lion disa</h5>
              <i class="bi bi-star-fill icons"></i>
              <i class="bi bi-star-fill icons"></i>
              <i class="bi bi-star-fill icons"></i>
              <i class="bi bi-star-fill icons"></i>
              <i class="bi bi-star-half icons"></i>
            </div>
          </div>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit amet veniam expedita labore quis
              optio vitae accusamus? Est ex autem quibusdam harum ullam architecto rem porro necessitatibus magnam,
              veniam iure? Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>


      <div class="col-md-3 mt-5">
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="card-body">
            <div class="d flex align-item-center">
              <img src={images3} class="img-fluid" className="rounded-circle me-2" width="150" alt=""></img>
            </div>
            <div class="menu-icons">
            <div>
            <h5 class="card-title mt-2">Jhon Deo</h5>
            <i class="bi bi-star-fill icons"></i>
            <i class="bi bi-star-fill icons"></i>
            <i class="bi bi-star-fill icons"></i>
            <i class="bi bi-star-fill icons"></i>
            <i class="bi bi-star-half icons"></i>
          </div>
        </div>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content. Lorem ipsum dolor sit amet consectetur adipisicing elit. At architecto voluptatem temporibus
              dolore cum expedita, labore repellendus, saepe, placeat provident ipsam itaque. Quod, nostrum corrupti
              mollitia distinctio provident ipsum debitis explicaboi.</p>

          </div>
        </div>
      </div>
    </div>
    </div>
        </>
    );
}

export default Review;