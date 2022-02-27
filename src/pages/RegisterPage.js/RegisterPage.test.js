import RegisterPage from "./RegisterPage";
import renderWithProviders from "../../setupTests";
import { getByRole, queryAllByRole, screen } from "@testing-library/react";

describe("Given a RegisterPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should display heading 'Registration'", () => {
      renderWithProviders(<RegisterPage />);

      const heading = screen.getByRole("heading", {
        name: /registration/i,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it shoul display input 'Name', input 'Username', input 'Password' and submit batton with text 'Sing up'", () => {
      renderWithProviders(<RegisterPage />);

      const inputName = screen.queryByLabelText("Name");
      const inputUsername = screen.queryByLabelText("Username");
      const inputPassword = screen.queryByLabelText("Password");
      const submitBatton = screen.queryByRole("button");

      expect(inputName).toBeInTheDocument();
      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(submitBatton).toBeInTheDocument();
    });
  });
});
