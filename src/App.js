import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // .bind(this) - bind gives the function a context of 'this', being this, relavent to this class.
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  // We can leverage ES6, by defining this function as an arrow function, this is automatically binded based on the scope on
  // where the function resides, not where the function is called. A.K.A Lexical Scoping - This is binded in the context of where
  // it was defined in the first place.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // Search method from course: 
    const { monsters, searchField } = this.state;
    // Equivalent of the { x, y } method:
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
