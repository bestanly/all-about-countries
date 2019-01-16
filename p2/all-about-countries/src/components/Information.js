import React from "react";
const Information = props => (
  <div className="information">
    <h2>Name: {props.country.name}</h2>
    <h2>Capital: {props.country.capital}</h2>
    <h2>Region: {props.country.region}</h2>
    <h2>Subregion: {props.country.subregion}</h2>
  </div>
);
export default Information;
