import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/seach-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFiled: ''
    };
  }

  handleChange = e => {
    this.setState({ searchFiled: e.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>React Cats</h1>
        <h2>What do you want in your Life </h2>
        <SearchBox placeholder='Search cats' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
