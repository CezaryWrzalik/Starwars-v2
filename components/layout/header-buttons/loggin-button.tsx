import { useState } from "react";
import styled from "styled-components";
import PersonIcon from "../../icons/person-icon";
import UiButton from "../../ui/ui-button";
import LoginPopup from "../login/login";

const LogginButtonContainer = styled.div`
`;

const DesktopButton = styled.div`
  height: 50px;
  width: 80px;

  @media (max-width: 650px) {
    display: none;
  }
`;

const MobileButton = styled.button`
  padding: 8px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: var(--default-radius);
  background: inherit;
  cursor: pointer;
  width: 50px;

  @media (min-width: 650px) {
    display: none;
  }
`;

const LogginButton = () => {
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleLoginVisible = () => {
    setLoginVisible(!loginVisible);
  };

  return (
    <LogginButtonContainer>
      <DesktopButton onClick={toggleLoginVisible}>
        <UiButton>Zaloguj</UiButton>
      </DesktopButton>
      <MobileButton onClick={toggleLoginVisible}>
        <PersonIcon />
      </MobileButton>
      <LoginPopup
        loginVisible={loginVisible}
        toggleLoginVisible={toggleLoginVisible}
      />
    </LogginButtonContainer>
  );
};

export default LogginButton;
