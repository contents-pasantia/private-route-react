import React from "react";
import Layout from "../layout/Layout";
import {Chat} from "../chat/Chat";


class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Chat/>
      </Layout>
    );
  }
}

export default ChatContainer;