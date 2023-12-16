import React, { useState } from "react";
import datas from "../resources/countryData.json";
import './App.css'

function App() {
  const [value, setvalue] = useState("");
  const [sugges, setSugges] = useState(true);

  function handleEscape(e) {
    e.key == "Escape" ? setSugges(!sugges) : null;
  }

  return (
    <div onKeyDown={(e) => handleEscape(e)} id="wholeContainer">
      <input type="text" onChange={(e) => setvalue(e.target.value)} placeholder="Enter here" />

      {sugges
        ? datas.map((ele, index) => {
            return ele.name.includes(value) && value != "" ? (
              <p key={index}>{ele.name}</p>
            ) : (
              ""
            );
          })
        : null}
    </div>
  );
}

export default App;
