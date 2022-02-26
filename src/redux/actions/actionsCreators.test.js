import { userRegisterAction } from "./actionsCreators";

describe("Given a userRegisterAction", () => {
  describe("When it receives user 'Lina'", () => {
    test("Then it should retern user-register action with the user", () => {
      const user = {
        name: "Lina",
      };
      const expectedAction = {
        type: "user-register",
        user: user,
      };

      const action = userRegisterAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});
