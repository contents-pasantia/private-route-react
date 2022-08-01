import React from "react";
import Layout from "../layout/Layout";
import {Gallery} from "../gallery/Gallery";


class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Gallery/>
      </Layout>
    );
  }
}

export default ChatContainer;