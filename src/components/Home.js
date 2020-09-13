import React from "react";
import "./styles/Home.css";
import prime_background from "./img/home_prime_img.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={prime_background} />
      </div>
      <div className="home__row first">
        <Product
          id={1}
          title="Apple Watch"
          image={
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-gallery1?wid=2000&hei=2000&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1594259774000"
          }
          price={699}
          rating={4}
        />
        <Product
          id={2}
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB
"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71nK%2BJjLzzL._SX522_.jpg"
          }
          price={399}
          rating={3}
        />
      </div>
      <div className="home__row second">
        <Product
          id={3}
          title="Xbox One S 1TB Console
"
          image={
            "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/13005d03400b4fcf8283accd7bc69a8d_Large.png"
          }
          price={348}
          rating={4}
        />
        <Product
          id={4}
          title="Lenovo Chromebook S330 Laptop"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61ViOMIUhmL._AC_SX466_.jpg"
          }
          price={699}
          rating={3}
        />
        <Product
          id={5}
          title="Brother MFC-J805DW INKvestmentTank Color Inkjet All-in-One Printer
"
          image={"https://m.media-amazon.com/images/I/61Qf02XY0pL.jpg"}
          price={79}
          rating={2}
        />
        <Product
          id={6}
          title="Logitech G533 Wireless Gaming Headset – DTS 7.1 Surround Sound – Pro-G Audio Drivers
"
          image={
            "https://logitechsoftwarecenter.com/wp-content/uploads/2019/07/26-197-251-Z01.jpg"
          }
          price={95}
          rating={3}
        />
      </div>
    </div>
  );
}

export default Home;
