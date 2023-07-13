import styled from 'styled-components';

export const StyledTableDiv = styled.div`
  background-color: ${(props) => props.theme.palette.shades.whiteTer};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.125rem;
  padding: 1.875rem;
  max-width: 1114px;
  border-radius: 0.5rem;

  box-shadow: -12px -7px 93px -47px
    ${(props) => props.theme.palette.shades.greyLight};

  @media screen and (max-width: 500px) {
    margin-top: 1.25rem;
    padding: 0.625rem;
    overflow: auto;
    margin: 0.625rem;
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    margin-top: 1.875rem;
    padding: 1.25rem;
    overflow: auto;
    margin: 0.625rem;
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
    margin-top: 2.5rem;
    padding: 1.563rem;
    overflow: auto;
  }

  @media screen and (min-width: 921px) {
    margin-top: 3.125rem;
  }
`;

export const StyledNamesDiv = styled.div`
  display: flex;
  font-weight: 500;
  justify-content: left;
  gap: 1.25rem;

  @media screen and (max-width: 500px) {
    gap: 0.625rem;
  }
`;

export const StyledRow = styled.p`
  width: 180px;
  margin-bottom: 30px;

  @media screen and (max-width: 500px) {
    width: 180px;
    font-size: 1rem;
  }
`;
