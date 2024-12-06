import images from '../images/chef1.png'
import images1 from '../images/chef2.png'
import images2 from '../images/chef3.jpg'
import images3 from '../images/chef4.jpg'
 
function Team(){
    return(

        <>

        <div className="team mt-5">
            <h1 className="text-center"> Our <span className="text-warning"> Team </span></h1>

            <div className="team_box mt-3">
                <div className="profile">
                <img src={images} className="img-fluid"  alt=""></img>

                    <div className="info">
                    <h2 className="name text-warning">Chef 1</h2>
                    <p className="bio">Lorem Ipsum is simply dummythe <br/> printing typesetting industry</p>


<div className="team_icons ">
<i class="fa-brands fa-facebook-f "></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-instagram"></i>
    </div> 
                </div>
            </div>
            <div className="profile">
                <img src={images1} className="img-fluid"  alt=""></img>

                    <div className="info">
                    <h2 className="name text-warning">Chef 2</h2>
                    <p className="bio">Lorem Ipsum is simply dummythe <br/> printing typesetting industry</p>


<div className="team_icons">
<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-instagram"></i>
    </div> 
                </div>
            </div>
            <div className="profile">
                <img src={images2} className="img-fluid"  alt=""></img>

                    <div className="info">
                    <h2 className="name text-warning">Chef 3</h2>
                    <p className="bio">Lorem Ipsum is simply dummythe <br/> printing typesetting industry</p>


<div className="team_icons">
<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-instagram"></i>
    </div> 
                </div>
            </div>

            <div className="profile">
                <img src={images3} className="img-fluid"  alt=""></img>

                    <div className="info">
                    <h2 className="name text-warning">Chef 4</h2>
                    <p className="bio">Lorem Ipsum is simply dummythe <br/> printing typesetting industry</p>


<div className="team_icons">
<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-instagram"></i>
    </div> 
                </div>
            </div>
        </div>
        
        </div>
        </>
    );
}

export default Team;