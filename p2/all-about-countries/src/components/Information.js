import React from "react";
import numberWithCommas from "../funtions/numberWithCommas";
const Information = props => (
  <div className="col information">
    <hr />
    <h5 style={{ textAlign: "center" }}>Information:</h5>
    <h6>Name: {props.country.name}</h6>
    <h6>Capital: {props.country.capital}</h6>
    <h6>Region: {props.country.region}</h6>
    <h6>Subregion: {props.country.subregion}</h6>
    <h6>Population: {numberWithCommas(props.country.population)}</h6>
    <h6>Calling Code: {props.country.callingCode}</h6>
  </div>
);
export default Information;
//monetary, languages, flag, calling code,
