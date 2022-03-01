import { userRegisterThunk } from "./usersThunks";

describe("Given a userRegisterThunk function", () => {
  describe("When it's called", () => {
    test("Then it should despath a function", async () => {
      const user = {
        name: "Tom",
        username: "superTom",
        password: "superTom",
      };
      const dispatch = jest.fn();

      const registerThunk = userRegisterThunk(user);
      await registerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
