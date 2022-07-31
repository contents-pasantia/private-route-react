import React from "react";
import Layout from "../layout/Layout";
import Home from "../home/Home";


class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Home/>
      </Layout>
    );
  }
}

export default HomeContainer;