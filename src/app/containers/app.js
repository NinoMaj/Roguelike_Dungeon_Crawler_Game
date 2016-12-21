import React, {Component} from 'react';

import Board from './board';
// import Status from './status';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    textAlign: 'center',
    margin: '15px auto',
    fontWeight: 300,
    fontSize: '6rem',
    color: '#F49659',
    fontFamily: "'DUNGRG', 'Open Sans', sans-serif"
  },
  p: {
    textAlign: 'center',
    margin: '5px auto',
    fontSize: '1.6rem',
    color: '#B2CF41'
  },
  board: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#1f1f1f'
  }
};

export class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Rougelike Dungeon Crawler Game
        </h2>
        <p style={styles.p}>
        </p>
        <div style={styles.board}>
          <Board/>
        </div>
      </div>
    );
  }
}
