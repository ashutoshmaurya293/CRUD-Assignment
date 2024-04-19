import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Form from "./Components/Form/Form";
import Data from "./Components/Data/Data";

function App() {
  // STATE
  const [OpenForm, setOpenForm] = useState(false);
  const [create, setcreate] = useState(false);
  const [editId, seteditId] = useState();
  const [MainData, setMainData] = useState(Data);
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Amount, setAmount] = useState("");
  const [Email, setEmail] = useState("");

  // DATE
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;

  // SUBMIT BUTTON

  const submit = (e) => {
    if (Name == "" || LastName == "" || Email == "" || Amount == "") {
      alert("Fill the full form");
    } else {
      e.preventDefault();
      let newData = {
        name: Name,
        lastname: LastName,
        email: Email,
        amount: Amount,
        id: Date.now(),
      };
      setMainData((prev) => [newData, ...prev]);
      setOpenForm(false);
      setAmount("");
      setEmail("");
      setLastName("");
      setName("");
    }
  };

  // EDIT BUTTON

  const Edit = (id) => {
    let editData = MainData.filter((e) => e.id === id);
    // console.log(editData);
    setOpenForm(true);
    setcreate(false);
    seteditId(id);
    setName(editData[0].name);
    setLastName(editData[0].lastname);
    setEmail(editData[0].email);
    setAmount(editData[0].amount);
  };

  // UPDATE BUTTON

  const Update = () => {
    const index = MainData.map((e) => {
      return e.id;
    }).indexOf(editId);
    let dt = [...MainData];
    dt[index].amount = Amount;
    dt[index].email = Email;
    dt[index].lastname = LastName;
    dt[index].name = Name;
    // console.log(index);
    setMainData(dt);
    setOpenForm(false);
  };

  // UPDATE BUTTON

  const Delete = (id) => {
    setMainData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <>
      <Button
        setOpenForm={setOpenForm}
        setcreate={setcreate}
        setAmount={setAmount}
        setEmail={setEmail}
        setLastName={setLastName}
        setName={setName}
      />

      {OpenForm ? (
        <Form
          setOpenForm={setOpenForm}
          Name={Name}
          setName={setName}
          LastName={LastName}
          setLastName={setLastName}
          Email={Email}
          setEmail={setEmail}
          submit={submit}
          setAmount={setAmount}
          Amount={Amount}
          create={create}
          Update={Update}
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
          {MainData.map((e) => (
            <tr key={e.id}>
              <td>
                {e.name} {e.lastname}
              </td>
              <td>{e.email}</td>
              <td>{formattedDate}</td>
              <td>{e.amount}</td>
              <td>
                <button onClick={() => Edit(e.id)} className="change">
                  ✏️
                </button>
                <button onClick={() => Delete(e.id)} className="change">
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
