import React, { Component } from 'react';

class Goal extends Component {
  constructor() {
    super();
    this.state = {
      goalData: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const goal = await fetch('./goal.json');
    const goalJson = await goal.json();
    
    if (goalJson) {
      this.setState({
        goalData: goalJson,
        loading: false,
      });
    }
  }

  render() {
    const { goalData, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='row'>
          <p>Based on your current trends:</p>
          <p>Weekly Average: {goalData.weekly_average}</p>
          <p>Weeks to Go: {goalData.weeks_to_go}</p>
          <p>Date You Goal will be acheived: {goalData.goal_date}</p>
    
      </div>
    );
  }
}

export default Goal;