import images from '../images/Food-Plate.png'

function About(){
    return(
        <>
        
        <section className="About Us mt-5">
        <div className="container mt-5">
        <h1 class="text-center"><span className="text-warning">About</span> Us</h1>
            <div className="row">
                <div className="col-md-6">
                <img src={images} width={550} height={500} alt=""></img>   
                </div>

                <div className="col-md-6 mt-5">
                    <h1>Why Choose Us?</h1><br></br>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p><br></br>

                 <a href="" class="a bg-warning mt-5">Contact me</a>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default About;