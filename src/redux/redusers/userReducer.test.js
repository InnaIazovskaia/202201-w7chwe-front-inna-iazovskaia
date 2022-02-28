import userReducer from "./userReduser";

describe("Given a userReducer function", () => {
  describe("When it receives initialUserData action with user 'Tom'", () => {
    test("Then it should return user 'Tom'", () => {
      const initialUserData = {
        name: "",
        username: "",
        id: null,
        loggedIn: false,
      };
      const userLoged = {
        name: "Tom",
      };
      const action = {
        type: "user-login",
        user: userLoged,
      };
      const expectedUser = {
        name: "Tom",
      };

      const user = userReducer(initialUserData, action);

      expect(user).toEqual(expectedUser);
    });
  });

  describe("When it doesn't receives user and action", () => {
    test("Then it should return initialUserData", () => {
      const initialUserData = {
        name: "",
        username: "",
        id: null,
        loggedIn: false,
      };

      const user = userReducer();

      expect(user).toEqual(initialUserData);
    });
  });
});
