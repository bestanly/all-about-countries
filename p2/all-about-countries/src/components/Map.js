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
      }
    };
  }

  render() {
    const { viewport } = this.state;
    const { country } = this.props;
    const latitude = country.latlng[0];
    const longitude = country.latlng[1];
    return (
      <React.Fragment>
        <ReactMapGL
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
