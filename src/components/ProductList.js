import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import data from "../API/product.json";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(() => data.map((product) => product));
  }, []);

  return (
      <Carousel
        style={{ padding: "5rem 0" }}
        additionalTransfrom={0}
        autoPlay={true}
        arrows
        autoPlaySpeed={4000}
        centerMode={false}
        containerClass="ProductList__container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 767.98,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 767.98,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass="ProductList__warpper"
        slidesToSlide={1}
        swipeable
        infinite={true}
        style={{ margin: "0 auto", padding: "5rem 0" }}
      >
        {/* 
          products
        */}
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            oldPrice={product.oldPrice}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </Carousel>
  );
}

export default ProductList;
