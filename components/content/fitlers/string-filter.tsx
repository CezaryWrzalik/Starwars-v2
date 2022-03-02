import { ChangeEvent } from "react";
import styled from "styled-components";

export const StringFilterContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  
  label {
    display: block;
    padding: 5px;
    color: ${({ theme }) => theme.text};
    text-transform: capitalize;
  }

  input {
    width: 150px;
    padding: 5px 20px;
    background: inherit;
    color: ${({ theme }) => theme.text};
    border-radius: var(--default-radius);
    border: 1px solid ${({ theme }) => theme.text};
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
