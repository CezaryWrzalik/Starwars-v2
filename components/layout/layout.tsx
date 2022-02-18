import { Dispatch, SetStateAction, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../redux";
import Footer from "./footer";
import Header from "./header";

type PropsType = {
  setTheme: Dispatch<SetStateAction<string>>;
  children: JSX.Element;
};

const LayoutContainer = styled.div`
  display: grid;
  grid-template: 100px 1fr 100px/ 1fr;
  height: 100%;

  @media (max-width: 650px) {
    grid-template: 80px 1fr 80px/ 1fr;
  }
`;

const Layout = ({ children, setTheme }: PropsType) => {
  const { theme } = useSelector((state: State) => state.theme);

  useEffect(() => {
    setTheme(theme);
		console.log("blabl");
  }, [theme]);

  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
