import React,{Component} from "react";
import {Navigate } from "react-router-dom";

class PrivateRouteBase extends Component {
  constructor(props) {
    super(props);
    this.state={
        loading: false,
        auth: true,
        role: 'test',
    }
}

setData=(name,value)=> {
    this.setState({
        [name]:value
    });
}
/*
componentDidMount() {
    const dataUser = authUser();
    if(dataUser){
        console.log(dataUser);
        this.setData('auth', dataUser.auth);
        this.setData('role', dataUser.role);
        this.setData('loading', false);
    }
    console.log(this.state);
}*/

render() {
    if(this.state.loading) {
        return <div>Loading...</div>
    }else{
       // const { component: RouteComponent, role } = this.props;
       const {component: RouteComponent, role} = this.props;
       console.log(RouteComponent);
       if(this.state.auth){
            if(this.state.role === role){
                return <RouteComponent/>
            }else{
                return <Navigate to="/login" />
            }
        }else{
            return <Navigate to="/login" />
        }            
    }
}
}

export default PrivateRouteBase;