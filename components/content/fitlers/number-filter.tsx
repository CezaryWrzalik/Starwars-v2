import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

const NumberFilterContainer = styled.div`
  width: 100%;
  margin-top: 10px;

  label {
    color: ${({theme}) => theme.text};
    padding: 10px;
  }

  input {
    background: inherit;
    border: 1px solid ${({theme}) => theme.text};
    padding: 5px 20px;
    color: ${({theme}) => theme.text};
    width: 150px;
  }
`;

type PropsType = {
  filter: {
    name?: string;
    type?: string;
    minValue?: number;
    maxValue?: number;
  };
  updateFilters: (key: string, value: string | number | object) => void;
};

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
      maxValue: max
    };

    updateFilters(filter.name!, obj);
  }, [min, max]);

  return (
    <NumberFilterContainer>
      <label htmlFor="">{filter.name}</label>
      <input
        type="number"
        onChange={e => handleChange(e, "min")}
        placeholder={`min`}
      />
      <input
        type="number"
        onChange={e => handleChange(e, "max")}
        placeholder={`max`}
      />
    </NumberFilterContainer>
  );
};

export default NumberFilter;
