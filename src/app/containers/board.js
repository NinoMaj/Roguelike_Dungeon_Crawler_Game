/* eslint linebreak-style: ["error", "windows"] */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, FormControl} from 'react-bootstrap';

import Cell from './cell';
import {selectCell} from '../actions/select_cell';
import {resetCells} from '../actions/reset_cells';
import {boardSize} from '../actions/board_size';

const iterations = 0;

class Board extends Component {
  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
    this.onHandleClickValue = this.onHandleClickValue.bind(this);
    this.onHandleReset = this.onHandleReset.bind(this);
  }

  componentWillMount() {
    this.props.resetCells();
  }

  onHandleClickValue(id) {
    this.props.selectCell(this.props.cells, id);
  }

  onHandleReset() {
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
    const maxWidth = Math.sqrt(Object.keys(this.props.cells).length) * 12;
    const styles = {
      width: {
        width: maxWidth,
        margin: '0 auto'
      },
      buttons: {
        maxWidth,
        margin: '5px auto',
        fontSize: '2rem',
        whiteSpace: 'normal'
      },
      startAnditerations: {
        display: 'flex',
        margin: '5px auto'
      },
      start: {
        backgroundColor: '#B2CF41',
        border: 'none'
      },
      iterations: {
        fontSize: '1.8rem',
        marginLeft: '5px',
        backgroundColor: '#B2CF41',
        border: 'none'
      },
      stop: {
        backgroundColor: '#B2CF41',
        border: 'none'
      },
      selectAndReset: {
        display: 'flex',
        marginTop: '5px'
      },
      select: {
        maxWidth: '70%',
        fontSize: '1.8rem',
        height: '2.5em',
        backgroundColor: '#B2CF41',
        border: 'none'
      },
      reset: {
        maxWidth: '30%',
        marginLeft: '5px',
        backgroundColor: '#B2CF41',
        border: 'none'
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
          <div style={styles.startAnditerations}>
            <Button bsSize="large" block style={styles.start}>START</Button>
            <Button style={styles.iterations}>{iterations}</Button>
          </div>
          <Button bsSize="large" block style={styles.stop}>STOP</Button>
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
            <Button bsSize="large" block onClick={this.handleReset} style={styles.reset}>RESET</Button>
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
  resetCells: React.PropTypes.func
};

const mapStateToProps = state => {
  return {
    cells: state.cells,
    boardSizeState: state.boardSizeState
  };
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(Object.assign({}, {boardSize}, {resetCells}, {selectCell}), dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
