import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NotFound extends Component {
    render() {
        return (
            <div className="h-screen flex items-center justify-center pt-3">
                <div className="bg-slate-50 p-10">
                    <h1 classname="text-2xl font-bold my-2 text-black">Oops!</h1>
                    <h2 className='text-2xl font-bold my-2 text-black'>404 Pagina no encontrada</h2>
                    <div className="">
                        <Link to="/"> Regresar</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;