import React from "react";
import "./Button.css";

const Button = ({
  setOpenForm,
  setcreate,
  setAmount,
  setEmail,
  setLastName,
  setName,
}) => {

  // CLICKHANDLER 
  const Clickhandler = () => {
    setOpenForm(true);
    setcreate(true);
    setAmount("");
    setEmail("");
    setLastName("");
    setName("");
  };
  return (
    <button onClick={Clickhandler} className="create">
      <span className="inc">+</span>
      Create Invoice
    </button>
  );
};

export default Button;
