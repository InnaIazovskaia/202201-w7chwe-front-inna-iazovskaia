import {
  userLoginAction,
  userRegisterAction,
} from "../actions/actionsCreators";
import jwtDecode from "jwt-decode";

export const userRegisterThunk = (user) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SOCIAL}users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  if (response.ok) {
    const newUser = await response.json();
    dispatch(userRegisterAction(newUser));
  }
};

export const userLoginThunk = (user) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SOCIAL}users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (response.ok) {
    const { token } = await response.json();
    const { id, username } = await jwtDecode(token);
    localStorage.setItem("token", token);
    dispatch(userLoginAction({ id, username, token: token }));
  }
};
