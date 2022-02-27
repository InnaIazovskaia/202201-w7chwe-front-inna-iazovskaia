import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/index";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should render input 'Name', input 'Username', input 'Password' and submit batton with text 'Sing up'", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

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
