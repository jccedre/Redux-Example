import * as actionTypes from '../actions/actions';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case actionTypes.ADDITION:
      return {
        ...state,
        counter: state.counter + action.value,
      }
    case actionTypes.SUBTRACTION:
      return {
        ...state,
        counter: state.counter - action.value,
      }
    default:
      return state;
  }
};

export default counterReducer;
