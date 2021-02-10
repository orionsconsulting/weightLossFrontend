import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    this.state = {
        trackingData: [],
        loading: true,
    };
  }

  async componentDidMount() {
    const url = process.env.REACT_APP_DOMAIN+'/weighttracker/3';
    console.log("url " + url);
    const trackingData = await fetch(url);
    console.log(trackingData);
    const trackingJson = await trackingData.json();
    
    if (trackingJson) {
      this.setState({
        trackingData: trackingJson,
        loading: false,
      });
    }
  }

  render() {
    const { trackingData, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return ( 
      <ul>
          {trackingData.map(tracking => (
              <li>
                  <div key={tracking.id}>
                    {tracking.date} = {tracking.weight}
                  </div> 
              </li>
          ))}
      </ul>

    );
  }
}

export default Card;