import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const user = await fetch('./user.json');
    const userJson = await user.json();
    
    if (userJson) {
        console.log(userJson);
      this.setState({
        userData: userJson,
        loading: false,
      });
    }
  }

  render() {
    const { userData, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='row'>
          <header>
        <p>
            Welcome to the Weight Loss Tracker, {userData.user}
        </p>
        <p>Your goal is {userData.goal}</p>
    </header>
      </div>
    );
  }
}

export default Header;