import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    // this.refs.map
    return (
      <div
        ref={div => {
          this.map = div;
        }}
      />
    );
  }
}

export default GoogleMap;
