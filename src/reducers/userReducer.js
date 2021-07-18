//import * as Types from "../actions/actionTypes";

const initialState = {
  authUser: null,
  isFetching: false,
  token: null,
  emailSend: false,
  passwordResetSuccess: false,
  organization: undefined
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // case Types.FETCHING:
    //   return {
    //     ...state,
    //     isFetching: true,
    //   };
    // case Types.FETCHED:
    //   return {
    //     ...state,
    //     isFetching: false,
    //   };
    // case Types.AUTH_USER:
    //   return {
    //     ...state,
    //     authUser: action.payload,
    //   };
    // case Types.AUTH_USER_TOKEN:
    //   return {
    //     ...state,
    //     token: action.payload,
    //   };
    // case Types.EMAIL_SEND_SUCCESS:
    //   return {
    //     ...state,
    //     emailSend: action.payload,
    //   };
    // case Types.PASSWORD_RESET_SUCCESS:
    //   return {
    //     ...state,
    //     passwordResetSuccess: action.payload,
    //   };
    // case Types.GET_ORGANIZATION:
    //   return {
    //     ...state,
    //     organization: action.payload,
    //   };
    default:
      return state;
  }
};

export default userReducer;
