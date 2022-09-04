import { Component } from "react";

class CardList extends Component {
  constructor(item) {
    super();

    this.item = item;
  }
  render() {
    const {item} = this.item;
    return (
      <div>
        <p>{item.name}</p>
      </div>
    );
  }
}

export { CardList };
