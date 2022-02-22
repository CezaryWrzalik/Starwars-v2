import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../../redux";
import PersonIcon from "../../icons/person-icon";
import UiButton from "../../ui/ui-button";
import LoginPopup from "../login/login-modal";

const LogginButtonContainer = styled.div``;

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
  const { status } = useSelector((state: State) => state.response);

  const [loginVisible, setLoginVisible] = useState(false);

  const toggleLoginVisible = () => {
    setLoginVisible(!loginVisible);
  };

  useEffect(() => {
    if (status === "success") {
      setLoginVisible(false);
    }
  }, [status]);

  return (
    <LogginButtonContainer>
      <DesktopButton onClick={toggleLoginVisible}>
        <UiButton>
          <div>Zaloguj</div>
        </UiButton>
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
