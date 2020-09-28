import React from "react";
import MobileNavigation from "./MobileNavigation";
import { withStyles } from "@material-ui/styles";
//import "./styles/footer.css";
import styles from './styles/FooterStyle'


function Footer({classes}) {
  return (
    <>
      <footer className={classes.footer__wrapper}>
        <nav className={classes.footer__inner}>
          <section className={classes.footer__item}>
            <h1>LOGO</h1>

            <h2>
              We create possibilities <br />
              for the connected world.
              <br />
              <b className={classes.footer__color}>Be Bold.</b>
            </h2>
          </section>

          <section className={classes.footer__item}>
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

          <section className={classes.footer__item}>
            <h3>Visit</h3>
            <a href="#">
              <p>Envoy So. California</p>
              <p>34 Tesla, Ste 100</p>
              <p>Irvine, Ca, USA 92618</p>
            </a>
          </section>

          <section className={classes.footer__item}>
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

          <section className={classes.footer__item}>
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

          <section className={classes.footer__item}>
            <a href="#" className={classes.footer__button}>
              Next: About
            </a>
            <a />
          </section>
        </nav>
      </footer>
      <div class={classes.footer__MobileNavigation}>
        <MobileNavigation />
      </div>
    </>
  );
}

export default withStyles(styles) (Footer);
