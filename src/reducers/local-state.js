function setState(state, newState) {
  return { ...state, ...newState };
}

function clearState() {
  return {};
}

export default function(state = {}, action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'CLEAR_STATE':
    return clearState();
  default:
    return state;
  }
}
