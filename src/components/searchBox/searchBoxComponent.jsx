import { Component } from "react";

class SearchBox extends Component {

  render() {
    const onSearch = this.props.onSearchChange;
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={onSearch}
        />
      </div>
    );
  }
}

export {SearchBox};
