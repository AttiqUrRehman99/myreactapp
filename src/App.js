import React from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Profile name="Muhammad AttiQ"> </Profile>
      <hr />
      <Profile education="Graduation"> </Profile>
      <hr />
      <Profile jobtype="IT Specialist"> </Profile>
    </div>
  );
}

export default App;
