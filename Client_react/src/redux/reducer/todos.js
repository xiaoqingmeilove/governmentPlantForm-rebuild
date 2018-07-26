const todos = (state = {
  loading:false
}, action) => {
  switch (action.type.split("/")[1]) {
    case 'Done':
      return {...state,...action.payload};
    case 'loading':
      return {...state,...action.payload};
    default:
      return {...state};
  }
}

export default todos