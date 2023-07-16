import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ArticleComponent = ({
  articleTitle,
  articleImageLink,
  articleSummary,
  children,
}: any) => {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage
          src="../images/image00019.jpg"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {articleTitle}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {articleSummary}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-normal">Link to full page</Typography>
      </CardFooter>
    </Card>
  );
};

export default ArticleComponent;
