import { ChangeEvent } from "react";
import styled from "styled-components";

const StringFilterContainer = styled.div`
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
  name: string;
  updateFilters: (key: string, value: string | number) => void;
};

const StringFilter = ({ name, updateFilters }: PropsType) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateFilters(name, value);
  };

  return (
    <StringFilterContainer>
      <label htmlFor="">{name}</label>
      <input type="text" onChange={handleChange} />
    </StringFilterContainer>
  );
};

export default StringFilter;
