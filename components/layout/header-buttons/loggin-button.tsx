import styled from "styled-components";
import PersonIcon from "../../icons/person-icon";
import { ThemeButtonContainer } from "./theme-button";

const LogginButtonContainer = styled(ThemeButtonContainer)`
  padding: 5px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: var(--default-radius);
  background: ${({ theme }) => theme.body};
  cursor: pointer;
`;

const LogginButton = () => {
  return (
    <LogginButtonContainer>
      <PersonIcon />
    </LogginButtonContainer>
  );
};

export default LogginButton;
