const INITIAL_STATE = {
  id: 0,
  username: '',
  password: '',
  email: '',
  role: '',
  isLogin: false,
  carts: [],
  loadingCarts: false,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      let newState = state;
      newState = {...state, ...action.payload, isLogin: true};
      // return { ...state, ...action.payload, isLogin: true };
      return newState;
    case 'LOGOUT':
      return INITIAL_STATE;
    case 'CART':
      return {...state, carts: action.carts};
    case 'LoadingCarts':
      return {...state, loadingCarts: true};
    case 'AFTERPROCESS':
      return {...state, loadingCarts: false};
    default:
      return state;
  }
};
