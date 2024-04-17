import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Form from "./Components/Form/Form";

function App() {
  const [OpenForm, setOpenForm] = useState(false);

  return (
    <>
      <Button setOpenForm={setOpenForm}/>
      {OpenForm ? <Form setOpenForm={setOpenForm}/> : ""}
    </>
  );
}

export default App;
