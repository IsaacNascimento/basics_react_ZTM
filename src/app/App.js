import { Component } from 'react';
import { CardList } from '../components/cardList/CardList';
import { SearchBox } from '../components/searchBox/SearchBox';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onSearchChange={onSearchChange}
          className="monsters-search-box"
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
