import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from './robots';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      rneturn(
        <div className="tc">
          <h1>RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
