import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../redux";

import styled from "styled-components";
import SunIcon from "../../icons/sun-icon";
import MoonIcon from "../../icons/moon-icon";

export const ThemeButtonContainer = styled.button`
position: relative;
  height: 100%;
  width: 80px;
  padding: 0 3px;
  background: inherit;
  border-radius: var(--default-radius);
  min-width: 50px;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 8px;
  transition: 0s;
  height: 50px;

  svg {
    display: none;
  }

  @media (max-width: 650px){ {
    display: grid;
    place-items: center;
    width: 50px;

    svg {
      display: block;
    }
  }

  @media (max-height: 500px){
    display: grid;
    place-items: center;
    width: 50px;

    svg {
      display: block;
    }
  }
  }
`;

const Thumb = styled.span`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => `${theme.theme === 'dark' ? "45" : "5"}px`};
  transform: translate(0, -50%);
  height: 25px;
  width: 25px;
  background: ${({ theme }) => theme.text};
  opacity: 0.5;
  border-radius: inherit;
  transition: 0.5s;
  cursor: pointer;

  :hover{
    opacity: .7;
  }

  @media (max-width: 650px) {
    display: none;
  }

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
      <Thumb />
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </ThemeButtonContainer>
  );
};

export default ThemeButton;