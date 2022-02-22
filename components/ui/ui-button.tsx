import styled from "styled-components";

type PropsType = {
  type?: string;
  name?: string;
  value?: string;
  children: JSX.Element;
};

const UiButtonContainer = styled.button`
  background: inherit;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 0 10px;
  width: 100%;
  border-radius: var(--default-radius);
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: opacity 0.3s;
  height: 100%;

  :hover {
    opacity: 0.5;
  }
`;

const UiButton = ({ children, name, value }: PropsType) => {
  return (
    <UiButtonContainer name={name} value={value}>
      {children}
    </UiButtonContainer>
  );
};

export default UiButton;
