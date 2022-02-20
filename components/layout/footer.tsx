import styled from "styled-components";

const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-weight: 400;
    letter-spacing: 1px;
    height: 20px;
  }

  @media (max-height: 500px) {
		border-top: none;
    h4 {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h4>App by CezaryWrzalik</h4>
    </FooterContainer>
  );
};

export default Footer;
