/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable react/jsx-no-bind */
import React, {Component} from 'react';

const styles = {
  color0: {
    backgroundColor: "#1f1f1f" // background gray
  },
  color1: {
    backgroundColor: "#FFFFFF" // white for room
  },
  color2: {
    backgroundColor: "#F49659" // orange player
  },
  color3: {
    backgroundColor: "#E75651" // red enemy
  },
  color4: {
    backgroundColor: "#B2CF41" // green perk
  }
};

export default class Cell extends Component {
  handleClick(id) {
    this.props.handleClickProp(id);
  }
  render() {
    if (this.props.cell.cellStatus === 0) {
      return (
        <div
          className="Cell"
          onClick={() => this.handleClick(this.props.id)}
          style={styles.color0}
          >
        </div>);
    } else if (this.props.cell.cellStatus === 1) {
      return (
        <div
          className="Cell"
          onClick={() => this.handleClick(this.props.id)}
          style={styles.color1}
          >
        </div>);
    } else if (this.props.cell.cellStatus === 3) {
      return (
        <div
          className="Cell"
          onClick={() => this.handleClick(this.props.id)}
          style={styles.color3}
          >
        </div>);
    } else if (this.props.cell.cellStatus === 4) {
      return (
        <div
          className="Cell"
          onClick={() => this.handleClick(this.props.id)}
          style={styles.color4}
          >
        </div>);
    }
    return (
      <div
        className="Cell"
        onClick={() => this.handleClick(this.props.id)}
        style={styles.color2}
        >
      </div>
    );
  }
}

Cell.propTypes = {
  id: React.PropTypes.string,
  cell: React.PropTypes.object,
  handleClickProp: React.PropTypes.func
};
