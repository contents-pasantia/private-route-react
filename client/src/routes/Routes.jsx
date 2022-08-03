import { Component} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/container/HomeContainer";
import Chat from "../components/container/ChatContainer";
import NotFound from "../components/layout/notfound/NotFound";
import Gallery from "../components/container/GalleryContainer";
import ComponentContainer from "../components/container/ComponentsContainer";
//import Home from "../pages/Home";
//import Login from "../pages/Login";
//import Panel from "../pages/Panel";
import PrivateRoute from "./PrivateRoute";

class RoutersApp extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<h1>login</h1>} />
                <Route
                  path="/chat"
                  element={<PrivateRoute  component={Chat} role={"test"} />}
                >
                </Route>
                <Route
                  path="/gallery"
                  element={<PrivateRoute  component={Gallery} role={"test"} />}
                >
                </Route>
                <Route exct path="/component" element={<ComponentContainer />} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </>
        );
    }
}

export default RoutersApp;