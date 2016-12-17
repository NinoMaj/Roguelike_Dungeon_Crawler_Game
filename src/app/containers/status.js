/* eslint linebreak-style: ["error", "windows"] */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const styles = {
  width: {
    margin: '0 auto'
  }
};

class Status extends Component {

  render() {
    return (
      <div style={styles.width}>
        Bla
      </div>
    );
  }
}

Status.propTypes = {
};

const mapStateToProps = state => {
  return {
    cells: state.cells
  };
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(Object.assign({}), dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Status);
