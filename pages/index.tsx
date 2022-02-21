import type { NextPage } from "next";
import styled from "styled-components";
import { CategoriesType } from "../types/fetchedData-types";
import { fetchCategories } from "../lib/starwars";

const HomePageContainer = styled.div`
  height: 100%;
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
  transition: opacity 0.5s;
  text-transform: uppercase;

  &:hover {
    opacity: 0.4;
  }
`;

const Home: NextPage<CategoriesType> = ({ categories }) => {
  return (
    <HomePageContainer>
      <ListContainer>
        {categories.map((category: string, i: number) => (
          <ListItem key={i}>{category}</ListItem>
        ))}
      </ListContainer>
    </HomePageContainer>
  );
};

export const getStaticProps = async () => {
  const categories = await fetchCategories();

  return {
    props: {
      categories: categories,
    },
  };
};

export default Home;
