import React from "react";
import './about.css';

const About = () => {
  return (
    <div className="about-ht">
      <section id="about " >
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                //src="https://images.unsplash.com/photo-1526638684360-95cdcee762ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80"
                src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?t=st=1656415750~exp=1656416350~hmac=89ce9955c068e8d94e80a402b22198ff493a2cddf752a5a14f421a9ea7b79d05&w=740"
                alt="img"
                className="w-75 mt-1 "
              />
            </div>
            <div className="col-md-6 mt-5">
              <h3 className="fs-5 mb-0 ">
                About
              </h3>
              <h1 className="display-6 mb-2">Who  <b>we</b> are</h1>
              <hr className="w-50"/>
              <p class="lead mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <button class="btn btn-primary ms-2 px-4 rounded-pill">
              Get Started
            </button>
            <button class="btn btn-outline-primary ms-2 px-4 rounded-pill">
             Contact Us
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
