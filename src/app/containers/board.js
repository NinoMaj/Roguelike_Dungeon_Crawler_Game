/* eslint linebreak-style: ["error", "windows"] */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, FormControl} from 'react-bootstrap';

import Cell from './cell';
import Status from './status';
// import {selectCell} from '../actions/select_cell';
import {resetCells} from '../actions/reset_cells';
import {changeItems} from '../actions/change_items';
import {boardSize} from '../actions/board_size';
import {diffSetter} from '../actions/diff_setter';
import {darknessSetter} from '../actions/darkness_setter';

const styles = {
  board: {
    margin: '0 auto'
  },
  buttons: {
    margin: '5px auto',
    fontSize: '2rem',
    whiteSpace: 'normal'
  },
  selectAndReset: {
    display: 'flex',
    marginTop: '5px'
  },
  select: {
    maxWidth: '50%',
    fontSize: '1.8rem',
    height: '2.5em',
    backgroundColor: '#B2CF41',
    border: 'none',
    marginLeft: '5px',
    marginRight: '5px'
  },
  reset: {
    maxWidth: '50%',
    backgroundColor: '#B2CF41',
    border: 'none'
  },
  darkness: {
    backgroundColor: '#B2CF41',
    border: 'none'
  }
};
let moves = -2;
class Board extends Component {
  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
    // this.onHandleClickValue = this.onHandleClickValue.bind(this);
    this.handleSelectValue = this.handleSelectValue.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleDarkness = this.handleDarkness.bind(this);
  }

  componentWillMount() {
    this.handleReset('Game started!');
  }

  componentDidMount() {
    document.body.addEventListener('keydown', event => {
      // console.log('Enter pressed', event);
      // console.log('Enter pressed', event.key);
      this.props.changeItems(this.props.cells, this.props.items, event.key);
    });
  }

  // onHandleClickValue(id) {
  //   // console.log('in onHandleClickValue');
  //   this.props.selectCell(this.props.cells, id);
  // }

  handleResetClick() {
    this.handleReset('Game restarted!');
    moves = -1;
  }

  handleReset(reason) {
    // console.log('onHandleReset');
    this.props.resetCells(this.props.boardSizeState, reason, this.props.options);
  }

  handleDarkness() {
    // console.log('handleDarkness');
    this.props.darknessSetter(this.props.options, this.props.options.darkness);
  }

  handleSelectValue(e) {
    // console.log('e.target.value', e.target.value);
    // console.log('this.props.options', this.props.options);
    this.props.diffSetter(this.props.options, Number(e.target.value));
  }

  checkHealth() {
    if (this.props.items.player) {
      if (this.props.items.player.health <= 0) {
        console.log('You died!');
        this.handleReset('You died!');
        moves = -1;
      } else if (!this.props.items.enemy.hasOwnProperty(6)) {
        console.log('You won!');
        this.handleReset('You won!');
        moves = -1;
      }
    }
  }

  renderList() {
    this.checkHealth();
    // console.log('this.props.cells', this.props.cells);
    let darkness = false;
    const darknessArr = [-253, -252, -251, -250, -249, -248, -247, -204, -203, -202, -201, -200, -199, -198, -197, -196, -155, -154, -153, -152, -151, -150, -149, -148, -147, -146, -145, -106, -105, -104, -103, -102, -101, -100, -99, -98, -97, -96, -95, -94, -56, -55, -54, -53, -52, -52, -51, -50, -49, -48, -47, -46, -45, -44, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 196, 197, 198, 199, 200, 201, 202, 203, 204, 247, 248, 249, 250, 251, 252, 253];
    return Object.keys(this.props.cells).map(key => {
      const cell = this.props.cells[key];
      if (this.props.options.darkness) {
        if (darknessArr.includes(key - this.props.items.player.position)) {
          darkness = false;
        } else {
          darkness = true;
        }
      }
      return (
        <Cell
          key={key}
          id={key}
          cell={cell}
          darkness={darkness}
          // handleClickProp={this.onHandleClickValue}
          />
      );
    });
  }
  render() {
    // const maxWidth = Math.sqrt(Object.keys(this.props.cells[0]).length) * 16;
    // console.log('this.props.items', this.props.items);
    const width = {width: this.props.boardSizeState * 32};
    const BtnWidth = {width: this.props.boardSizeState * 10};
    moves++;
    return (
      <div>
        <div style={Object.assign({}, styles.buttons, BtnWidth)}>
          <div style={styles.selectAndReset}>
            <Button bsSize="large" block style={styles.darkness} onClick={this.handleDarkness}>Toggle Darkness</Button>
            <FormControl componentClass="select" placeholder="Select board size" style={styles.select} onChange={this.handleSelectValue}>
              <option value="selected">Difficulty level</option>
              <option value={2}>Easy</option>
              <option value={1}>Medium</option>
              <option value={0.5}>Hard</option>
            </FormControl>
            <Button bsSize="large" block onClick={this.handleResetClick} style={styles.reset}>Reset</Button>
          </div>
        </div>
        <Status
          moves={moves}
          />
        <div
          style={Object.assign({}, styles.board, width)}
          className="Board"
          >
          {this.renderList()}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  cells: React.PropTypes.object,
  boardSizeState: React.PropTypes.number,
  items: React.PropTypes.object,
  options: React.PropTypes.object,
  boardSize: React.PropTypes.func,
  // selectCell: React.PropTypes.func,
  resetCells: React.PropTypes.func,
  changeItems: React.PropTypes.func,
  diffSetter: React.PropTypes.func,
  darknessSetter: React.PropTypes.func
};

const mapStateToProps = state => {
  return {
    cells: state.cells,
    boardSizeState: state.boardSizeState,
    items: state.items,
    options: state.options
  };
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(Object.assign({}, {boardSize}, {resetCells}, {changeItems}, {diffSetter}, {darknessSetter}, /* {selectCell} */), dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
