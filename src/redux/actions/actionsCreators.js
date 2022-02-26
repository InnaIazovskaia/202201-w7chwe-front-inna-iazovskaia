import actionsTypes from "./actionsTypes";

export const userRegisterAction = (user) => ({
  type: actionsTypes.userRegister,
  user,
});
