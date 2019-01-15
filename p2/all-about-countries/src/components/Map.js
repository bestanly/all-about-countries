import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 2,
        mapStyle: "mapbox://styles/mapbox/streets-v9"
      },
      mapStyleOptions: {
        streets: "mapbox://styles/mapbox/streets-v9",
        basic: "mapbox://styles/mapbox/basic-v9",
        satellite: "mapbox://styles/mapbox/satellite-v9",
        dark: "mapbox://styles/mapbox/dark-v9",
        bright: "mapbox://styles/mapbox/bright-v9",
        light: "mapbox://styles/mapbox/light-v9"
      }
    };
  }
  handleStyleChange = e => {
    const { viewport } = this.state;
    const { value } = e.target;
    this.setState({
      viewport: {
        width: viewport.width,
        height: viewport.height,
        latitude: viewport.latitude,
        longitude: viewport.longitude,
        zoom: viewport.zoom,
        mapStyle: value
      }
    });
  };
  render() {
    const { viewport } = this.state;
    const { mapStyleOptions } = this.state;
    const { country } = this.props;
    const latitude = country.latlng[0];
    const longitude = country.latlng[1];
    return (
      <React.Fragment>
        <label>
          <input
            onChange={this.handleStyleChange}
            type="radio"
            name="mapStyleOptions"
            value={mapStyleOptions.basic}
          />
          Basic
        </label>
        <label>
          <input
            onChange={this.handleStyleChange}
            type="radio"
            name="mapStyleOptions"
            value={mapStyleOptions.bright}
          />
          Bright
        </label>
        <label>
          <input
            onChange={this.handleStyleChange}
            type="radio"
            name="mapStyleOptions"
            value={mapStyleOptions.dark}
          />
          Dark
        </label>
        <label>
          <input
            onChange={this.handleStyleChange}
            type="radio"
            name="mapStyleOptions"
            value={mapStyleOptions.satellite}
          />
          Satellite
        </label>
        <label>
          <input
            onChange={this.handleStyleChange}
            type="radio"
            name="mapStyleOptions"
            value={mapStyleOptions.streets}
          />
          Streets
        </label>
        <label>
          <input
            onChange={this.handleStyleChange}
            type="radio"
            name="mapStyleOptions"
            value={mapStyleOptions.light}
          />
          Light
        </label>
        <ReactMapGL
          mapStyle={viewport.mapStyle}
          width={viewport.width}
          height={viewport.height}
          latitude={latitude}
          longitude={longitude}
          zoom={viewport.zoom}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            longitude={longitude}
            latitude={latitude}
            offsetLeft={-10}
            offsetTop={0}
          >
            <img
              src={country.flag}
              alt={country.name + " flag"}
              width="20"
              height="15"
            />
          </Marker>
        </ReactMapGL>
      </React.Fragment>
    );
  }
}

export default Map;
