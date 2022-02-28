import actionsTypes from "./actionsTypes";

export const userRegisterAction = (user) => ({
  type: actionsTypes.userRegister,
  user,
});

export const userLoginAction = (user) => ({
  type: actionsTypes.userLogin,
  user,
});
