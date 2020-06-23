import React from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Profile
        name="Muhammad AttiQ"
        education="Graduation"
        jobtype="IT Specialist"
      />

      <hr />
      <Profile
        name="Muhammad AttiQ"
        education="Graduation"
        jobtype="IT Specialist"
      />
      <hr />
      <Profile
        name="Muhammad AttiQ"
        education="Graduation"
        jobtype="IT Specialist"
      />
    </div>
  );
}

export default App;
