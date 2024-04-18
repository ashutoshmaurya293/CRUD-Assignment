import React from "react";
import "./Button.css"

const Button = ({setOpenForm}) => {
  return (
    <button onClick={()=>setOpenForm(true)} className="create">
      <span className="inc">+</span>
      Create Invoice
    </button>
  );
};

export default Button;
