import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userLoginThunk } from "../../redux/thunks/usersThunks";

const Title = styled.h1`
  text-align: center;
  margin: 20px;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialData = {
    username: "",
    password: "",
  };

  const form = useRef(null);
  const [formData, setFormData] = useState(initialData);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(userLoginThunk(formData));
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  return (
    <>
      <Title>Log in to account</Title>
      <section className="container mb-3">
        <form
          className="mb-3"
          onSubmit={onSubmit}
          autoComplete="off"
          noValidate
          ref={form}
        >
          <div className="mb-3">
            <label htmlFor="inputUsername" className="form-label">
              Username
            </label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="inputUsername"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="inputPassword"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>

        <p>
          If you don’t have an account, go to{" "}
          <Link to="/registration">registration</Link>
        </p>
      </section>
    </>
  );
};

export default LoginPage;
