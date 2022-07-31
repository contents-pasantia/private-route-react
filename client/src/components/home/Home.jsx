import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen	">
          <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg max-w-xs w-1/2">
            <div className=" w-100 h-64 shadow-sm bg-gray-900  flex items-center justify-center">
              <h2 className="text-white"> Welcome to My app </h2>
            </div>
            <h3 className="text-sm text-left text-gray-400 pl-5 pb-5"> React-tailwinds </h3>
          </div>
      </div>
    );
  }
}

export default Home;