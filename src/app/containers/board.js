/* eslint linebreak-style: ["error", "windows"] */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, FormControl} from 'react-bootstrap';

import Cell from './cell';
import {selectCell} from '../actions/select_cell';
import {resetCells} from '../actions/reset_cells';
import {changeItems} from '../actions/change_items';
import {boardSize} from '../actions/board_size';

const styles = {
  board: {
    margin: '0 auto'
  },
  buttons: {
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

class Board extends Component {
  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
    this.onHandleClickValue = this.onHandleClickValue.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillMount() {
    this.props.resetCells();
  }

  componentDidMount() {
    document.body.addEventListener('keydown', event => {
      // console.log('Enter pressed', event);
      // console.log('Enter pressed', event.key);
      this.props.changeItems(this.props.cells, this.props.items, event.key);
    });
  }

  onHandleClickValue(id) {
    console.log('inonHandleClickValue');
    this.props.selectCell(this.props.cells, id);
  }

  handleReset() {
    console.log('onHandleReset');
    this.props.resetCells(this.props.boardSizeState);
  }

  handleSelectValue(e) {
    // console.log('e.target.value', e.target.value);
    this.props.boardSize(Number(e.target.value));
  }

  checkHealth() {
    if (this.props.items.player) {
      if (this.props.items.player.health <= 0) {
        this.handleReset();
      }
    }
  }

  renderList() {
    this.checkHealth();
    // console.log('this.props.cells', this.props.cells);
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
    // const maxWidth = Math.sqrt(Object.keys(this.props.cells[0]).length) * 16;
    console.log('this.props.items', this.props.items);
    const width = {width: this.props.boardSizeState * 16};

    return (
      <div>
        <div
          style={Object.assign({}, styles.board, width)}
          className="Board"
          >
          {this.renderList()}
        </div>
        <div style={Object.assign({}, styles.buttons, width)}>
          <div style={styles.startAnditerations}>
            <Button bsSize="large" block style={styles.start}>START</Button>
            <Button style={styles.iterations}>x</Button>
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
  items: React.PropTypes.object,
  boardSize: React.PropTypes.func,
  selectCell: React.PropTypes.func,
  resetCells: React.PropTypes.func,
  changeItems: React.PropTypes.func
};

const mapStateToProps = state => {
  return {
    cells: state.cells,
    boardSizeState: state.boardSizeState,
    items: state.items
  };
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(Object.assign({}, {boardSize}, {resetCells}, {changeItems}, {selectCell}), dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
