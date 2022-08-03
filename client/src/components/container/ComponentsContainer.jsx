import React from "react";
import Layout from "../layout/Layout";
import Component from "../computerComp/component";


class ComponentContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Component/>
      </Layout>
    );
  }
}

export default ComponentContainer;