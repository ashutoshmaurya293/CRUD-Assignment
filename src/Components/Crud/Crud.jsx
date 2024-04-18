import React from "react";
import "./Crud.css";

const Crud = ({ fname, lname, email, amount }) => {

  return (
    <div className="fullTable">
      <table id="customers">
      
        <tr>
          <td>{fname} {lname}</td>
          <td>{email}</td>
          <td>Date</td>
          <td>{amount}</td>
          <td>Delite Edit</td>
        </tr>
      </table>
    </div>
  );
};

export default Crud;
