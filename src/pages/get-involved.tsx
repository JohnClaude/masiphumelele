import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";

const GetInvolvedPage: React.FC<PageProps> = () => {
  return <Layout pageTitle="Get Involved"></Layout>;
};

export default GetInvolvedPage;

export const Head: HeadFC = () => <title>Get Involved</title>;
