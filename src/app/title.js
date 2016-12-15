import React, {Component} from 'react';

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#cf4646',
    color: 'white'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  }
};

export class Title extends Component {
  render() {
    return (
      <div style={styles.title}>
        <h1 style={styles.h1}>No game, No life</h1>
        <div>
          <img style={styles.logo} src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No-Game-No-Life-anime-logo.svg/1280px-No-Game-No-Life-anime-logo.svg.png"/>
        </div>
      </div>
    );
  }
}
