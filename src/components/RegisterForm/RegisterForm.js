import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { userRegisterThunk } from "../../redux/thunks/usersThunks";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialData = {
    name: "",
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
    dispatch(userRegisterThunk(formData));
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  return (
    <>
      <section className="container mb-3">
        <form
          className="mb-3"
          onSubmit={onSubmit}
          autoComplete="off"
          noValidate
          ref={form}
        >
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="inputName"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

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
            Sign up
          </button>
        </form>
      </section>
    </>
  );
};

export default RegisterForm;
