import { Typography } from "@material-tailwind/react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const FooterComponent = ({ children }: any) => {
  return (
    <div className="mt-64">
      <footer className="w-full bg-white p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2023 MASIPHUMELELE
              </Typography>
            </li>
          </ul>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link to="/about">
                <Typography
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  ABOUT US
                </Typography>
              </Link>
            </li>
            {/* <li>
              <Link to="/team">
                <Typography
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  MEET THE TEAM
                </Typography>
              </Link>
            </li> */}
            <li>
              <Typography
                href="https://www.instagram.com/the_masi_story/"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                INSTAGRAM
              </Typography>
            </li>
          </ul>
        </div>
      </footer>
      <StaticImage
        src="../images/image00023.jpg"
        alt="image 1"
        className="w-full object-cover"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default FooterComponent;
