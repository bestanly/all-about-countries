import React from "react";
import numberWithCommas from "../funtions/numberWithCommas";
import InformationElement from "./InformationList";
const Information = props => (
  <div className="col information">
    <hr />
    <h5 style={{ textAlign: "center" }}>Information:</h5>
    <h6>Name: {props.country.name}</h6>
    <img src={props.country.flag} alt="flag" width="100%" height="200" />
    <h6>Capital: {props.country.capital}</h6>
    <h6>Region: {props.country.region}</h6>
    <h6>Subregion: {props.country.subregion}</h6>
    <h6>Demonym: {props.country.demonym}</h6>
    <h6>
      Area: {numberWithCommas(props.country.area)} Km<sup>2</sup>
    </h6>
    <h6>Population: {numberWithCommas(props.country.population)} people </h6>
    <h6>Calling Codes:</h6>
    <InformationElement list={props.country.callingCodes} />
    <h6>Languages</h6>
    <InformationElement list={props.country.languages} keyName="name" />
    <h6>Currency</h6>
    <InformationElement
      list={props.country.currencies}
      keyName="name"
      keySymbol="symbol"
    />
  </div>
);
export default Information;
//monetary, languages, flag, calling code,
