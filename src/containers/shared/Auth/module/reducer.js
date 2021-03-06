import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  lOGIN_SUCCESS,
  LOG_OUT,
  USER_BOOKING_TICKET_LOGIN,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./type";

let user = null;
if (localStorage.getItem(USER_BOOKING_TICKET_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN));
}

const initialState = {
  currentUser: user,
  loading: false,
  errorLogin: null,
  errorSignUp: null,

};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, errorLogin: null };
    case lOGIN_SUCCESS:
      localStorage.setItem(USER_BOOKING_TICKET_LOGIN, JSON.stringify(payload));
      return { ...state, loading: false, currentUser: payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, errorLogin: payload };
    case LOG_OUT:
      localStorage.setItem(USER_BOOKING_TICKET_LOGIN, JSON.stringify(payload));
      return { ...state, loading: false, error: null, currentUser: payload };
    case SIGNUP_REQUEST:
      return { ...state, loading: true, errorSignUp : null };
    case SIGNUP_SUCCESS:
      localStorage.setItem(USER_BOOKING_TICKET_LOGIN, JSON.stringify(payload));
      return { ...state, currentUser: payload, loading: false };
    case SIGNUP_FAIL:
      return { ...state, errorSignUp: payload, loading: false };   
    default:
      return state;
  }
};

export default authReducer;
