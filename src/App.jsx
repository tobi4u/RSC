import React, { Component } from 'react';
import pfp from '../public/capture.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Oluwasegun Onakoya",
        bio: "A curiosity-led software engineer that studied at GoMyCode.",
        imgSrc: {pfp},
        profession: "Software Developer"
      },
      shows: true,
      mountedTime: new Date(),
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ timeInterval: Math.floor((new Date() - this.state.mountedTime) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="profile" />
            <h2>{this.state.person.profession}</h2>
          </div>
        )}
        <p>Time since mounted: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
