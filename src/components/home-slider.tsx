import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const SliderComponent = ({ pageTitle, children }: any) => {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4"
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <StaticImage
        src="../images/image00029.jpg"
        alt="image 1"
        className="w-full object-cover"
        style={{ height: "80vh" }}
      />
      <StaticImage
        src="../images/image00001.jpg"
        alt="image 1"
        className="w-full object-cover"
        style={{ height: "80vh" }}
      />
      <StaticImage
        src="../images/image00019.jpg"
        alt="image 1"
        className="w-full object-cover"
        style={{ height: "80vh" }}
      />
      <StaticImage
        src="../images/image00002.jpg"
        alt="image 1"
        className="w-full object-cover"
        style={{ height: "80vh" }}
      />
      <StaticImage
        src="../images/mama_africa_restaurant.jpg"
        alt="image 1"
        className="w-full object-cover"
        style={{ height: "80vh" }}
      />
    </Carousel>
  );
};

export default SliderComponent;
