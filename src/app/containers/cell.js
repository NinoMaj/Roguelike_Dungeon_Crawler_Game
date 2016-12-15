/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable react/jsx-no-bind */
import React, {Component} from 'react';

const styles = {
  color0: {
    backgroundColor: "white"
  },
  color1: {
    backgroundColor: "#FF9999"
  },
  color2: {
    backgroundColor: "#FF0000"
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

/*
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
*/
