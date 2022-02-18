import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../redux";

import styled from "styled-components";
import SunIcon from "../../icons/sun-icon";
import MoonIcon from "../../icons/moon-icon";

export const ThemeButtonContainer = styled.button`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: var(--default-radius);
  background: ${({ theme }) => theme.body};
  cursor: pointer;
`;

const ThemeButton = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: State) => state.theme);
  const { toggleTheme } = bindActionCreators(actionCreators, dispatch);

  const handleClick = () => {
    theme == "light" ? toggleTheme("dark") : toggleTheme("light");
  };
  return (
    <ThemeButtonContainer onClick={handleClick}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </ThemeButtonContainer>
  );
};

export default ThemeButton;