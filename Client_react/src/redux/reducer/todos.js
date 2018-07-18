const todos = (state = 0, action) => {
  switch (action.type) {
    case 'Done':
      return state + action.payload;
    default:
      return state;
  }
}

export default todos