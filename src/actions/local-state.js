export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function clearState() {
  return {
    type: 'CLEAR_STATE'
  };
}
