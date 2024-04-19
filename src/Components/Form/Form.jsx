import React, { useState } from "react";
import "./Form.css";

const Form = ({
  setOpenForm,
  Name,
  setName,
  LastName,
  setLastName,
  Email,
  setEmail,
  submit,
  Amount,
  setAmount,
  create,
  Update,
}) => {
  // TOGGLE
  const Toggle = (e) => {
    if (e.target.className == "FullForm") {
      setOpenForm(false);
    }
  };

  // UPDATEHANDALER
  const UpdateHandaler = (e) => {
    e.preventDefault();
    Update();
  };
  const sub = (e) => {
    e.preventDefault();
  };
  return (
    <div className="FullForm" onClick={Toggle}>
      <form className="form" onSubmit={(e) => sub(e)}>
        <p className="title">Create Invoice </p>
        <div className="flex">
          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className="input"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className="input"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            required=""
            placeholder=""
            type="email"
            className="input"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required=""
            placeholder=""
            type="number"
            className="input"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
          />
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
        {create ? (
          <button className="submit" onClick={(e) => submit(e)}>
            Submit
          </button>
        ) : (
          <button className="submit" onClick={(e) => UpdateHandaler(e)}>
            Update
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
