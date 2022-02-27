import usersReducer from "./usersReducer";

describe("Civen a usersReducer functin", () => {
  describe("When it receives current users 'Tom' and 'Lana' and userRegister action with user 'Sam'", () => {
    test("Then it should return users 'Tom', 'Lana' and 'Sam'", () => {
      const currentUsers = [
        {
          name: "Tom",
        },
        {
          name: "Lana",
        },
      ];
      const newUser = {
        name: "Sam",
      };
      const action = {
        type: "user-register",
        user: newUser,
      };
      const expectedUsers = [
        {
          name: "Tom",
        },
        {
          name: "Lana",
        },
        {
          name: "Sam",
        },
      ];

      const users = usersReducer(currentUsers, action);

      expect(users).toEqual(expectedUsers);
    });
  });

  describe("When it doesn't receives users and action", () => {
    test("Then it should return []", () => {
      const users = usersReducer();

      expect(users).toHaveLength(0);
    });
  });

  describe("When it receives 0 current users and userRegister action with new user 'Tom'", () => {
    test("Then it should return user 'Tom'", () => {
      const currentUsers = [];
      const newUser = {
        name: "Tom",
      };
      const action = {
        type: "user-register",
        user: newUser,
      };
      const expectedUsers = [
        {
          name: "Tom",
        },
      ];

      const users = usersReducer(currentUsers, action);

      expect(users).toEqual(expectedUsers);
    });
  });
});
