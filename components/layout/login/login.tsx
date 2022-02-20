import styled, { keyframes } from "styled-components";
import CrossIcon from "../../icons/cross-icon";
import UiButton from "../../ui/ui-button";
import UiInput from "../../ui/ui-input";

type PropsType = {
  loginVisible: boolean;
  toggleLoginVisible?: () => void;
};

const CloseModal = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;

  svg {
    height: 15px;
  }
`;

const Modal = styled.div`
  position: absolute;

  display: block;
  top: 50%;
  left: 50%;
  height: 400px;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: var(--default-radius);
  background-color: rgba(211, 211, 211, 0.05);
  backdrop-filter: blur(2px);

  display: grid;
  place-items: center;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;

  ${({ loginVisible }: PropsType) =>
    loginVisible &&
    `
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
  `}

  @media (max-width: 650px) {
    width: 280px;
    gap: 20px;
    padding: 10px 10px;
  }
`;

const LoginContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.body};
  border-radius: var(--default-radius);

  @media (max-width: 650px) {
    width: 250px;
    gap: 20px;
    padding: 10px 10px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  padding: 20px 40px;

  button {
    height: 40px;
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 5px;
  width: 100%;

  input {
    height: 30px;
    padding: 5px 10px;
    width: 100%;
  }
`;

const Login = ({ loginVisible, toggleLoginVisible }: PropsType) => {
  return (
    <Modal loginVisible={loginVisible}>
      <CloseModal onClick={toggleLoginVisible}>
        <CrossIcon />
      </CloseModal>
      <LoginContainer>
        <FormContainer>
          <InputContainer>
            <Label htmlFor="login">Login: </Label>
            <UiInput placeholder="login" type="text" id="login"></UiInput>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="pass">Password</Label>
            <UiInput placeholder="password" type="password" id="pass"></UiInput>
          </InputContainer>
          <UiButton>Zaloguj</UiButton>
          <UiButton>Zarejestuj</UiButton>
        </FormContainer>
      </LoginContainer>
    </Modal>
  );
};

export default Login;
