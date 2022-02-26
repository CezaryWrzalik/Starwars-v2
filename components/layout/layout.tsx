import { Dispatch, SetStateAction, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../redux";
import Footer from "./footer";
import Header from "./header";
import UiNotification from "../ui/ui-notification";

type PropsType = {
  setTheme: Dispatch<SetStateAction<string>>;
  children: JSX.Element;
};

const LayoutContainer = styled.div`
  height: 100%;

  display: grid;
  grid-template: 80px calc(100% - 160px) 80px/ 1fr;

  @media (max-width: 650px) {
    grid-template: 80px calc(100% - 160px) 80px/ 1fr;
  }

  @media (max-height: 500px) {
    grid-template: 100% / 100px 1fr 100px;
  }
`;

const Layout = ({ children, setTheme }: PropsType) => {
  const { theme } = useSelector((state: State) => state.theme);

  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
      <UiNotification />
    </LayoutContainer>
  );
};

export default Layout;
