import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const BlogPage = ({ pageTitle, children, data }: any) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const featuredImg = getImage(
    frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
  );

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
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        # date(formatString: "MMMM DD, YYYY")
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
`;

export default BlogPage;

export const Head: HeadFC<PageProps> = ({ data }: any) => (
  <title>{data.markdownRemark?.frontmatter?.title}</title>
);
