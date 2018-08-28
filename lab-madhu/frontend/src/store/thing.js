import uuid from 'uuid/v1';
import superagent from 'superagent'
// Actions
const ADD = 'Thing/ADD';
const FETCH = 'Thing/FETCH';
// Reducer
export default function reducer(state = [], action) {

  const { type, payload } = action;

  switch (type) {
    case ADD:
      return [
        ...state,
        payload
      ];
      case FETCH:
      return [...payload]
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
export function fetchThings(things) {
  
  return {
    type: FETCH,
    payload: things
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
export function fetchThingsAsync(thing) {

  return dispatch => {
      superagent.get('https://internets-of-thing-api.herokuapp.com/api/v1/things')
      .then(response=>{return response.body})
      .then(things=>dispatch(fetchThings(things)))
  };
}