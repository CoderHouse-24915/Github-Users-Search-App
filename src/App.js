import { useState } from "react";
import "./App.css";

import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//Components
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";

const App = () => {
  const baseURL = "https://api.github.com/users/";

  const [value, setValue] = useState("");
  const [userData, setUserData] = useState({});

  // operador ternario | ternary operator
  // condición ? expr1 : expr2
  // condición ? true : false

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userInput = value.toLowerCase().replace(/ /g, ""); // sanitizamos la variable de espacios
    if (userInput) {
      axios(`${baseURL}${userInput}`).then((res) => setUserData(res.data));
    }
    setValue("");
  };

  return (
    <div className="App">
      <Header />
      <Button
        variant="contained"
        onClick={() => alert("Hello World")}
        sx={{ mt: 4 }}
      >
        Contained
      </Button>
      <form className="Form" onSubmit={onSubmit}>
        <TextField
          placeholder="Buscar usuario"
          variant="outlined"
          className="Textfield"
          value={value}
          onChange={onChange}
        />
        <button className="btn" type="submit">
          Buscar
        </button>
      </form>

      {userData.id ? <CardUser userData={userData} /> : null}
    </div>
  );
};

export default App;
