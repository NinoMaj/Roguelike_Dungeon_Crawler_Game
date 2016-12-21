/* eslint linebreak-style: ["error", "windows"] */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

// const maxWidth = this.props.boardSizeState * 16;
const styles = {
  status: {
    margin: '5 auto',
    color: 'white',
    position: 'fixed',
    left: '50%',
    marginLeft: '-250px',
    fontSize: '2rem'
  },
  statusTopRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  statusBottomRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontSize: '2rem',
    margin: '0px'
  },
  statusBtn: {
    backgroundColor: '#B2CF41',
    border: 'none',
    marginBottom: '5px'
  }
};
class Status extends Component {
  render() {
    if (this.props.items.player) {
      const width = {width: this.props.boardSizeState * 10};
      return (
        <div style={Object.assign({}, styles.status, width)}>
          <div style={styles.statusTopRow}>
          {this.props.items.message &&
            <Button bsSize="large" block style={styles.statusBtn}>{this.props.items.message.last}</Button>
          }
          </div>
          <div style={styles.statusBottomRow}>
            <Button style={styles.statusBtn}>Weapon: {this.props.items.player.weapon}</Button>
            <Button style={styles.statusBtn}>Level: {this.props.items.player.level}</Button>
            <Button style={styles.statusBtn}>Health: {this.props.items.player.health}</Button>
            <Button style={styles.statusBtn}>XP: {this.props.items.player.Xp}</Button>
            <Button style={styles.statusBtn}>Moves: {this.props.moves}</Button>
          </div>
        </div>
      );
    }
    return (
      <div style={styles.status}>
        Loading...
      </div>
    );
  }
}

Status.propTypes = {
  boardSizeState: React.PropTypes.number,
  moves: React.PropTypes.number,
  items: React.PropTypes.object
};

const mapStateToProps = state => {
  return {
    items: state.items,
    boardSizeState: state.boardSizeState
  };
};

export default connect(mapStateToProps)(Status);
