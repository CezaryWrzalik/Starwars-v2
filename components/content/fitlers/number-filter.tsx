import { ChangeEvent, useEffect, useState } from "react";
import { StringFilterContainer } from "./string-filter";
import styled from "styled-components";

type PropsType = {
  filter: {
    name?: string;
    type?: string;
    minValue?: number;
    maxValue?: number;
  };
  updateFilters: (key: string, value: string | number | object) => void;
};

const NumberFilterContainer = styled(StringFilterContainer)`
  input {
    border-radius: 15px 15px 0 0;
  }

  input:nth-child(3) {
    border-radius: 0 0 15px 15px;
  }
`;


const NumberFilter = ({ filter, updateFilters }: PropsType) => {
  const [min, setMin] = useState(filter.minValue);
  const [max, setMax] = useState(filter.maxValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, minmax: string) => {
    const value = +e.target.value;

    if (minmax == "min") {
      setMin(value);
    } else {
      setMax(value);
    }
  };

  useEffect(() => {
    const obj = {
      minValue: min,
      maxValue: max,
    };

    updateFilters(filter.name!, obj);
  }, [min, max]);

  return (
    <NumberFilterContainer>
      <label htmlFor="">{filter.name}</label>
      <input
        type="number"
        onChange={(e) => handleChange(e, "min")}
        placeholder={`min`}
      />
      <input
        type="number"
        onChange={(e) => handleChange(e, "max")}
        placeholder={`max`}
      />
    </NumberFilterContainer>
  );
};

export default NumberFilter;
