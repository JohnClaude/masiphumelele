import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const HomeBannerImage = () => {
  return (
    <StaticImage
      className="h-full w-full shadow-xl shadow-blue-gray-900/50"
      src="../images/banner.jpg"
      alt="home banner image"
      style={{ height: "90vh" }}
    />
  );
};

export default HomeBannerImage;
