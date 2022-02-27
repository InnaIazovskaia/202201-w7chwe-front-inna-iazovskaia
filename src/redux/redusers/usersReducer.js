import actionsTypes from "../actions/actionsTypes";

const usersReducer = (currentUsers = [], action = {}) => {
  let newUsers;

  switch (action.type) {
    case actionsTypes.userRegister:
      newUsers = [...currentUsers, action.user];
      break;
    default:
      newUsers = [...currentUsers];
  }

  return newUsers;
};

export default usersReducer;
