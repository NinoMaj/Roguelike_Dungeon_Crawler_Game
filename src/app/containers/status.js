/* eslint linebreak-style: ["error", "windows"] */
import React, {Component} from 'react';
import {connect} from 'react-redux';

// const maxWidth = this.props.boardSizeState * 16;
const styles = {
  status: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '0 auto',
    color: 'white',
    fontSize: '1.8rem'
  }
};

class Status extends Component {
  render() {
    if (this.props.items.player) {
      const width = {width: this.props.boardSizeState * 16};
      return (
        <div style={Object.assign({}, styles.status, width)}>
          <div>Weapon: {this.props.items.player.weapon}</div>
          <div>Level: {this.props.items.player.level}</div>
          <div>Health: {this.props.items.player.health}</div>
          <div>XP: {this.props.items.player.Xp}</div>
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
  items: React.PropTypes.object
};

const mapStateToProps = state => {
  return {
    items: state.items,
    boardSizeState: state.boardSizeState
  };
};

export default connect(mapStateToProps)(Status);
