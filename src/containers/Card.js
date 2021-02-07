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
    const trackingData = await fetch('http://localhost:8000/weighttracker/3');
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
                  <div>
                    {tracking.date} = {tracking.weight}
                  </div> 
              </li>
          ))}
      </ul>

    );
  }
}

export default Card;