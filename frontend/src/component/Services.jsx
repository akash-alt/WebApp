import React from "react";
import "./about.css";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center"> Our Services</h3>
              <h1 className="display-6 text-center">Our Awesome Services</h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 ">
              <div class="card shadow-lg" style={{border: 'none'}}>
                <img 
                style={{width:'10rem',height:'120px',position: 'relative',left: '8rem'}}
                className="card-img-top  mt-4 mb-3" 
                src="https://img.freepik.com/free-vector/illustration-cogwheel_53876-6326.jpg?t=st=1656476109~exp=1656476709~hmac=95268b2f2c07ace674655f025fc0112e1bbdd193dce2a4a7be796a25b87c9aac&w=740" 
                alt="Card image cap"
                
                />
                <div class="card-body">
                  <h5 class="card-title">Research and development</h5>
                  <p class="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 hoverstyle ">
              <div class="card shadow-lg" style={{border: 'none'}}>
                <img 
                style={{width:'10rem',height:'112px',position: 'relative',left: '8rem'}}
                class="card-img-top  mt-4 mb-4" 
                src="https://img.freepik.com/free-vector/appointment-booking-design_23-2148557730.jpg?t=st=1656477158~exp=1656477758~hmac=4ddb97b567b72f2a60369b55336e7164dddac52ba6d1e9f446f314a2432c8f04&w=740" 
                alt="Card image cap"
                
                />
                <div class="card-body">
                  <h5 class="card-title">Mobile development</h5>
                  <p class="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="card shadow-lg" style={{border: 'none'}}>
                <img 
                style={{width:'10rem',height:'112px',position: 'relative',left: '8rem'}}
                class="card-img-top  mt-4 mb-4" 
                src="https://img.freepik.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg?t=st=1656476893~exp=1656477493~hmac=4e60ef65158ca92fd4c6f34153ba27c44c268e3e6b35180b9adc82f795f2dfc4&w=1380" 
                alt="Card image cap"
                
                />
                <div class="card-body">
                  <h5 class="card-title">Product development</h5>
                  <p class="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
