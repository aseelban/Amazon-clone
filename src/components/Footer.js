import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <nav class="footer-inner">
          <section class="footer-item">
            <h1>LOGO</h1>

            <h2>
              We create possibilities <br />
              for the connected world.
              <br />
              <b class="color">Be Bold.</b>
            </h2>
          </section>

          <section class="footer-item">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Capabilities</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </section>

          <section class="footer-item">
            <h3>Visit</h3>
            <a href="#">
              <p>Envoy So. California</p>
              <p>34 Tesla, Ste 100</p>
              <p>Irvine, Ca, USA 92618</p>
            </a>
          </section>

          <section class="footer-item">
            <h3>Follow</h3>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </section>

          <section class="footer-item">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </section>

          <section class="footer-item">
            <a href="#" class="footer-button">
              Next: About
            </a>
            <a />
          </section>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
