const INITIAL_STATE = {
  isLogin: false,
  id: '',
  username: '',
  password: '',
  cart: [],
  role: '',
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, ...action.payload, isLogin: true};
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};
