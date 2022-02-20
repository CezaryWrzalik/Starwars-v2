import type { NextPage } from "next";
import styled from "styled-components";

const HomePageContainer = styled.div`
  height: calc(100vh - 160px);
  display: grid;
  place-items: center;
`;

const ListContainer = styled.ul`
  list-style: none;
  text-align: center;
  width: 200px;
`;

const ListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding: 10px 60px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.4;
  }
`;

const Home: NextPage = () => {
  return (
    <HomePageContainer>
      <ListContainer>
        <ListItem>people</ListItem>
        <ListItem>ccococo</ListItem>
        <ListItem>people</ListItem>
        <ListItem>people</ListItem>
        <ListItem>people</ListItem>
        <ListItem>people</ListItem>
      </ListContainer>
    </HomePageContainer>
  );
};

export default Home;
