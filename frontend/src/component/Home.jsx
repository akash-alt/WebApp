import React from "react";
import About from "./About";
import Contactus from "./Contactus";
import Services from "./Services";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <section id="home">
        <div class="container home-style">
          <div class="row justify-content-center">
            <div class="col-md-8 mt-5">
           
              <h1 class="display-4 fw-bolder mb-4 text-center text-white">
                Feel Free to Learn
              </h1>
              <p class="lead fs-4 text-center mb-5 text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div class="buttons d-flex justify-content-center">
                <Link to="/contact" class="btn btn-light me-4 px-4 rounded-pill py-2">
                  Get Quete
                </Link>
                <Link to="/services" class="btn btn-outline-light me-4 px-4 rounded-pill py-2">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**  this is method to show other element also on "Home" page  **/}

      <About />
      <Services />
      <Contactus />
    </div>
  );
};

export default Home;
