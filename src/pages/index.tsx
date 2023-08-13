import * as React from "react";
import { type HeadFC, type PageProps, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SliderComponent from "../components/home-slider";
import IntroductionComponent from "../components/introduction";
import SpaceComponent from "../components/space";
import HomeBannerImage from "../components/home-banner-image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = ({ data }: any) => {
  const edges = data.allMarkdownRemark.edges;

  const stories = edges
    .filter((edge: any) => edge.node.frontmatter.type === "story")
    .map((edge: any) => {
      const featuredImg = getImage(
        edge.node.featuredImage?.childImageSharp?.gatsbyImageData
      );
      const blogUrl = `/blog/${edge.node.frontmatter.slug}`; // e.g. `/blog/my-post`

      return (
        <Card className="max-w-[24rem] overflow-hidden rounded-none">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <StaticImage
              src="../images/mother_with_baby.jpg"
              alt="ui/ux review check"
            />
            <GatsbyImage
              image={featuredImg!}
              alt={edge.node.frontmatter.featuredImageAlt}
              style={{ height: "75vh" }}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              {edge.node.frontmatter.title}
            </Typography>
            <Typography variant="p" color="gray" className="mt-3 font-normal">
              {edge.node.excerpt}
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-b-8 border-black">
            <Link to={blogUrl}>
              <Typography
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Read full story
              </Typography>
            </Link>
          </CardFooter>
        </Card>
      );
    });

  // const poems = edges
  //   .filter((edge: any) => edge.node.frontmatter.type === "poem")
  //   .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout pageTitle="Home Page">
      <SliderComponent></SliderComponent>
      {/* Main content div */}
      <div>
        <SpaceComponent></SpaceComponent>
        <IntroductionComponent></IntroductionComponent>

        <SpaceComponent></SpaceComponent>
        <HomeBannerImage></HomeBannerImage>

        <SpaceComponent></SpaceComponent>

        <div className="sm:mx-8 grid grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16">
          <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
            <h1 className="font-bold text-3xl">STORIES</h1>
          </div>
        </div>
        <div className="my-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-6 place-items-center align-middle">
            {stories}
          </div>
        </div>

        <div className="sm:mx-8 grid grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16 mt-32">
          <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
            <h1 className="font-bold text-3xl">POEMS</h1>
          </div>
        </div>
        {/* <div className="my-5">{poems}</div> */}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            type
            slug
            title
            author
            featuredImageAlt
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 2400)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Masiphumelele</title>
    <meta name="description" content="Your description" />
  </>
);
