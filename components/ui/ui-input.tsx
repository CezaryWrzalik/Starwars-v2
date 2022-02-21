import styled from "styled-components";

type PropsType = {
  placeholder: string;
  type: string;
  id: string;
};

export const UiInputContainer = styled.input`
  height: 30px;
  padding: 2px 5px;
  border-radius: var(--default-radius);
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.text};
  width: 100%;
  transiton: 0.3s;
`;

const UiInput = ({ placeholder, type, id }: PropsType) => {
  return (
    <UiInputContainer
      placeholder={placeholder}
      type={type}
      id={id}
    ></UiInputContainer>
  );
};

export default UiInput;
