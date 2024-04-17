import React from "react";
import "./Button.css"

const Button = ({setOpenForm}) => {
  return (
    <button onClick={()=>setOpenForm(true)}>
      <span className="inc">+</span>
      Create Invoice
    </button>
  );
};

export default Button;
