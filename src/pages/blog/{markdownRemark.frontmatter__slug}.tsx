import * as React from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

const BlogPage = ({ data }: any) => {
  const { mainPost, relatedStories } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = mainPost;

  console.log(relatedStories);
  const featuredImg = getImage(
    frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
  );

  const relatedStoriesFormatted = relatedStories.nodes.map((node: any) => {
    const blogUrl = `/blog/${node.frontmatter.slug}`; // e.g. `/blog/my-post`

    return (
      <Card className="max-w-[24rem] overflow-hidden rounded-none">
        <Link to={blogUrl}>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              {node.frontmatter.title}
            </Typography>
            <Typography variant="p" color="gray" className="mt-3 font-normal">
              {node.excerpt}
            </Typography>
          </CardBody>
        </Link>
      </Card>
    );
  });

  return (
    <Layout pageTitle="Blog">
      <div className="flex items-center justify-center">
        <GatsbyImage
          image={featuredImg!}
          alt={frontmatter.featuredImageAlt}
          style={{ height: "75vh" }}
        />
      </div>
      <div className="mx-8 mt-8">
        <h1 className="font-bold text-3xl">{`${frontmatter.title} ${
          frontmatter.author ? `by ${frontmatter.author}` : ""
        }`}</h1>
      </div>
      <div className="mx-8 mt-4 justify-center place-items-center">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <hr className="my-14 border-blue-gray-50" />

      {/* Related posts */}
      <div className="sm:mx-8 grid grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16">
        <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
          <h1 className="font-bold text-2xl">READ MORE STORIES</h1>
        </div>
      </div>
      <div className="my-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-6 place-items-center align-middle">
          {relatedStoriesFormatted}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPageQuery($id: String!) {
    mainPost: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
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

    relatedStories: allMarkdownRemark(limit: 4) {
      nodes {
        excerpt(pruneLength: 140)
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC<PageProps> = ({ data }: any) => (
  <title>{data.markdownRemark?.frontmatter?.title}</title>
);
