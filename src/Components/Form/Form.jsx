import React from "react";
import "./Form.css";

const Form = ({setOpenForm}) => {
    const ats=(e)=>{
    console.log("ats");
            }
    const Toggle=(e)=>{
   if(e.target.className == "FullForm"){
    setOpenForm(false)
   }
            }
    const submit=(e)=>{
        e.preventDefault()
    }
  return (
   <div className="FullForm" onClick={Toggle}>
     <form className="form">
      <p className="title">Create Invoice </p>
      <div className="flex">
        <label>
          <input required="" placeholder="" type="text" className="input" />
          <span>Firstname</span>
        </label>

        <label>
          <input required="" placeholder="" type="text" className="input" />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input required="" placeholder="" type="email" className="input" />
        <span>Email</span>
      </label>

      <label>
        <input required="" placeholder="" type="number" className="input" />
        <span>Total Amount</span>
      </label>
      <label className="radio-button">
        <input type="radio" name="example-radio" value="option1" />
        <span className="radio"></span>
        Male
      </label>

      <label className="radio-button">
        <input type="radio" name="example-radio" value="option2" />
        <span className="radio"></span>
        Frmale
      </label>

      <button className="submit" onClick={(e)=>submit(e)}>Submit</button>
    </form>
   </div>
  );
};

export default Form;
