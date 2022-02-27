import { userRegisterAction } from "../actions/actionsCreators";

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
