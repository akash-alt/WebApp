import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FaBeer, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col width-none" style={{ width: "25%" }}>
              <span className="Scrolltotopstyle" style={{borderRadious:'50px'}}>
                <ScrollToTop smooth />
              </span>
              <h4>company</h4>
              <ul style={{ position: "relative", right: "33px" }}>
                <li>
                  <Link to="/">about us</Link>
                </li>
                <li>
                  <Link to="/">our services</Link>
                </li>
                <li>
                  <Link to="/">privacy policy</Link>
                </li>
                <li>
                  <Link to="/">affiliate program</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul style={{ position: "relative", right: "33px" }}>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">shipping</Link>
                </li>
                <li>
                  <Link to="/">returns</Link>
                </li>
                <li>
                  <Link to="/">order status</Link>
                </li>
                <li>
                  <Link to="/">payment options</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul style={{ position: "relative", right: "33px" }}>
                <li>
                  <Link to="/">watch</Link>
                </li>
                <li>
                  <Link to="/">bag</Link>
                </li>
                <li>
                  <Link to="/">shoes</Link>
                </li>
                <li>
                  <Link to="/">dress</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <Link to="/">
                  <FaTwitter />
                </Link>
                <Link to="/">
                  <FaLinkedinIn />
                </Link>
                <Link to="/">
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
