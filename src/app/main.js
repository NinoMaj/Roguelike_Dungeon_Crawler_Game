import React, {Component} from 'react';
import {Header} from './header';
import {App} from './containers/app';
import {Footer} from './footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    backgroundColor: '#1f1f1f'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <App/>
        </main>
        <Footer/>
      </div>
    );
  }
}
