import { GetStaticProps, NextPage, NextPageContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import Content from "../../components/content/content";
import { fetchAllCardsByCategory, fetchCategories } from "../../lib/starwars";
import { actionCreators, State } from "../../redux";
import { CardsResultType } from "../../types/fetchedData-types";

interface IParams extends ParsedUrlQuery {
  category: string;
}

type PropsType = {
  cards: CardsResultType[];
  category: string;
  categories: string[];
};

const CategoryPageContainer = styled.div`
  display: flex;
`;

const CategoryPage: NextPage<PropsType> = (props) => {
  const { cards, category } = props;

  const dispatch = useDispatch();
  const { saveData } = bindActionCreators(actionCreators, dispatch);
  const { data } = useSelector((state: State) => state.data);

  useEffect(() => {
    if (data[props.category as keyof typeof data].length < 1) {
      saveData(category, cards);
    }
  });

  return (
    <CategoryPageContainer>
      <Content cards={cards} category={category} />
    </CategoryPageContainer>
  );
};

export const getStaticPaths = async () => {
  const categories = await fetchCategories();

  const paths = categories.map((category: string) => `/${category}`);

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category } = context.params as IParams;

  const cards = await fetchAllCardsByCategory(category);

  return { props: { cards, category } };
};

export default CategoryPage;
