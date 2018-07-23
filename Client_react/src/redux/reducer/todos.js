const todos = (state = {}, action) => {
  switch (action.type.split("/")[1]) {
    case 'Done':
      return {...state,...action.payload};
    default:
      return {...state};
  }
}

export default todos