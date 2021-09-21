const INITIAL_STATE = {
  isLogin: false,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, isLogin: true};
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};
