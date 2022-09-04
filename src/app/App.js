import { Component } from "react";
import { CardList } from "../components/cardList/cardListComponent";
import { SearchBox } from "../components/searchBox/searchBoxComponent";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
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
        <SearchBox onSearchChange={onSearchChange} />
        {filteredMonsters.map((item) => (
          <CardList item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default App;
