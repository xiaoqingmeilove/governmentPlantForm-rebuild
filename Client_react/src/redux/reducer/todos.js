const todos = (state = {notice:"初始化成功"}, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
            ...state,
            ...action.payload
        }
      case 'TOGGLE_TODO':
        return {...state,msg:"这是一条测试用数据"}
      default:
        return state
    }
  }
  
  export default todos