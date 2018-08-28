import uuid from 'uuid/v1';

// Actions
const ADD = 'Thing/ADD';

// Reducer
export default function reducer(state = [], action) {

  const { type, payload } = action;

  switch (type) {
    case ADD:
      return [
        ...state,
        payload
      ];
    default: return state;
  }
}

// Action Creators
export function addThing(thing) {
  
  thing.id = uuid();

  return {
    type: ADD,
    payload: thing
  }  
}

export function addThingAsync(thing) {

  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(addThing(thing));
    }, 1000);
  };
}
