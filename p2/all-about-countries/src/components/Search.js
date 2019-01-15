import React, { Component } from "react";
import countries from "../Data";
import Select from "react-select";
import axios from "axios";
import Map from "./Map";
import Information from "./Information";

const COUNTRIES_API_URL = "https://restcountries.eu/rest/v2/alpha/";

class Search extends Component {
  state = {
    selectedOption: null,
    countries,
    selectedCountry: {},
    isGettingData: true
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await axios(
      COUNTRIES_API_URL + this.state.selectedOption.value
    );
    this.setState({
      selectedCountry: response.data,
      isGettingData: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Select
            options={this.state.countries}
            value={this.state.selectedOption}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {this.state.isGettingData ? (
          "Select a country"
        ) : (
          <div>
            <Map country={this.state.selectedCountry} />
            <Information country={this.state.selectedCountry} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Search;
