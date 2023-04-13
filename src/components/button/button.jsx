import React from "react";
import { useState, useEffect } from 'react';
import {useRef} from 'react';
import {Navigate} from "react-router-dom"
import { BUTTON_TYPES } from "../../common/data/buttonConst";
import "./button.css"

const Button = (props) => {
  
  const {type, btnText}= props;

  const [goToPortfolio, setGoToPorfolio] = useState(false);

    const getButtonClass=()=>{
      switch(type){
        case BUTTON_TYPES.PRIMARY:
        return "primaryBtn button";

        case BUTTON_TYPES.SECONDARY:
            return 'secondaryBtn button';

            default:
              return 'tertiaryBtn button';
      }
    };

    if (goToPortfolio && type === BUTTON_TYPES.TERTIARY){
      
      return <Navigate to="/portfolio" />

    }

    if (goToPortfolio && type === BUTTON_TYPES.SECONDARY){
      
      return <Navigate to="/contact" />

    }

    if(type != BUTTON_TYPES.PRIMARY){

      return (
        <div className={`${getButtonClass()}`} onClick={() => {
          setGoToPorfolio(true);
        }} >
          {btnText}
        </div>
      )

    }else{

      return (
        <div className={`${getButtonClass()}`} onClick={() => {
          setGoToPorfolio(true);
        }} >
          <a href="#slider">
          {btnText}
          </a>
        </div>
      )
    }

  }
  
  export default Button