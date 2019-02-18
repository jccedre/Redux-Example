import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

    render () {
        return (
            <div>
              <CounterOutput value={this.props.ctr} />
              <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
              <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
              <CounterControl label="Add 5" clicked={this.props.onAdditionCounter}  />
              <CounterControl label="Subtract 5" clicked={this.props.onSubtractionCounter}  />
              <hr />
              <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
              <ul>
                {this.props.storedResults.map(strResult => (
                  <li
                    key={strResult.id}
                    onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                ))}
              </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    onAdditionCounter: () => dispatch({type: actionTypes.ADDITION, value: 5}),
    onSubtractionCounter: () => dispatch({type: actionTypes.SUBTRACTION, value: 5}),
    onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId: id}),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
