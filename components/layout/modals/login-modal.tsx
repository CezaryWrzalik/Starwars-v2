import { useSession } from "next-auth/react";
import styled from "styled-components";
import AuthForm from "../../auth/auth-form";
import CrossIcon from "../../icons/cross-icon";

type PropsType = {
  isPopupVisible: boolean;
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

  display: grid;
  place-items: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  width: 400px;
  padding: 10px;
  background-color: rgba(211, 211, 211, 0.05);
  backdrop-filter: blur(2px);
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: var(--default-radius);

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;

  ${({ isPopupVisible }: PropsType) =>
  isPopupVisible &&
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

  @media (max-height: 500px) {
    height: 300px;
  }
`;

const LoginContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.body};
  border-radius: var(--default-radius);
  transition: background 0.5s linear;

  @media (max-width: 650px) {
    width: 250px;
    gap: 20px;
    padding: 10px 10px;
  }

  @media (max-height: 500px) {
    height: 250px;
  }
`;

const LoginModal = ({ isPopupVisible, toggleLoginVisible }: PropsType) => {

  return (
    <Modal isPopupVisible={isPopupVisible}>
      <CloseModal onClick={toggleLoginVisible}>
        <CrossIcon />
      </CloseModal>
      <LoginContainer>
        <AuthForm />
      </LoginContainer>
    </Modal>
  );
};

export default LoginModal;
