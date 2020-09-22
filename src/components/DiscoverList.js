import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles/DiscoverListStyle.css";
import first from "./img/first.png";
import second from "./img/second.png";
import third from "./img/third.png";
import forth from "./img/forth.png";
import fifth from "./img/fifth.png";
import six from "./img/six.png";

function DiscoverList() {
  return (
    <frameElement className="DiscoverList__img__warpper">
      <Carousel
        additionalTransfrom={0}
        autoPlay={true}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        removeArrowOnDeviceType={['mobile']}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 767.98,
              min: 0,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 767.98,
            },
            items: 5,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass="DiscoverList__warpper"
        slidesToSlide={1}
        swipeable
        infinite={true}
        style={{ margin: "0 auto" }}
      >
        <img src={first} />
        <img src={second} />
        <img src={third} />
        <img src={forth} />
        <img src={fifth} />
        <img src={six} />
      </Carousel>
    </frameElement>
  );
}

export default DiscoverList;
