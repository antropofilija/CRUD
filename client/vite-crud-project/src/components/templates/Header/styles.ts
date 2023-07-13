import { styled } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  margin: 10px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 500px) {
    max-width: 500px;
  }

  @media screen and (min-width: 680px) {
    max-width: 680px;
  }

  @media screen and (min-width: 920px) {
    max-width: 920px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 1114px;
  }
`;

export const StyledAddButton = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 2.063rem;
`;
