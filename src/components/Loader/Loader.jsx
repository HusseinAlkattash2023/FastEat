import React from 'react';
import "./Loader.scss";
import {loader} from "../../utils/images.js";

const Loader = () => {
  return (
    <div className="loader my-5">
      <div className="container flex align-center justify-center">
        <img src={loader} alt=""/>
      </div>
    </div>
  )
}

export default Loader