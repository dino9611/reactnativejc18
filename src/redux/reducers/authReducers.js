const INITIAL_STATE = {
  isLogin: false,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, isLogin: true};
    default:
      return state;
  }
};
