import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { generateFilters } from "../../lib/filters";
import { actionCreators } from "../../redux";
import { CardsType } from "../../types/fetchedData-types";
import NumberFilter from "./fitlers/number-filter";
import StringFilter from "./fitlers/string-filter";

type PropsType = {
  cards: CardsType[];
};

type FiltersType = {
  type?: string;
  name?: string;
};

const FiltersContainer = styled.div`
  width: 200px;
  padding: 10px;

	@media(max-width: 650px){
    padding: 0px 10px;
		width: 100vw;
		display: flex;
		gap: 20px;
		overflow-x: scroll;

		::-webkit-scrollbar-thumb {
			display: none;
		}
	}
`;

const Aside = ({ cards }: PropsType) => {
  const dispatch = useDispatch();
  const { updateFilters } = bindActionCreators(actionCreators, dispatch);
  const [filters, setFilters] = useState<Array<FiltersType>>([]);
  const [filterValues, setFilterValues] = useState({});

  const hadnleUpdateFilters = (key: string, value: string | number | object) => {
    const obj = {
      ...filterValues,
      [key]: value,
    };

    setFilterValues(obj);
  };

  useEffect(() => {
    const generatedFilters = generateFilters(cards);
    setFilters(generatedFilters!);
  }, []);

  useEffect(() => {
    const obj: FiltersType = {};

    for (const key of filters) {
      obj[key.name as keyof typeof obj] = "";
    }

    setFilterValues(obj);
  }, [filters]);

	useEffect(() => {
		updateFilters(filterValues)
	},[filterValues])

  return (
    <FiltersContainer>
      {filters.map((filter: FiltersType, i: number) => {
        if (filter.type === "string") {
          return (
            <StringFilter key={i}
              name={filter.name!}
              updateFilters={hadnleUpdateFilters}
            />
          );
        } else if (filter.type === "number") {
          return (
            <NumberFilter key={i}
							filter={filter}
              updateFilters={hadnleUpdateFilters}
            />
          );
        }
      })}
    </FiltersContainer>
  );
};

export default Aside;
