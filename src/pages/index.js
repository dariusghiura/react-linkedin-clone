import React from "react";
import Layout from "../components/layout/layout";
import Helmet from "react-helmet";
import LeftSidebar from "../components/sections/leftSidebar";
import Feed from "../components/sections/feed/feed";
import RightSidebar from "../components/sections/rightSidebar/rightSidebar";

export default function Index({}) {
  return (
    <Layout>
      <Helmet>
        <title>LinkedIn Clone</title>
      </Helmet>
      <div className="main-wrapper">
        <div className="content-wrapper">
          <LeftSidebar />
          <Feed />
          <RightSidebar />
        </div>
      </div>
    </Layout>
  );
}
