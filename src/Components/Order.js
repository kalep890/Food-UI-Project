import images from '../images/order_image.png'

function Order(){
    return(
        <>
        
        <div className="container shadow rounded my bg-gery">
        <h1 class="text-center mt-md-5 mt-5">Our <span class="text-warning">Order</span> </h1>
            <div className="row mt-5">
                <div className="col-md-6">
                <img src={images} className="img-fluid"  alt=""></img>
                </div>


                <div className="col-md-6 mt-5">
                <form>
  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
      <label class="form-label" for="form6Example1">Name</label>
        <input type="text" id="form6Example1" class="form-control" />
        
      </div>
    </div>
    <div class="col">
      <div data-mdb-input-init class="form-outline">
      <label class="form-label" for="form6Example2">Surname</label>
        <input type="text" id="form6Example2" class="form-control" />
        
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
      <label class="form-label" for="form6Example1">Number</label>
        <input type="number" id="form6Example1" class="form-control" />
        
      </div>
    </div>
    <div class="col">
      <div data-mdb-input-init class="form-outline">
      <label class="form-label" for="form6Example2">How Much</label>
        <input type="number" id="form6Example2" class="form-control" />
        
      </div>
    </div>
  </div>

  {/* <!-- Text input --> */}
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form6Example4">Address</label>
    <input type="text" id="form6Example4" class="form-control" />
   </div>
{/* 
  <!-- Email input --> */}
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form6Example5">Email</label>
    <input type="email" id="form6Example5" class="form-control" />
    
  </div>

  {/* <!-- Submit button --> */}
  <button data-mdb-ripple-init type="button" class="btn btn-warning btn-block mb-4 mt-5">Place order</button>
</form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Order;