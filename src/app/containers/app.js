import React, {Component} from 'react';

// import UserList from './user_list';
// import UserDetails from './user_detail';
import Board from './board';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    textAlign: 'center',
    margin: '15px auto',
    fontWeight: 300,
    fontSize: '3rem'
  },
  p: {
    textAlign: 'center',
    margin: '5px auto',
    fontSize: '1.6rem'
  },
  board: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
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
          <Board/>
        </div>
        {/*
          <div>
          <h2>Username List:</h2>
          <UserList/>
          <hr/>
          <h2>User Details:</h2>
          <UserDetails/>
        </div>
      */}
      </div>
    );
  }
}
