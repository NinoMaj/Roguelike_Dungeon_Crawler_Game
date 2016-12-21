/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable react/jsx-no-bind */
import React, {Component} from 'react';
// import playerImage from '../images/mountedKnight.png';

const styles = {
  color0: {
    backgroundColor: "#1f1f1f" // background gray
  },
  color1: {
    backgroundColor: "#FFFFFF" // white for room
  },
  color2: {
    // backgroundColor: "#F49659", // orange for player
    backgroundImage: `url("./app/images/mountedKnight.png")`
  },
  color3: {
    // backgroundColor: "#E75651" // red enemy
    backgroundImage: `url("./app/images/spider-alt.png")`
  },
  color4: {
    // backgroundColor: "#B2CF41" // green perk
    backgroundImage: `url("./app/images/locked-chest.png")`
  },
  color5: {
    // backgroundColor: "#7D26CD" // #purple boss
    backgroundImage: `url("./app/images/ifrit.png")`
  }
};

export default class Cell extends Component {
  // handleClick(id) {
  //   this.props.handleClickProp(id);
  // }
  render() {
    // const image = "http://kingofwallpapers.com/png/img-001.php?pic=/png/png-001.jpg";
    if (this.props.cell.cellStatus === 0 || this.props.darkness) {
      return (
        <div
          className="Cell"
          // onClick={() => this.handleClick(this.props.id)}
          style={styles.color0}
          >
        </div>);
    } else if (this.props.cell.cellStatus === 1) {
      return (
        <div
          className="Cell"
          // onClick={() => this.handleClick(this.props.id)}
          style={styles.color1}
          >
        </div>);
    } else if (this.props.cell.cellStatus === 3) {
      return (
        <div
          className="Cell"
          // onClick={() => this.handleClick(this.props.id)}
          style={styles.color3}
          >
        </div>);
    } else if (this.props.cell.cellStatus === 4) {
      return (
        <div
          className="Cell"
          // onClick={() => this.handleClick(this.props.id)}
          style={styles.color4}
          >
        </div>);
    } else if (this.props.cell.cellStatus === 5) {
      return (
        <div
          className="Cell"
          // onClick={() => this.handleClick(this.props.id)}
          style={styles.color5}
          >
        </div>);
    }
    return (
      <div
        className="Cell"
        // onClick={() => this.handleClick(this.props.id)}
        style={styles.color2}
        >
      </div>
    );
  }
}

Cell.propTypes = {
  id: React.PropTypes.string,
  cell: React.PropTypes.object,
  darkness: React.PropTypes.bool,
  handleClickProp: React.PropTypes.func
};
