import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;
export const StyledContent = styled.p`
  font-size: 12px;

  @media screen and (min-width: 765px) {
    font-size: 17px;
  }
`;
export const StyledFooterContent = styled.div`
  text-align: center;
  margin: 0 10px;
`;
