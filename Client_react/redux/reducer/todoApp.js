const todos = (state = "", action) => {
    switch (action.type) {
      case 'TODO':
        return {...action.payload}
      default:
        return state
    }
  }
  
  export default todos