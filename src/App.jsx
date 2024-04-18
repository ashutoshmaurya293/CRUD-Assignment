import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Form from "./Components/Form/Form";
import Data from "./Components/Data/Data";
import Crud from "./Components/Crud/Crud";

function App() {
  const [OpenForm, setOpenForm] = useState(false);
  const [MainData, setMainData] = useState(Data);
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  // Format the date
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <>
      <Button setOpenForm={setOpenForm} />
      {OpenForm ? (
        <Form
          setOpenForm={setOpenForm}
          Name={Name}
          setName={setName}
          LastName={LastName}
          setLastName={setLastName}
          Email={Email}
          setEmail={setEmail}
        />
      ) : (
        ""
      )}
      <div className="list">
        <table id="customers">
          <tr>
            <th>Clint</th>
            <th>Email</th>
            <th>Date</th>
            <th>Blance</th>
            <th>Action</th>
          </tr>
          {Data.map((e) => (
            <tr key={e.id}>
              <td>
                {e.name} {e.lastname}
              </td>
              <td>{e.email}</td>
              <td>{formattedDate}</td>
              <td>{e.amount}</td>
              <td><button>✏️</button> <button>❌</button></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
