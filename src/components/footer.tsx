import { Typography } from "@material-tailwind/react";
import { Link } from "gatsby";
import React from "react";

const FooterComponent = ({ children }: any) => {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <h2></h2>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link to="/about">
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                ABOUT US
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/get-involved">
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                GET INVOLVED
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/team">
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                MEET THE TEAM
              </Typography>
            </Link>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.instagram.com/the_masi_story/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              INSTAGRAM
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 MASIPHUMELELE
      </Typography>
    </footer>
  );
};

export default FooterComponent;
