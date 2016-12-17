import React, {Component} from 'react';

import Board from './board';
import Status from './status';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    textAlign: 'center',
    margin: '15px auto',
    fontWeight: 300,
    fontSize: '3rem',
    color: '#B2CF41'
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
          Conway's Game of Life
        </h2>
        <p style={styles.p}>
          Click on cell to interact
        </p>
        <div style={styles.board}>
          <Status/>
          <Board/>
        </div>
      </div>
    );
  }
}
