import * as actionTypes from '../actions/actions';

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result}),
      }
    case actionTypes.DELETE_RESULT:
      // const newArray = [...state.results];
      // newArray.splice(2, 1);
      // Using filter method is a lot more elegant than the solution above.
      const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
      return {
        ...state,
        results: updatedArray,
      }
    default:
      return state;
  }
};

export default resultReducer;
