/* eslint linebreak-style: ["error", "windows"] */
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import component from 'componentPath';
// import {actionCreator} from 'actionCreatorPath';
import {bindActionCreators} from 'redux';
import {Button, FormControl} from 'react-bootstrap';

import Cell from './cell';
import {selectCell} from '../actions/select_cell';
import {cellLife} from '../actions/living';
import {resetCells} from '../actions/reset_cells';
import {boardSize} from '../actions/board_size';

let timeoutID;
let iterations = 0;

class Board extends Component {
  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
    this.onHandleClickValue = this.onHandleClickValue.bind(this);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleClickStop = this.handleClickStop.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
    this.handleSelectValue = this.handleSelectValue.bind(this);
  }

  componentWillMount() {
    this.props.resetCells();
    this.handleClickStart();
  }

  onHandleClickValue(id) {
    // console.log('you clicked: ', cell);
    this.props.selectCell(this.props.cells, id);
  }

  handleClickStart() {
    timeoutID = setInterval(() => {
      // console.log("Hello", this.props.cellLife);
      // console.log("Hello2", this.props.cells);
      this.props.cellLife(this.props.cells);
      iterations++;
    }, 500);
  }

  handleClickStop() {
    clearTimeout(timeoutID);
  }

  handleClickReset() {
    clearTimeout(timeoutID);
    iterations = 0;
    this.props.resetCells(this.props.boardSizeState);
  }

  handleSelectValue(e) {
    // console.log('e.target.value', e.target.value);
    this.props.boardSize(Number(e.target.value));
  }

  renderList() {
    return Object.keys(this.props.cells).map(key => {
      const cell = this.props.cells[key];
      return (
        <Cell
          key={key}
          id={key}
          cell={cell}
          handleClickProp={this.onHandleClickValue}
          />
      );
    });
  }
  render() {
    const styles = {
      width: {
        width: Math.sqrt(Object.keys(this.props.cells).length) * 12,
        margin: '0 auto'
      },
      buttons: {
        maxWidth: '100vw',
        margin: '5px auto',
        fontSize: '2rem',
        whiteSpace: 'normal'
      },
      startAndinterations: {
        display: 'flex',
        margin: '5px auto'
      },
      interations: {
        fontSize: '1.8rem'
      },
      selectAndReset: {
        display: 'flex',
        marginTop: '5px'
      },
      select: {
        maxWidth: '70%',
        fontSize: '1.8rem',
        height: '2.5em'
      },
      reset: {
        maxWidth: '30%'
      }
    };

    return (
      <div>
        <div
          style={styles.width}
          className="Board"
          >
          {this.renderList()}
        </div>
        <div style={styles.buttons}>
          <div style={styles.startAndinterations}>
            <Button bsSize="large" block onClick={this.handleClickStart}>START</Button>
            <Button style={styles.interations}>{iterations}</Button>
          </div>
          <Button bsSize="large" block onClick={this.handleClickStop}>STOP</Button>
          <div style={styles.selectAndReset}>
            <FormControl componentClass="select" placeholder="Select board size" style={styles.select} onChange={this.handleSelectValue}>
              <option value="selected">SELECT BOARD SIZE</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </FormControl>
            <Button bsSize="large" block onClick={this.handleClickReset} style={styles.reset}>RESET</Button>
          </div>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  cells: React.PropTypes.object,
  boardSizeState: React.PropTypes.number,
  boardSize: React.PropTypes.func,
  selectCell: React.PropTypes.func,
  cellLife: React.PropTypes.func,
  resetCells: React.PropTypes.func
};

/*
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    mergeProp: mergePropVal
  }
}

Gore maknuti export default
*/

const mapStateToProps = state => {
  return {
    cells: state.cells,
    boardSizeState: state.boardSizeState
  };
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(Object.assign({}, {boardSize}, {resetCells}, {selectCell}, {cellLife}), dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
