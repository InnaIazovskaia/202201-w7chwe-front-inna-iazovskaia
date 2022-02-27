import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Title = styled.h1`
  text-align: center;
  margin: 20px;
`;

const RegisterPage = () => {
  return (
    <>
      <Title>Registration</Title>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
