import { Component } from 'react';
import '../../css/card-list.styles.css';
import { Card } from './Card';

class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;

    return (
      <>
        <div className="card-list">
          {filteredMonsters.map((item) => {
            return <Card monsters={item} key={item.id} />;
          })}
        </div>
      </>
    );
  }
}

export { CardList };
