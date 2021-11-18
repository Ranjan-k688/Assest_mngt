import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({show,CMH}) =>{
 
    return(
        <>
            <div className="container bg-info" 
            
            style={
                {opacity : show ? '1' : '0'}
            }>
                <h2 className="text-center mt-5">Login page</h2>
                <div>
                    <input type="" className="form-control m-2"></input>
                    <input type="" className="form-control m-2 mb-1"></input>
                    <button className="btn btn-success'">login</button>
                </div>
                <div className="">
                    <button className="btn-danger btn btn-cancel" onClick={CMH}>cancel</button>
                </div>
            </div>
        </>
    )
}
export default Modal;