import React from "react";

const MapStyleButton = props => {
  console.log(props.option);
  return (
    <label>
      <input
        onChange={props.handleStyleChange}
        type="radio"
        name={props.name}
        value={props.option.value}
      />
      {props.option.name}
    </label>
  );
};

export default MapStyleButton;
