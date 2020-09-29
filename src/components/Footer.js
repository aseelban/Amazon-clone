import React from "react";
import MobileNavigation from "./MobileNavigation";
import { withStyles } from "@material-ui/styles";
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import styles from "./styles/FooterStyle";

function Footer({ classes }) {
  return (
    <>
      <footer className={classes.footer__wrapper}>
        <nav className={classes.footer__inner}>
          {/* <section className={classes.footer__item}>
            <h1>LOGO</h1>

            <h2>
              We create possibilities <br />
              for the connected world.
              <br />
              <b className={classes.footer__color}>Be Bold.</b>
            </h2>
          </section> */}

          <section className={classes.footer__item}>
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Amazon</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amazon Devices</a>
              </li>
              <li>
                <a href="#">Amazon Tours</a>
              </li>
            </ul>
          </section>

          <section className={classes.footer__item}>
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <a href="#">Sell products on Amazon</a>
              </li>
              <li>
                <a href="#">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Self-Publish with Us</a>
              </li>
              <li>
                <a href="#">Host an Amazon Hub</a>
              </li>
              <li>
                <a href="#">› See More Make Money with Us</a>
              </li>
            </ul>
          </section>

          <section className={classes.footer__item}>
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li>
                <a href="#">Shop with Points</a>
              </li>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li>
                <a href="#">Amazon Currency Converter</a>
              </li>
            </ul>
          </section>

          <section className={classes.footer__item}>
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="#">Amazon and COVID-19</a>
              </li>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Your Orders</a>
              </li>
              <li>
                <a href="#">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="#">Amazon Prime</a>
              </li>
              <li>
                <a href="#">Returns & Replacements</a>
              </li>
              <li>
                <a href="#">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="#">Amazon Assistant</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </section>
          {/* 
          <section className={classes.footer__item}>
            <a href="#" className={classes.footer__button}>
              Next: About
            </a>
            <a />
          </section> */}
        </nav>
        <div className={classes.footer__credit}>
          <span>Made with <span><FavoriteSharpIcon /></span> by AseelBan</span>
        </div>
      </footer>
      <div class={classes.footer__MobileNavigation}>
        <MobileNavigation />
      </div>
    </>
  );
}

export default withStyles(styles)(Footer);
