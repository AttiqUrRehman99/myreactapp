import React from "react";

function Dinner(props) {
  return (
    <div>
      <h1>
        <u> My Portfolio </u>
      </h1>
      <h2> I am {props.name}. </h2>
      <h2> I Have Done {props.education}.</h2>
      <h2> I am Working as {props.jobtype}.</h2>
    </div>
  );
}

export default Dinner;
