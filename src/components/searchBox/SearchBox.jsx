import { Component } from 'react';
import '../../css/search-box.styles.css';

class SearchBox extends Component {
  render() {
    const onSearch = this.props.onSearchChange;
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder="Search monsters"
          onChange={onSearch}
        />
      </div>
    );
  }
}

export { SearchBox };
