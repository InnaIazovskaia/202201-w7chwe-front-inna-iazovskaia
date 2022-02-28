import actionsTypes from "../actions/actionsTypes";

const initialUserData = { name: "", username: "", id: null, loggedIn: false };

const userReducer = (user = initialUserData, action = {}) => {
  let newUser;

  switch (action.type) {
    case actionsTypes.userLogin:
      newUser = { ...action.user };
      break;
    default:
      newUser = { ...user };
  }

  return newUser;
};

export default userReducer;
